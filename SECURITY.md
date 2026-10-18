# Security policy

The current 1.x release receives security fixes. Older releases have no separate support commitment.

## Report a vulnerability

Send a private report to [kandulanikhilvarma@gmail.com](mailto:kandulanikhilvarma@gmail.com).
Include the affected version, reproduction steps, impact, and a small example.
Do not include real credentials or another person's room photo.
Do not publish an exploitable defect before the maintainer can assess it.
There is no guaranteed response time or paid bounty program.

## Data boundaries

Neon Auth manages account credentials and sessions.
The server derives the account owner from the session for every plan operation.
The application stores private plan content in Neon Postgres.
The browser never receives the database connection secret.
The application does not grant table access to browser roles.

The app accepts JPEG, PNG, and WebP photo data with size and signature checks.
The app rejects SVG input and external photo URLs in saved records.
Mutations need a same-origin request. Private API responses disable shared caches.
The application omits provider details from service errors.

The optional image route sends a photo to OpenAI only after activation and user consent.
The route reserves a request ID before the provider call. The route does not retry a provider request automatically.
The route limits each account to 3 requests each UTC day.
The account limit is not an organization-wide cost cap.

## Operator duties

Keep server secrets outside the repository. Rotate any secret that appears in a log or public commit.
Use separate data branches for development and production.
Restrict provider access to the intended maintainers.

Review dependency alerts and apply relevant security fixes.
Set a provider budget before image activation.
See [deployment notes](docs/deployment.md) for the release checklist.
