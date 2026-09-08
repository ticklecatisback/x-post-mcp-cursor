# X Post MCP for Cursor

Prepare, review, and publish posts to X through a hosted MCP service. The Cursor package contains
only this manifest, its remote endpoint configuration, documentation, and artwork. The service
implementation runs on the operator's infrastructure.

## Install for private beta

1. Install this plugin in Cursor.
2. Set `X_POST_MCP_URL` to the HTTPS endpoint supplied by the service operator, including `/mcp`.
3. Choose **Connect** when Cursor opens the OAuth flow.
4. Authorize the requested X permissions.

## Safety model

Publishing is always a two-step action:

1. `x_prepare_post` returns the exact account, text, cost estimate, content hash, and an expiring
   confirmation ID plus an approval link. It cannot publish.
2. Open the approval link in the browser used to connect X and approve the exact preview. The
   server authenticates this separately from the MCP caller.
3. `x_publish_post` accepts only that unchanged, browser-approved preview. Ambiguous X responses
   are never retried automatically.

The initial release does not schedule posts, send automatic replies, target trends, or bulk-post.

## Tools

- `x_connection_status`
- `x_prepare_post`
- `x_publish_post`
- `x_disconnect`

## Privacy

X access and refresh tokens are encrypted by the hosted service. No X credentials belong in this
repository or in Cursor configuration. See [PRIVACY.md](PRIVACY.md).

## Support

This is a private-beta package until the production endpoint, privacy contact, and support address
are finalized.
