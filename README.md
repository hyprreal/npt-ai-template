# Nuxt 3 Template
## Stack
- Nuxt 3 [https://nuxt.com/docs/getting-started/introduction]
- TypeScript [https://www.typescriptlang.org/docs]
- Tailwind v4 [https://tailwindcss.com/docs]
- DrizzleORM (Postgres) [https://orm.drizzle.team/docs/overview]
- Supabase (Disabled) [https://supabase.com/docs]

## Setup
Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server
Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Local DB (Supabase)
See documentation: [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started)

Requires a local installation of [Docker](https://www.docker.com/products/docker-desktop/)

```bash
## install cli (globally)
brew install supabase/tap/supabase

## initialize in project root
supabase init

## start stack (with docker running)
supabase start
```

Optional
```bash
## merge schema from production
supabase db diff

## create seed file from production data
supabase db dump --data-only
```