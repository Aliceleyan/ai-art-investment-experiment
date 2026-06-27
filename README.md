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

For real data collection on your own computer, run the database server from this folder:

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

## Recommended Pilot Checks

Before collecting real data:

1. Run 5-10 pilot sessions.
2. Check whether task duration is reasonable.
3. Confirm that participants understand the difference between the two interfaces.
4. Check reliability of multi-item constructs.
5. Decide whether four artwork tasks are sufficient or whether six are needed.
6. Add ethics approval text and institution-specific consent wording.
