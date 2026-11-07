# ScopePilot

AI-powered project-scoping infrastructure for freelance and service marketplaces. ScopePilot turns rough project ideas into structured, editable briefs and can integrate through a server API or an embeddable JavaScript widget.

## Monorepo
- `apps/web`: React + TypeScript + Vite dashboard with Firebase Google sign-in
- `apps/api`: Express API, Gemini brief engine, Firebase Admin authentication and Firestore persistence
- `packages/shared`: shared TypeScript contracts
- `packages/widget`: embeddable JavaScript widget source and browser bundle build
- `docs`: API, security, deployment and marketplace integration guides

## Local development
1. Use Node.js 20 or newer.
2. Create a Firebase project, enable Firestore and Google Authentication.
3. Copy `.env.example` to `.env`; configure Firebase web values, Firebase Admin credentials and `GEMINI_API_KEY`.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the Vite URL shown in the terminal. The API listens on port 8787 by default.

Build and checks:
- `npm run typecheck`
- `npm test`
- `npm run build`

## Marketplace integration
- Server-to-server: create an organization and a hashed `sp_live_` API key; call `POST /api/v1/integrations/briefs/generate` from your backend.
- Embeddable widget: create a `sp_pub_` widget key with allowed origins, build `packages/widget/dist/scopepilot.js`, and embed it using the documented snippet.

See [Marketplace integration](docs/INTEGRATION.md), [API reference](docs/API.md), and [Deployment](docs/DEPLOYMENT.md).

## Implementation status
Implemented foundation includes Firebase sign-in, user-scoped Firestore brief persistence, validated Gemini output, organization creation, server API-key issuance and revocation, organization usage events, an origin-restricted widget key flow, a widget API, and Render/CI configuration.

Not yet complete or independently verified: organization invitations and roles, per-organization quotas and billing enforcement, rate limits backed by shared storage, webhooks, advanced brief refinement/editing, admin analytics, complete tenant-isolation/security test coverage, and production deployment validation. The widget's public key plus Origin check is a browser integration control, not strong authentication against arbitrary HTTP clients. Do not treat the current implementation as production-certified.

## Security
Never expose `sp_live_` keys, Gemini credentials or Firebase Admin credentials in browser code. Marketplace integrations require the platform's permission and deployment changes.
