from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import csv
import io
import json
import os
import sqlite3
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid


ROOT = Path(__file__).resolve().parent
DATA_DIR = Path(os.environ.get("DATA_DIR", ROOT / "experiment-data")).expanduser()
DB_PATH = DATA_DIR / "responses.sqlite3"
SUPABASE_URL = os.environ.get("SUPABASE_URL", "").rstrip("/")
SUPABASE_SERVICE_ROLE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "")
SUPABASE_TABLE = os.environ.get("SUPABASE_TABLE", "experiment_submissions")


RESPONSE_FIELDNAMES = [
    "databaseRecordId",
    "submissionUuid",
    "serverCreatedAt",
    "participantId",
    "assignment",
    "conditionOrderGroup",
    "experienceGroup",
    "completedAt",
    "completionStatus",
    "instructionTimeMs",
    "artMarketTransactionExperience",
    "yearsExperience",
    "pricingFamiliarity",
    "artExpertise",
    "investmentExperience",
    "aiFamiliarity",
    "aiUseFrequency",
    "riskPreference",
    "artInterest",
    "categoryInterest",
    "ageGroup",
    "education",
    "preferredInterface",
    "trustedInterface",
    "aiSuitableTypes",
    "aiSuitableNote",
    "humanExpertiseTypes",
    "humanExpertiseNote",
    "realUse",
    "valuation",
    "wtp",
    "intention",
    "risk",
    "valuationConfidence",
    "investmentConfidence",
    "judgementClarity",
    "infoValueUnderstanding",
    "infoRelevant",
    "infoClear",
    "infoGrounded",
    "infoMainPoints",
    "tooMuchInfo",
    "effortMainPoints",
    "hardTellImportance",
    "confusedAfterReading",
    "separatedImportance",
    "explainedSignals",
    "expertBoundaryClear",
    "artworkId",
    "artworkTitle",
    "artist",
    "interface",
    "taskNumber",
    "taskTimeMs",
    "questionnaireSubmitTimeMs",
    "moduleStats",
    "openedRiskModule",
    "openedSourceModule",
    "openedExpertModule",
    "aiUsefulHighlights",
    "aiNoImportantOmission",
    "aiRealReference",
    "aiSourceEnough",
]

EVENT_FIELDNAMES = [
    "databaseRecordId",
    "submissionUuid",
    "participantId",
    "conditionOrderGroup",
    "experienceGroup",
    "eventType",
    "timestamp",
    "screen",
    "moduleName",
]

ASSIGNMENT_FIELDNAMES = [
    "databaseRecordId",
    "submissionUuid",
    "serverCreatedAt",
    "participantId",
    "conditionOrderGroup",
    "experienceGroup",
    "taskOrder",
    "instructionTimeMs",
    "completionStatus",
    "completedAt",
]


def using_supabase():
    return bool(SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY)


def connect_db():
    conn = sqlite3.connect(DB_PATH, timeout=30)
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA busy_timeout=30000")
    conn.execute("PRAGMA synchronous=NORMAL")
    return conn


def init_db():
    if using_supabase():
        return
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with connect_db() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS submissions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                submission_uuid TEXT NOT NULL,
                participant_id TEXT,
                experience_group TEXT,
                assignment TEXT,
                completed_at TEXT,
                created_at INTEGER NOT NULL,
                remote_addr TEXT,
                user_agent TEXT,
                payload_json TEXT NOT NULL
            )
            """
        )
        existing_cols = {row[1] for row in conn.execute("PRAGMA table_info(submissions)").fetchall()}
        migrations = {
            "submission_uuid": "ALTER TABLE submissions ADD COLUMN submission_uuid TEXT",
            "remote_addr": "ALTER TABLE submissions ADD COLUMN remote_addr TEXT",
            "user_agent": "ALTER TABLE submissions ADD COLUMN user_agent TEXT",
        }
        for col, statement in migrations.items():
            if col not in existing_cols:
                conn.execute(statement)
        conn.execute(
            "UPDATE submissions SET submission_uuid = lower(hex(randomblob(16))) WHERE submission_uuid IS NULL OR submission_uuid = ''"
        )
        conn.commit()


def supabase_request(method, path, data=None, query=None, prefer=None):
    if not using_supabase():
        raise RuntimeError("Supabase is not configured")
    query_string = f"?{urllib.parse.urlencode(query)}" if query else ""
    url = f"{SUPABASE_URL}/rest/v1/{path}{query_string}"
    headers = {
        "apikey": SUPABASE_SERVICE_ROLE_KEY,
        "Authorization": f"Bearer {SUPABASE_SERVICE_ROLE_KEY}",
        "Content-Type": "application/json",
    }
    if prefer:
        headers["Prefer"] = prefer
    body = json.dumps(data, ensure_ascii=False).encode("utf-8") if data is not None else None
    request = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            response_body = response.read().decode("utf-8")
            return json.loads(response_body) if response_body else None
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Supabase {method} {path} failed: {error.code} {detail}") from error


def save_submission(payload, remote_addr="", user_agent=""):
    submission_uuid = payload.get("submissionUuid") or str(uuid.uuid4())
    payload["submissionUuid"] = submission_uuid
    payload["serverSaveMode"] = "append_only"
    created_at = int(time.time())

    if using_supabase():
        rows = supabase_request(
            "POST",
            SUPABASE_TABLE,
            data={
                "submission_uuid": submission_uuid,
                "participant_id": payload.get("participantId", ""),
                "experience_group": payload.get("experienceGroup", ""),
                "assignment": payload.get("assignment", ""),
                "completed_at": payload.get("completedAt", ""),
                "created_at": created_at,
                "remote_addr": remote_addr,
                "user_agent": user_agent,
                "payload_json": payload,
            },
            prefer="return=representation",
        )
        record = rows[0] if rows else {}
        return record.get("id", ""), submission_uuid

    payload_json = json.dumps(payload, ensure_ascii=False)
    with connect_db() as conn:
        cursor = conn.execute(
            """
            INSERT INTO submissions (
                submission_uuid, participant_id, experience_group, assignment, completed_at,
                created_at, remote_addr, user_agent, payload_json
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                submission_uuid,
                payload.get("participantId", ""),
                payload.get("experienceGroup", ""),
                payload.get("assignment", ""),
                payload.get("completedAt", ""),
                created_at,
                remote_addr,
                user_agent,
                payload_json,
            ),
        )
        conn.commit()
        return cursor.lastrowid, submission_uuid


