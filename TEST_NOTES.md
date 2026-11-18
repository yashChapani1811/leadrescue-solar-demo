# Verification notes

Last checked: 18 November 2026.

- `node --check app.js` passed.
- Static render smoke tests covered landing page, overview, enquiries, follow-ups, reports and settings.
- New typography uses the Google Fonts stylesheet and falls back gracefully offline; no font files are bundled.
- Browser-based screenshots and responsive interaction tests could not be rerun in this environment because Chromium blocked navigation (`ERR_BLOCKED_BY_ADMINISTRATOR`). The older screenshots in the working source should not be used as proof of the revised layout.

Before publishing or collecting product feedback, manually check Chrome/Edge on a laptop and phone, test add/edit/search/import/export/reset using fictional names only, and confirm the GitHub Pages workflow succeeds.
