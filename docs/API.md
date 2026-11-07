# API v1

## Health
GET /api/v1/health

## Generate a brief
POST /api/v1/briefs/generate

JSON body: `{"description":"At least 20 characters","category":"web-development","complexity":"unknown"}`

Returns `{"data": ProjectBrief}`. Invalid requests return HTTP 400. AI provider failures return HTTP 502. When GEMINI_API_KEY is absent, the API returns a clearly marked draft scaffold with clarification questions rather than calling an external model.
