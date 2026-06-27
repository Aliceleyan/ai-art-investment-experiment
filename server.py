from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import csv
import io
import json
import sqlite3
import time


ROOT = Path(__file__).resolve().parent
DATA_DIR = ROOT / "experiment-data"
DB_PATH = DATA_DIR / "responses.sqlite3"


def init_db():
    DATA_DIR.mkdir(exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS submissions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                participant_id TEXT,
                experience_group TEXT,
                assignment TEXT,
                completed_at TEXT,
                created_at INTEGER NOT NULL,
                payload_json TEXT NOT NULL
            )
            """
        )
        conn.commit()


def flatten_payload(payload):
    background = payload.get("background", {})
    reflection = payload.get("reflection", {})
    base = {
        "participantId": payload.get("participantId", ""),
        "assignment": payload.get("assignment", ""),
        "experienceGroup": payload.get("experienceGroup", ""),
        "completedAt": payload.get("completedAt", ""),
        "artExperience": background.get("artExperience", ""),
        "yearsExperience": background.get("yearsExperience", ""),
        "investmentExperience": background.get("investmentExperience", ""),
        "aiFamiliarity": background.get("aiFamiliarity", ""),
        "riskPreference": background.get("riskPreference", ""),
        "artInterest": background.get("artInterest", ""),
        "ageGroup": background.get("ageGroup", ""),
        "education": background.get("education", ""),
        "preferredInterface": reflection.get("preferredInterface", ""),
        "aiSuitableTypes": reflection.get("aiSuitableTypes", ""),
        "aiSuitableNote": reflection.get("aiSuitableNote", ""),
        "humanExpertiseTypes": reflection.get("humanExpertiseTypes", ""),
        "humanExpertiseNote": reflection.get("humanExpertiseNote", ""),
        "realUse": reflection.get("realUse", ""),
        "aiMarket": reflection.get("aiMarket", ""),
        "aiArtist": reflection.get("aiArtist", ""),
        "aiObject": reflection.get("aiObject", ""),
        "aiRisk": reflection.get("aiRisk", ""),
        "aiExpert": reflection.get("aiExpert", ""),
        "aiAesthetic": reflection.get("aiAesthetic", ""),
    }
    rows = []
    for response in payload.get("responses", []):
        row = dict(base)
        row.update(
            {
                "taskNumber": response.get("taskNumber", ""),
                "artworkId": response.get("artworkId", ""),
                "artworkTitle": response.get("artworkTitle", ""),
                "artist": response.get("artist", ""),
                "interface": response.get("interface", ""),
                "valuation": response.get("valuation", ""),
                "wtp": response.get("wtp", ""),
                "risk": response.get("risk", ""),
                "intention": response.get("intention", ""),
                "confidence": response.get("confidence", ""),
                "knowledgeQuality": response.get("knowledgeQuality", ""),
                "informationOverload": response.get("informationOverload", ""),
                "trustAI": response.get("trustAI", ""),
                "taskTimeMs": response.get("taskTimeMs", ""),
                "moduleStats": response.get("moduleStats", ""),
            }
        )
        rows.append(row)
    return rows


def all_payloads():
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        records = conn.execute("SELECT * FROM submissions ORDER BY id").fetchall()
    return [
        {
            "id": record["id"],
            "participant_id": record["participant_id"],
            "experience_group": record["experience_group"],
            "assignment": record["assignment"],
            "completed_at": record["completed_at"],
            "created_at": record["created_at"],
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

        payload_json = json.dumps(payload, ensure_ascii=False)
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.execute(
                """
                INSERT INTO submissions (
                    participant_id, experience_group, assignment, completed_at, created_at, payload_json
                )
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    payload.get("participantId", ""),
                    payload.get("experienceGroup", ""),
                    payload.get("assignment", ""),
                    payload.get("completedAt", ""),
                    int(time.time()),
                    payload_json,
                ),
            )
            conn.commit()
            record_id = cursor.lastrowid

        self.send_json({"ok": True, "id": record_id, "database": str(DB_PATH)})

    def do_GET(self):
        if self.path == "/api/responses":
            self.send_json({"records": all_payloads()})
            return
        if self.path == "/api/export.csv":
            rows = []
            for record in all_payloads():
                rows.extend(flatten_payload(record["payload"]))
            output = io.StringIO()
            if rows:
                writer = csv.DictWriter(output, fieldnames=list(rows[0].keys()))
                writer.writeheader()
                writer.writerows(rows)
            self.send_response(200)
            self.send_header("Content-Type", "text/csv; charset=utf-8")
            self.send_header("Content-Disposition", "attachment; filename=experiment_responses.csv")
            self.end_headers()
            self.wfile.write(output.getvalue().encode("utf-8"))
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
    port = 8081
    server = ThreadingHTTPServer(("127.0.0.1", port), ExperimentHandler)
    print(f"Experiment server running at http://127.0.0.1:{port}")
    print(f"SQLite database: {DB_PATH}")
    server.serve_forever()
