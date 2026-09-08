# Privacy notice

The hosted service processes the minimum information needed to connect an X account and publish an
explicitly confirmed post: X account ID, display name, username, encrypted OAuth credentials, the
prepared post text, confirmation metadata, and the returned post ID.

Prepared drafts expire after 15 minutes by default. MCP access and browser approval sessions expire
after 30 days by default. Expired records are removed during routine service access and cleanup.
OAuth credentials are encrypted at rest. Data is stored on the service operator's self-hosted
computer and is sent to X only as needed to authenticate or publish an approved post.

The service does not sell personal information, serve advertising, or use connected-account
content to train models. Cursor and X process data under their own terms and privacy notices.

Users can invoke `x_disconnect` to remove the stored X connection and revoke the active MCP
session, approval sessions, authorization codes, and prepared drafts associated with that
connection. To request help with deletion, open a private security report or support request at
https://github.com/ticklecatisback/x-post-mcp-cursor.

This notice is effective September 8, 2026 and may be updated with future releases.
