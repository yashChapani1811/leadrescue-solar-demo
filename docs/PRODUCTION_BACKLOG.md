# Production backlog — build in this order

## Milestone 1 — validation (current)

- [x] Interactive lead-management demo with fictional sample data
- [x] CSV import/export, stage tracking, follow-up queue, reports
- [x] Interview script and pilot hypothesis
- [ ] Meet at least 10 solar-company staff/owners; record anonymized feedback
- [ ] Secure at least 2 pilot commitments before committing to the complete platform

## Milestone 2 — production foundation (not implemented)

- [ ] Server-backed Next.js / Express application
- [ ] PostgreSQL schemas: organizations, members, roles, leads, activities, tasks, survey records, quotations, subscriptions, invoices, approval requests
- [ ] Organization-level query authorization and isolation tests (deny by default)
- [ ] Passwordless or secure email login; MFA for administrators
- [ ] Rate limiting, CSRF/XSS defenses, strict input validation, content security policy
- [ ] Consent records and permission-based communication history
- [ ] HTTPS, encrypted backups, retention/deletion/export, audit logs
- [ ] Monitoring, restore drills, alert routes and emergency escalation

## Milestone 3 — billing and onboarding (not implemented)

- [ ] Hosted checkout subject to provider onboarding, payment-method eligibility, and Indian tax advice
- [ ] Verified webhooks, idempotency, reconciliation, failed payment policy
- [ ] Company account provisioning and staff invitations
- [ ] Trial expiration, read-only grace period, cancellations and refunds
- [ ] Help centre and support-ticket route; verified customer access

## Milestone 4 — automation (not implemented)

- [ ] Job queue with retries, idempotency and dead-letter review
- [ ] User-configured follow-up reminders (in-app first)
- [ ] Approved communication templates and sending limits; logged permissions/opt-outs
- [ ] Demo scheduling and lead scoring with human review
- [ ] Approved knowledge-based support answers; low-confidence escalation
- [ ] Owner approval queue for outreach, unusual refunds and sensitive operations

## Milestone 5 — extensions (not implemented)

- [ ] SurveyProof — technician visit checklists, photos, reports
- [ ] QuoteFollow — quotations, pricing permissions, revisions and reminders
- [ ] Cross-module reporting and integration checks

## 45-day milestone reality

Aim to validate customers and make one core workflow production-ready. Three secure, polished SaaS apps plus autonomous sales cannot be responsibly guaranteed in 45 days at ₹0 capital. Plan for infrastructure, payment provider onboarding and support costs.
