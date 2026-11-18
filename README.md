# LeadRescue — Solar Enquiry Manager (Interactive Concept)

This is the **first working browser demo** for the proposed solar SaaS business.

**Status: Prototype for conversations and validation only. Do not use with real customer data.**

## What works right now

- Product landing page with explanation and demo link
- Sample solar-company dashboard with fictional records
- Enquiry table, search, stage and priority filters
- Add or edit a fictional enquiry
- Follow-up queue based on due dates
- Mark an example enquiry as contacted; next follow-up moves ahead three days
- Import *fictional* CSV records (max 200 rows, max 2 MB), with sample file download
- Export CSV, download summary report, print-to-PDF
- Browser-local data persistence and reset
- Works at mobile and desktop screen widths
- Message-preview feature; does **not** actually send a message

## Quick start (Windows)

1. Unzip the folder.
2. Double click `START_DEMO_WINDOWS.bat` if Python is installed, **or** open `index.html` in Chrome/Edge.
3. Press **Open live demo** (or **Have a look around** on the home page).
4. Try modifying fictional examples. You can reset the demo in Settings.

Using the Python server manually:

```shell
cd leadrescue-demo
python -m http.server 8080
```
Then visit `http://localhost:8080`.

## Very important limitations

This is a **static browser demo**, not a hosted multi-user SaaS. It has NO secure authentication, multi-company backend isolation, server database, audit trail, live emails/WhatsApp, automatic outreach, real calendar integration, payment processing, customer onboarding, or production backups. Data stays in `localStorage` on one browser and can be read or deleted by anyone with access to that browser. Do **not** enter real customer identities, phone numbers, survey photos, quotations or sensitive information.

The dashboard's records are fictional. They don't represent solar market performance or prove business results. The brand name `LeadRescue` is a working name and needs naming/trademark checks before commercial use.

## What to ask the solar-company contact

Use `docs/INTERVIEW_SCRIPT.md` and `docs/PILOT_PLAN.md`. The most important question is whether **any real company would pay for the specific follow-up workflow**, given its existing software and sales process.

## Proposed production architecture (not implemented yet)

- Next.js + TypeScript frontend
- Express + TypeScript API
- PostgreSQL + Prisma data model
- Secure company workspaces with staff roles and audit logs
- Private storage; server-side validation; field-level encryption where appropriate
- Background jobs for notification queues and support workflows
- Paid billing provider after KYC, verified webhooks, and reconciliation
- Backups and restore testing; monitoring and alerts
- Human approval queue for outbound campaigns, refunds, production releases, security incidents

See `docs/PRODUCTION_BACKLOG.md`.

## Design refinement (November 2026)

- Kept the original dark-green, cream, sage and yellow palette, and preserved the page structure.
- Switched to **Fraunces** for editorial headings and **Plus Jakarta Sans** for regular text and buttons.
- Reworked the three feature cards as a featured story with two supporting cards, and introduced a less rigid rhythm across the steps and dashboard.
- Rewrote public-facing copy and key dashboard messages in plain English.
- Fonts load from Google Fonts when online. If blocked, safe local fallback fonts are used. **No font files are bundled.**

## GitHub Pages deployment

See [`GITHUB_DEPLOY.md`](./GITHUB_DEPLOY.md). The static demo can be hosted on a public GitHub Pages repository. It is **not** a live, secure, multi-tenant SaaS.

## Demo privacy

No third-party analytics, app API calls or customer messaging are included. **Google Fonts is requested from Google's font CDN when online.** Browser local storage is used for fictional sample records only. The HTML and JavaScript work offline with fallback fonts, but full PWA offline install is a future improvement. No actual customer communications are sent.