def flatten_payload(payload, record=None):
    record = record or {}
    background = payload.get("background", {})
    reflection = payload.get("reflection", {})
    base = {
        "databaseRecordId": record.get("id", ""),
        "submissionUuid": record.get("submission_uuid", payload.get("submissionUuid", "")),
        "serverCreatedAt": record.get("created_at", ""),
        "participantId": payload.get("participantId", ""),
        "assignment": payload.get("assignment", ""),
        "conditionOrderGroup": payload.get("conditionOrderGroup", payload.get("assignment", "")),
        "experienceGroup": payload.get("experienceGroup", ""),
        "completedAt": payload.get("completedAt", ""),
        "completionStatus": payload.get("completionStatus", ""),
        "instructionTimeMs": payload.get("instructionTimeMs", ""),
        "artMarketTransactionExperience": background.get("artMarketTransactionExperience", ""),
        "yearsExperience": background.get("yearsExperience", ""),
        "pricingFamiliarity": background.get("pricingFamiliarity", ""),
        "artExpertise": background.get("artExpertise", ""),
        "investmentExperience": background.get("investmentExperience", ""),
        "aiFamiliarity": background.get("aiFamiliarity", ""),
        "aiUseFrequency": background.get("aiUseFrequency", ""),
        "riskPreference": background.get("riskPreference", ""),
        "artInterest": background.get("artInterest", ""),
        "categoryInterest": background.get("categoryInterest", ""),
        "ageGroup": background.get("ageGroup", ""),
        "education": background.get("education", ""),
        "preferredInterface": reflection.get("preferredInterface", ""),
        "trustedInterface": reflection.get("trustedInterface", ""),
        "aiSuitableTypes": reflection.get("aiSuitableTypes", ""),
        "aiSuitableNote": reflection.get("aiSuitableNote", ""),
        "humanExpertiseTypes": reflection.get("humanExpertiseTypes", ""),
        "humanExpertiseNote": reflection.get("humanExpertiseNote", ""),
        "realUse": reflection.get("realUse", ""),
    }
    for key, value in reflection.items():
        base.setdefault(key, value)
    rows = []
    for response in payload.get("responses", []):
        row = dict(base)
        row.update(response)
        rows.append(row)
    return rows


def event_rows(payload, record=None):
    record = record or {}
    rows = []
    for event in payload.get("events", []):
        row = {
            "databaseRecordId": record.get("id", ""),
            "submissionUuid": record.get("submission_uuid", payload.get("submissionUuid", "")),
            "participantId": payload.get("participantId", ""),
            "conditionOrderGroup": payload.get("conditionOrderGroup", payload.get("assignment", "")),
            "experienceGroup": payload.get("experienceGroup", ""),
        }
        row.update(event)
        rows.append(row)
    return rows


def assignment_row(payload, record=None):
    record = record or {}
    return {
        "databaseRecordId": record.get("id", ""),
        "submissionUuid": record.get("submission_uuid", payload.get("submissionUuid", "")),
        "serverCreatedAt": record.get("created_at", ""),
        "participantId": payload.get("participantId", ""),
        "conditionOrderGroup": payload.get("conditionOrderGroup", payload.get("assignment", "")),
        "experienceGroup": payload.get("experienceGroup", ""),
        "taskOrder": json.dumps(payload.get("taskOrder", []), ensure_ascii=False),
        "instructionTimeMs": payload.get("instructionTimeMs", ""),
        "completionStatus": payload.get("completionStatus", ""),
        "completedAt": payload.get("completedAt", ""),
    }


