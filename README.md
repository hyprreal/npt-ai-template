# NPT.ai

## Stack

- Nuxt 4 [https://nuxt.com/docs/getting-started/introduction]
- TypeScript [https://www.typescriptlang.org/docs]
- Tailwind v4 [https://tailwindcss.com/docs]
- DrizzleORM [https://orm.drizzle.team/docs/overview]
- Postgres [https://www.postgresql.org/docs]
- BetterAuth [https://www.better-auth.com/docs/introduction]
- AI SDK [https://ai-sdk.dev/getting-started]

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Set up Local DB

Requires a local installation of [Docker](https://www.docker.com/products/docker-desktop/)

```bash
## create & start docker services (postgres)
pnpm db:start

## migrate schema
pnpm drizzle:migrate

## seed database
pnpm db:seed
```

Useful commands

```bash
## stop all docker services
pnpm db:stop

## reset all services (deletes all data!)
pnpm db:reset
```

## Recommended VSCode Extensions

- ESLint
- Tailwind CSS IntelliSense
- Vue - Official
- GitHub Copilot
