# Render deployment

The included Blueprint defines an API web service and static frontend. Before deploying, configure GEMINI_API_KEY on the API service and VITE_API_URL on the frontend service. Set WIDGET_ALLOWED_ORIGINS to the exact deployed frontend and approved embedding origins. Configure a custom domain only after DNS is ready.

Firebase variables are reserved in .env.example but Firestore persistence is not implemented in this initial scaffold. Do not configure production user data until persistence, authentication and tenant authorization are completed.
