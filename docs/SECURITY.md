# Security notes

- Keep Gemini and Firebase Admin credentials server-side.
- Restrict CORS origins to approved marketplace domains.
- Add organization-scoped authorization before exposing tenant data.
- Hash API secrets at rest and show them only once.
- This initial scaffold does not yet provide Firestore-backed persistence, production tenant key issuance, or production organization isolation. Do not describe it as production multi-tenant ready until these controls are implemented and tested.
