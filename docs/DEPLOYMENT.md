# Render deployment

The included Blueprint defines an API web service and a static frontend. Connect the GitHub repository to Render and review the service settings before creating resources.

## API environment
Set:
- `NODE_ENV=production`
- `GEMINI_API_KEY`
- `GEMINI_MODEL=gemini-2.0-flash`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY` (store the full service-account private key as a secret; newlines are normalized by the app)
- `WIDGET_ALLOWED_ORIGINS` (comma-separated exact trusted origins)

Alternatively configure Google Application Default Credentials where supported.

## Frontend environment
Set:
- `VITE_API_URL` to the deployed API origin
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

Enable Google sign-in in Firebase Authentication and add the deployed frontend hostname to Firebase Authentication's authorized domains.

## Firestore
Create/enable Firestore in the same Firebase project. The Admin SDK uses server credentials and creates collections as needed.

## Before production launch
Configure real origins, validate health checks, deploy, test sign-in and a saved brief, test an organization API key from a server environment, and verify that a second user/organization cannot read the first one's records. Widget public-key security, quotas and billing enforcement are not yet complete.
