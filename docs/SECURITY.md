# Security

## Implemented
- Firebase ID-token verification for dashboard and user-owned brief routes.
- User-owned briefs stored below `users/{uid}/briefs`.
- Marketplace API keys generated with cryptographically secure randomness.
- Only SHA-256 API-key hashes are stored; plaintext keys are returned once at creation.
- API key revocation and organization ownership checks.
- Marketplace briefs and usage events stored under the authenticated organization.
- Helmet, JSON body size limit, request rate limit and configured CORS allowlist.
- AI provider keys and Firebase Admin credentials are server-side only.

## Remaining before production
- Replace simple per-process rate limits with shared distributed limits.
- Add configurable quota plans and billing enforcement (a basic 100-brief monthly organization quota is currently enforced).
- Add key expiration/rotation policy and audit logs.
- Add origin-bound public widget credentials; never use server API keys in the widget.
- Add abuse monitoring, webhook signing, backup/retention policies and a security review.
- Define Firestore security rules for any direct client access. Server Admin SDK bypasses Firestore rules; all server access must remain ownership-scoped.
- Add automated authorization and tenant-isolation tests.

Do not claim compliance certifications or production security review without independent evidence.
