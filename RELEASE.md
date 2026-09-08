# Release checklist

## Package

- [x] Cursor manifest is at `.cursor-plugin/plugin.json`.
- [x] Plugin name is lowercase kebab-case and versioned with SemVer.
- [x] MCP configuration uses an HTTPS endpoint.
- [x] Logo uses a valid relative repository path.
- [x] README, privacy notice, license, changelog, security policy, and contribution guide exist.
- [x] No credentials or private server source are packaged.
- [x] Automated validation runs locally and in GitHub Actions.

## External launch gates

- [x] Configure `X_CLIENT_ID` and optional `X_CLIENT_SECRET` in the hosted service secret store.
- [ ] Verify X OAuth connect, prepare, browser approval, publish, and disconnect with a test account.
- [ ] Move the hosted service to an always-on production environment with backups and monitoring.
- [x] Push this wrapper to the public repository named in the manifest.
- [ ] Enable GitHub private vulnerability reporting.
- [ ] Create and test a signed/tagged `v0.1.0` release archive.
- [ ] Submit the public repository URL to the Cursor Marketplace for review.

Do not submit to the Marketplace while any functional or hosting launch gate is incomplete.
