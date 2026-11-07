# ScopePilot API v1

Base URL: `https://YOUR_API_HOST/api/v1`

All responses use JSON. Errors have an `error.code` and human-readable `error.message`.

## Health
`GET /health`

## Dashboard authentication
The dashboard signs users in with Firebase Authentication and sends its Firebase ID token as `Authorization: Bearer <ID_TOKEN>`.

## Organizations (Firebase-authenticated)
- `POST /organizations` — create an organization; body: `{"name":"Acme Marketplace"}`
- `GET /organizations` — list organizations owned by the signed-in user
- `POST /organizations/:id/api-keys` — create a server-side API key; body: `{"name":"Production server"}`. The secret is shown only once.
- `GET /organizations/:id/api-keys` — list key metadata, never secrets
- `DELETE /organizations/:id/api-keys/:keyId` — revoke a key
- `GET /organizations/:id/usage` — list recent usage records

## Marketplace server integration
Send `X-ScopePilot-API-Key: sp_live_...` from your marketplace backend. Never expose this secret in browser code.

- `POST /integrations/briefs/generate`

Example body:
```json
{"description":"A marketplace project for booking local tutors","category":"web-development","complexity":"medium"}
```

The response is `{"data": ProjectBrief}`. Generated briefs are stored under the authenticated organization's Firestore path and a usage event is recorded.

## User-owned briefs (Firebase-authenticated)
- `POST /briefs/generate`
- `GET /briefs`
- `GET /briefs/:id`
- `DELETE /briefs/:id`

## Important current limitations
The current server-to-server integration uses long-lived API keys. Key rotation, configurable quotas, billing enforcement, signed webhook events, widget public-key/origin authorization and production audit logging remain to be implemented. Do not embed a `sp_live_` secret in a browser.
