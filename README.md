# ScopePilot

AI-powered project-scoping infrastructure for freelance and service marketplaces.

ScopePilot transforms rough project ideas into structured, editable briefs with requirements, deliverables, milestones, acceptance criteria, assumptions, and clarification questions. It is designed to work as a standalone application or as an embeddable feature inside approved marketplace integrations.

## Architecture
- React + TypeScript + Vite dashboard
- Express REST API
- AI provider abstraction (Gemini-ready)
- Embeddable JavaScript widget
- Firestore-ready multi-tenant data model
- Render deployment configuration

## Status
Initial repository setup. Features are being implemented incrementally; see the project documentation for setup and limitations.

## Security
Never expose AI provider keys, Firebase Admin credentials, or private API keys in browser code. Production marketplace integrations require the platform's written authorization and credentials.
