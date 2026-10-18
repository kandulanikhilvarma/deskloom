# Contribute to Deskloom

Read the [README](README.md) before a change. Keep each change within one clear purpose.

## Development

1. Fork the repository.
2. Create a branch for the change.
3. Install dependencies with `npm ci`.
4. Use a separate database branch for tests with cloud services.
5. Run the checks below.
6. Open a pull request with the problem, behavior change, and test results.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Use concise Conventional Commit subjects, such as `fix: preserve owned equipment`.
Keep secrets, private photos, customer records, and generated build files out of commits.
Use isolated fixtures for automated tests.

## Product changes

Every visible control must complete a real action or explain why the action is unavailable.
Keep price uncertainty visible. Never turn an unknown price into zero.
Preserve account scope on every private operation.
Label illustrations and generated images accurately.
Check phone layouts, keyboard access, focus, and recovery states after interface changes.

For a catalog entry, cite the manufacturer or retailer page.
Record the market, currency, check date, dimensions, and relevant accessory notes.
Do not copy product photos without appropriate rights.
Do not claim stock, clinical benefits, or the cheapest price without evidence.

## Report a problem

Use a GitHub issue for a public defect. Include the browser, steps, expected result, and actual result.
Remove personal details from screenshots.
For a security defect, follow [SECURITY.md](SECURITY.md).
