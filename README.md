# AI-Enabled Knowledge Filtering Experiment Platform

This folder contains a working browser-based experiment for the study:
**AI-Enabled Knowledge Filtering in Art Investment Decision-Making**.

## What It Includes

- Consent screen
- Background questionnaire
- 2 x 2 mixed experimental design
- Four fictional artwork investment scenarios
- Two interface conditions:
  - Unfiltered Information Interface, presented as one continuous dossier paragraph
  - AI Knowledge Filtering Interface, which includes the same original artwork information plus a visual AI-filtered knowledge report
- Bilingual English/Chinese participant-facing questions
- Counterbalanced artwork-interface pairing
- Randomised task order
- Post-task measures:
  - valuation judgment
  - willingness to pay
  - perceived investment risk
  - investment intention
  - decision confidence
  - perceived knowledge quality
  - perceived information overload
  - trust in AI-filtered knowledge for AI scenarios
  - suitability of AI filtering across six knowledge types
- Behavioural data:
  - task completion time
  - AI module clicks
  - time spent in AI modules
- Final reflection questions
- Option-based knowledge-type questions with examples and prompts
- CSV and JSON data export
- Local SQLite database collection through `server.py`

## How To Run

For local testing on your own computer, run the database server from this folder:

```bash
python3 server.py
```

Then open:

```text
http://127.0.0.1:8081
```

When participants finish, their responses are saved into:

```text
experiment-data/responses.sqlite3
```

You can download all artwork-task-level responses as CSV from:

```text
http://127.0.0.1:8081/api/export.csv
```

You can inspect all raw JSON records from:

```text
http://127.0.0.1:8081/api/responses
```

## Important Research Note

If you open `index.html` directly with `file://`, the experiment still works,
but it cannot write to the shared SQLite database. In that mode, data is saved in
the participant's browser and can be downloaded at the end. For shared data
collection, use `python3 server.py`.

## Deploying on Render

This project is prepared for deployment as a Render Web Service.

### 1. Put the project on GitHub

Commit and push the full `experiment-platform` folder to a GitHub repository.
Render will deploy from that repository.

### 2. Create a Render Web Service

In Render:

1. Choose **New +**.
2. Choose **Web Service**.
3. Connect the GitHub repository that contains this project.
4. Set the root directory to:

```text
experiment-platform
```

5. Use these service settings:

```text
Runtime: Python
Build Command: pip install -r requirements.txt
Start Command: python server.py
```

The server reads Render's `PORT` environment variable automatically. Locally it
falls back to port `8081`.

### 3. SQLite persistence on Render

SQLite is acceptable for prototype testing, but it is not ideal for long-term
public data collection on Render unless you configure persistent storage.

By default, Render service filesystems are not a reliable place to keep research
data permanently. A redeploy, instance replacement, or service restart can cause
files written inside the service container to disappear. This means the SQLite
file may not persist unless you attach a Render Persistent Disk and store the
database there.

If you want to test with SQLite on Render, add a Persistent Disk and set an
environment variable:

```text
DATA_DIR=/var/data
```

The app will then write the database to:

```text
/var/data/responses.sqlite3
```

### 4. Recommended production data options

For real participant data collection, a hosted database is safer than local
SQLite. Recommended options:

- **Supabase Postgres**: good for structured survey data, CSV exports, SQL
  queries, and long-term storage.
- **Firebase / Firestore**: good for simple JSON-style response storage and easy
  web integration.
- **Render Postgres**: also suitable if you want to keep hosting and database
  inside Render.

For a publishable research project, use SQLite only for pilot testing or when
you have explicitly configured persistent disk backups.

## Public API Routes

When deployed, the app keeps the same API routes:

```text
POST /api/submit       Save one participant submission
GET  /api/responses    View all raw JSON records
GET  /api/export.csv   Download all artwork-task-level responses as CSV
```

## Recommended Pilot Checks

Before collecting real data:

1. Run 5-10 pilot sessions.
2. Check whether task duration is reasonable.
3. Confirm that participants understand the difference between the two interfaces.
4. Check reliability of multi-item constructs.
5. Decide whether four artwork tasks are sufficient or whether six are needed.
6. Add ethics approval text and institution-specific consent wording.
