# X Post MCP for Cursor

Prepare, review, and publish posts to X without leaving Cursor. This repository is the small,
open-source Cursor package: it contains the plugin manifest, hosted MCP endpoint configuration,
documentation, and artwork. It contains no X credentials and no private server source code.

> Release status: **0.2.0 release candidate.** Packaging, hosted OAuth configuration, Cursor installation,
> and connected-account status have been tested. The current self-hosted endpoint may still be
> unavailable during maintenance.

## Install

Use the [one-click Cursor installer](cursor://anysphere.cursor-deeplink/mcp/install?name=x-post-mcp&config=eyJ1cmwiOiJodHRwczovL3NldGhzLW1hY2Jvb2stbmVvLnRhaWw0ODFlYjUudHMubmV0L21jcCJ9),
or install this repository as a Cursor plugin.

After installation:

1. Ask Cursor to check `x_connection_status`.
2. Choose **Connect** when Cursor opens the OAuth flow.
3. Authorize the requested X permissions.
4. Ask Cursor to prepare a post, review it in the browser, and approve it before publishing.

## Safety model

Publishing is always a two-step action:

1. `x_prepare_post` returns the exact account, text, cost estimate, content hash, and an expiring
   confirmation ID plus an approval link. It cannot publish.
2. Open the approval link in the browser used to connect X and approve the exact preview. The
   server authenticates this separately from the MCP caller.
3. `x_publish_post` accepts only that unchanged, browser-approved preview. Ambiguous X responses
   are never retried automatically.

Scheduled posts are one-time, immutable, and browser-approved. Recurring, generated, trend-targeted,
and bulk posting are intentionally excluded.

## Tools

- `x_connection_status`
- `x_upload_media`
- `x_prepare_post`
- `x_publish_post`
- `x_prepare_thread`
- `x_publish_thread`
- `x_schedule_status`
- `x_get_post_analytics`
- `x_disconnect`

## Privacy

X access and refresh tokens are encrypted by the hosted service. No X credentials belong in this
repository or in Cursor configuration. See [PRIVACY.md](PRIVACY.md).

## Support

Open a bug report or support request in
[GitHub Issues](https://github.com/ticklecatisback/x-post-mcp-cursor/issues). For security issues,
follow [SECURITY.md](SECURITY.md).

## Availability and costs

The current release-candidate endpoint is self-hosted and may be unavailable during maintenance.
Publishing uses X's API and can incur charges billed by X to the service operator. The plugin does
not charge users directly in version 0.2.0. A cost estimate is shown before each approval. X may
also bill media uploads and analytics reads.

## Development

Run `node scripts/validate-release.mjs` from the repository root. See
[CONTRIBUTING.md](CONTRIBUTING.md) and [RELEASE.md](RELEASE.md) for the complete checks.

## License

MIT — see [LICENSE](LICENSE).
