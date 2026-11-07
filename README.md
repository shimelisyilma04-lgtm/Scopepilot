# ScopePilot

AI-powered project-scoping infrastructure for freelance and service marketplaces. ScopePilot transforms rough project ideas into structured, editable briefs with requirements, deliverables, milestones, acceptance criteria, assumptions and clarification questions.

## Monorepo
- `apps/web`: React + TypeScript + Vite dashboard
- `apps/api`: Express REST API and AI brief engine
- `packages/shared`: shared types
- `packages/widget`: embeddable JavaScript widget source
- `docs`: API, security, deployment and integration notes

## Local development
1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env` and optionally set `GEMINI_API_KEY`.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the Vite URL shown in the terminal. The API listens on port 8787 by default.

Run `npm test`, `npm run typecheck` and `npm run build` before deployment.

## Current implementation status
The repository contains the initial web app, brief-generation endpoint, Gemini provider integration, widget source, shared types, Render Blueprint, starter tests and documentation. Firestore persistence, user authentication, production API-key issuance, organization isolation, usage metering, complete CRUD/refinement endpoints and full test coverage are not implemented yet. The widget is an integration starter and does not yet authenticate its public key at the API. Do not use it for production marketplace data until those controls are completed.

## Security
Never expose AI provider keys, Firebase Admin credentials or private API keys in browser code. Production marketplace integrations require the platform's written authorization and credentials.
