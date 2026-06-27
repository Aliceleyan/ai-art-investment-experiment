# AI-Enabled Knowledge Filtering Experiment Platform

This folder contains a working browser-based experiment for the study:
**AI-Enabled Knowledge Filtering in Art Investment Decision-Making**.

## What It Includes

- Consent screen
- Background questionnaire
- 2 x 2 mixed experimental design
- Four fictional artwork investment scenarios
- Two interface conditions:
  - Unfiltered Information Interface
  - AI Knowledge Filtering Interface, which includes the same original artwork information plus an AI-filtered knowledge report
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

## How To Run

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Important Research Note

This is a front-end prototype. It saves data in the participant's browser and
allows CSV/JSON export at the end. For formal online data collection, connect it
to a backend database, Qualtrics, Google Sheets, or a secure research data
collection endpoint.

## Recommended Pilot Checks

Before collecting real data:

1. Run 5-10 pilot sessions.
2. Check whether task duration is reasonable.
3. Confirm that participants understand the difference between the two interfaces.
4. Check reliability of multi-item constructs.
5. Decide whether four artwork tasks are sufficient or whether six are needed.
6. Add ethics approval text and institution-specific consent wording.