def write_csv_response(handler, filename, rows, default_fieldnames=None):
    output = io.StringIO()
    fieldnames = list(default_fieldnames or [])
    for row in rows:
        for key in row.keys():
            if key not in fieldnames:
                fieldnames.append(key)
    if fieldnames:
        writer = csv.DictWriter(output, fieldnames=fieldnames)
        writer.writeheader()
        if rows:
            writer.writerows(rows)
    handler.send_response(200)
    handler.send_header("Content-Type", "text/csv; charset=utf-8")
    handler.send_header("Content-Disposition", f"attachment; filename={filename}")
    handler.end_headers()
    handler.wfile.write(output.getvalue().encode("utf-8"))


def all_payloads():
    if using_supabase():
        records = supabase_request(
            "GET",
            SUPABASE_TABLE,
            query={
                "select": "*",
                "order": "id.asc",
            },
        ) or []
        return [
            {
                "id": record.get("id", ""),
                "submission_uuid": record.get("submission_uuid", ""),
                "participant_id": record.get("participant_id", ""),
                "experience_group": record.get("experience_group", ""),
                "assignment": record.get("assignment", ""),
                "completed_at": record.get("completed_at", ""),
                "created_at": record.get("created_at", ""),
                "remote_addr": record.get("remote_addr", ""),
                "user_agent": record.get("user_agent", ""),
                "payload": record.get("payload_json") if isinstance(record.get("payload_json"), dict) else json.loads(record.get("payload_json", "{}")),
            }
            for record in records
        ]

    with connect_db() as conn:
        conn.row_factory = sqlite3.Row
        records = conn.execute("SELECT * FROM submissions ORDER BY id").fetchall()
    return [
        {
            "id": record["id"],
            "submission_uuid": record["submission_uuid"],
            "participant_id": record["participant_id"],
            "experience_group": record["experience_group"],
            "assignment": record["assignment"],
            "completed_at": record["completed_at"],
            "created_at": record["created_at"],
            "remote_addr": record["remote_addr"],
            "user_agent": record["user_agent"],
            "payload": json.loads(record["payload_json"]),
        }
        for record in records
    ]


class ExperimentHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        if self.path != "/api/submit":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", "0"))
        try:
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
        except json.JSONDecodeError:
            self.send_error(400, "Invalid JSON")
            return

        try:
            record_id, submission_uuid = save_submission(
                payload,
                remote_addr=self.client_address[0] if self.client_address else "",
                user_agent=self.headers.get("User-Agent", ""),
            )
        except RuntimeError as error:
            self.send_error(500, str(error))
            return

        self.send_json({
            "ok": True,
            "id": record_id,
            "submissionUuid": submission_uuid,
            "saveMode": "append_only",
            "databaseBackend": "supabase" if using_supabase() else "sqlite",
            "database": SUPABASE_TABLE if using_supabase() else str(DB_PATH),
        })

    def do_GET(self):
        if self.path == "/api/responses":
            self.send_json({"records": all_payloads()})
            return
        if self.path in {"/api/export.csv", "/api/responses.csv"}:
            rows = []
            for record in all_payloads():
                rows.extend(flatten_payload(record["payload"], record))
            write_csv_response(self, "responses.csv", rows, RESPONSE_FIELDNAMES)
            return
        if self.path == "/api/events.csv":
            rows = []
            for record in all_payloads():
                rows.extend(event_rows(record["payload"], record))
            write_csv_response(self, "events.csv", rows, EVENT_FIELDNAMES)
            return
        if self.path == "/api/participant_assignments.csv":
            rows = [assignment_row(record["payload"], record) for record in all_payloads()]
            write_csv_response(self, "participant_assignments.csv", rows, ASSIGNMENT_FIELDNAMES)
            return
        if self.path == "/api/health":
            self.send_json({
                "ok": True,
                "databaseBackend": "supabase" if using_supabase() else "sqlite",
                "database": SUPABASE_TABLE if using_supabase() else str(DB_PATH),
                "records": len(all_payloads()),
            })
            return
        if self.path == "/api/stimuli.json":
            stimuli_path = ROOT / "stimuli.json"
            if stimuli_path.exists():
                body = stimuli_path.read_bytes()
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            self.send_error(404, "stimuli.json not found")
            return
        return super().do_GET()

    def send_json(self, payload):
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    init_db()
    port = int(os.environ.get("PORT", "8081"))
    host = "0.0.0.0"
    server = ThreadingHTTPServer((host, port), ExperimentHandler)
    print(f"Experiment server running at http://{host}:{port}")
    print(f"SQLite database: {DB_PATH}")
    server.serve_forever()
