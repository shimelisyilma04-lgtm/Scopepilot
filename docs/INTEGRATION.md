# Marketplace integration

A marketplace can embed the widget after approving the integration and configuring its origin. Load the built widget bundle, then initialize it with a public organization key and API URL. The current widget is an integration starter, not a production-secure multi-tenant integration. Before issuing keys externally, implement tenant authorization, origin binding, usage metering and widget hosting. Never put a private API key in browser code.
