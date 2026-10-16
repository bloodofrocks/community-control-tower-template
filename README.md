# Community Control Tower Template

Free-first, approval-first Google Sheets and Apps Script templates for people
who want one personal dashboard for client outreach and job applications.

## What this is

This repository is a reusable template. Each person should make their own copy
of the Google Sheet and bind their own Apps Script project to that copy.

The template includes:

- A single dashboard for outreach and job applications
- Separate data tabs for leads, follow-ups, jobs, applications, and activity
- Developer and Operations CV profile examples
- Duplicate and suppression controls
- Approval gates before email, social publishing, or job applications

## What this is not

- It is not a hosted multi-user service.
- It does not collect or transmit CVs to the repository owner.
- It does not send email or submit applications automatically.
- It does not include credentials, OAuth tokens, spreadsheet IDs, deployment IDs,
  personal CVs, or private contact data.

## Quick start

1. Copy the workbook structure into a new Google Sheet that you own.
2. Rename the spreadsheet tabs to match the headers in `schemas/`.
3. Copy `apps-script/Code.gs` into the Sheet-bound Apps Script editor.
4. Replace `YOUR_SPREADSHEET_ID` with your own spreadsheet ID.
5. Run `setupDashboard` once and review the authorization prompt.
6. Add your own CV profile and verified job/lead records.
7. Keep `DRY_RUN` enabled until every action has been reviewed.

## Safety

- Never commit a CV, API key, OAuth file, token, password, or private lead list.
- Keep email and social actions approval-first.
- Verify job postings and business contacts before drafting.
- Follow applicable privacy, anti-spam, employment, and platform rules.
- Use a separate private copy for personal data.

## License

MIT. See [LICENSE](./LICENSE).
