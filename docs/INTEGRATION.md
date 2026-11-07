# Marketplace integration

ScopePilot supports two integration paths.

## Server-to-server API
1. Create an organization with `POST /api/v1/organizations`.
2. Create a server API key with `POST /api/v1/organizations/:id/api-keys`.
3. Store the returned `sp_live_` secret in your marketplace backend's secret manager.
4. Call `POST /api/v1/integrations/briefs/generate` with the `X-ScopePilot-API-Key` header.
5. Receive the structured brief and attach it to your marketplace's project-creation workflow.

Never send a `sp_live_` key to browser code.

## Embeddable widget
1. Create a widget key using `POST /api/v1/organizations/:id/widget-keys` with a name and exact allowed origins, e.g. `{"name":"Production widget","allowedOrigins":["https://marketplace.example"]}`.
2. Store the returned `sp_pub_` key in the marketplace page configuration. It is designed to be public and is restricted by the configured browser origin.
3. Build the widget bundle with `npm run build -w @scopepilot/widget`.
4. Host `packages/widget/dist/scopepilot.js` at your approved asset host.
5. Add this snippet:

```html
<div id="scopepilot"></div>
<script src="https://YOUR_ASSET_HOST/scopepilot.js"></script>
<script>
  ScopePilot.init({
    container: "#scopepilot",
    publicKey: "sp_pub_REPLACE_ME",
    apiUrl: "https://YOUR_API_HOST",
    title: "Clarify your project",
    mode: "inline", // or "modal"
    onComplete: function (brief) { console.log(brief); }
  });
</script>
```

The widget calls `POST /api/v1/widget/briefs/generate`. The server checks the public key, exact Origin header and active organization.

## Important
The widget key is public, not a secret. Origin checks are a browser control, not strong authentication against a custom HTTP client. Apply per-organization quotas, abuse controls and marketplace-side validation before public launch. Keep server API keys out of browser code. Third-party marketplace integration still requires its permission and deployment changes.
