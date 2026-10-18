# Deployment and activation

## Release services

Use free service tiers for the first release. Do not approve a paid upgrade without the owner's consent.
The Vercel project is `prj_ux81oIAwgsw0epVuyfc1hMbIISJ1`.
The source repository is [Deskloom on GitHub](https://github.com/kandulanikhilvarma/deskloom).
The Neon project and managed Auth service exist.
The deployment guide does not establish successful production activation.
Record actual results in [verification.md](verification.md).

## Configure Neon

1. Select the intended Neon project and production branch.
2. Confirm the database and role for the application.
3. Run `schema.sql` against that database.
4. Confirm that both application tables exist.
5. Copy the managed Auth HTTPS URL to `NEON_AUTH_BASE_URL` in Vercel.
6. Set `DATABASE_URL` as a server secret in Vercel.
7. Set a random `NEON_AUTH_COOKIE_SECRET` with at least 32 characters.
8. Add the production app origin to the allowed origins in Neon Auth.
9. Configure the mail service for verification and password recovery.

Current Neon defaults permit password signup without email verification.
Do not describe these accounts as verified email owners.
Enable the intended verification policy in the Neon console after email delivery passes an operator test.
The release checks use a separate verification branch and do not send test email to real users.

Use a separate branch for development or preview data.
Production variables point to the production branch.
Preview variables now use the separate verification database and Auth service.
Do not put database credentials in public browser variables.
The application uses the server connection only.

An operator can run the migration with an existing Postgres client:

```sh
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f schema.sql
```

Use the Neon SQL editor when a local Postgres client is unavailable.
Run the full script in one operation. Check the two table names afterward.

## Configure Vercel

1. Select the existing Deskloom project.
2. Connect `kandulanikhilvarma/deskloom` if the project has no repository link.
3. Set the framework to Next.js.
4. Use the repository root as the project directory.
5. Use `npm ci` for installation.
6. Use `npm run build` for the build.
7. Use Node.js 22.
8. Add the server variables from `.env.example` to the intended environment.
9. Keep `IMAGE_GENERATION_ENABLED=false`.
10. Deploy the verified source commit.

Confirm the project identity before a CLI deployment:

```sh
vercel project inspect --non-interactive
```

Stop if the command resolves another project or requests a new link.
Read back the deployment commit, build result, and public URL.
Use a preview deployment for acceptance before production promotion.
Do not count a successful local build as a successful Vercel deployment.

## Check account services

Use operator-controlled test accounts and non-sensitive fixture photos.
Do not use fabricated activity in the public interface.

1. Create an account through the app.
2. Receive the verification email through the configured mail service.
3. Verify the email code.
4. Sign in.
5. Save a plan with a small fixture photo.
6. Reopen the same plan in another browser session.
7. Confirm that another account cannot read or delete the plan.
8. Delete the plan.
9. Complete a password recovery email and new-password flow.
10. Sign out and confirm that private editor data clears.

If email delivery fails, keep account activation incomplete.
Do not disable email verification to make a release check appear successful.

## Activate optional image generation

Image requests can cost money. Get owner approval for the provider and spend limit before activation.
The owner must accept any new provider terms directly.

1. Set a provider budget or hard limit where the provider supports it.
2. Enable Deskloom project OIDC for Vercel AI Gateway, or add an approved server API key.
3. Confirm the model in `IMAGE_MODEL`, or leave it empty for the provider-specific default.
4. Verify the render table and its private permissions.
5. Set `IMAGE_GENERATION_ENABLED=true` in a preview environment.
6. Run one approved request with a non-sensitive fixture photo.
7. Verify the provider result and actual usage record.
8. Test duplicate, quota, timeout, and provider-error behavior.
9. Activate the production flag only after these checks pass.

The account quota is 3 requests each UTC day.
The quota does not replace a provider-wide spend limit.
The app cannot promise exact product geometry in a generated image.

## Release and rollback

Verify all required checks on the exact pull request head.
Back up the pre-merge base before the authorized squash merge.
Use the owner's identity and a concise Conventional Commit message.
Read back the merged state and its checks.
Deploy the verified merged commit.

For an application defect, restore the last verified Vercel deployment.
Do not delete plan tables as part of an application rollback.
For an image cost incident, set `IMAGE_GENERATION_ENABLED=false` first.
Investigate provider usage before another image request.
