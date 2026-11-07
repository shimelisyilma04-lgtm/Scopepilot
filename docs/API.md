# ScopePilot API v1

Base URL: `https://YOUR_API_HOST/api/v1`. All responses use JSON.

## Health
- `GET /health`

## Firebase-authenticated dashboard
Send `Authorization: Bearer <FIREBASE_ID_TOKEN>`.
- `POST /organizations` — body: `{"name":"Acme Marketplace"}`
- `GET /organizations` — list owned organizations
- `POST /organizations/:id/api-keys` — body: `{"name":"Production server"}`; returns a secret once
- `GET /organizations/:id/api-keys` — list key metadata
- `DELETE /organizations/:id/api-keys/:keyId` — revoke a key
- `POST /organizations/:id/widget-keys` — body: `{"name":"Marketplace widget","allowedOrigins":["https://marketplace.example"]}`
- `GET /organizations/:id/widget-keys` — list widget key metadata
- `DELETE /organizations/:id/widget-keys/:keyId` — revoke widget key
- `GET /organizations/:id/usage` — latest usage events
- `POST /briefs/generate`, `GET /briefs`, `GET /briefs/:id`, `PATCH /briefs/:id`, `POST /briefs/:id/refine`, `DELETE /briefs/:id`

## Marketplace server integration
Send `X-ScopePilot-API-Key: sp_live_...` from your backend only.
- `POST /integrations/briefs/generate`
- `POST /integrations/briefs/:id/refine`

Example:
```json
{"description":"A marketplace project for booking local tutors","category":"web-development","complexity":"medium"}
```

## Embeddable widget
Send `X-ScopePilot-Public-Key: sp_pub_...` from the browser widget. The API validates the request's Origin against the widget key's exact allowed-origin list.
- `POST /widget/briefs/generate`

The widget key is public and must never be treated as a server secret. Origin validation is not strong authentication against custom HTTP clients.

## Errors
Errors contain `error.code` and `error.message`. Invalid input returns HTTP 400; missing/invalid credentials return HTTP 401; unauthorized origin/organization returns HTTP 403; missing records return HTTP 404; generation or provider failures return HTTP 5xx.


## Usage quotas
New organizations start with a 100-brief monthly quota. Successful marketplace and widget generations/refinements consume one unit. The generation response includes `usage.used`, `usage.limit`, and `usage.remaining`. When the quota is reached, the API returns HTTP 429 with `QUOTA_EXCEEDED`.
