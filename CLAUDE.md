# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NPT.ai is a Nuxt 4 application with TypeScript, TailwindCSS v4, PostgreSQL with DrizzleORM, BetterAuth for authentication, and AI SDK integration. The project uses pnpm as the package manager.

## Essential Commands

### Development
- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues
- `pnpm test` - Run Vitest tests

### Database
- `pnpm db:start` - Start PostgreSQL in Docker
- `pnpm db:stop` - Stop Docker services
- `pnpm db:reset` - Reset database (deletes all data)
- `pnpm drizzle:migrate` - Run database migrations
- `pnpm drizzle:generate` - Generate migrations from schema
- `pnpm drizzle:studio` - Open Drizzle Studio
- `pnpm db:seed` - Seed database with test data
- `pnpm better:migrate` - Run BetterAuth migrations

## Architecture

### Directory Structure
- `app/` - Nuxt application code (pages, components, composables, layouts)
- `server/` - Server-side API routes and utilities
- `db/` - Database schema, migrations, and seed files
- `lib/` - Shared libraries (auth, env validation)

### Key Patterns

#### API Routes
- Use `defineValidatedEventHandler` from `server/utils/define-validated-event-handler.ts` for authenticated endpoints with Zod validation
- All API routes require authentication by default via this utility
- Use standard Nuxt `defineEventHandler` for public routes
- Error handling uses `handleDatabaseError` utility

#### Database
- Schema defined in `db/schema/` with separate folders for different domains
- Database connection via `server/utils/db-connection.ts`
- Drizzle ORM for type-safe database operations
- Schema files export individual tables, imported via index files

#### Authentication
- BetterAuth configuration in `lib/auth.ts`
- Google OAuth provider configured
- Email/password authentication disabled by default
- Auth client utilities in `lib/auth-client.ts`

#### Environment Variables
- Strict validation via Zod schema in `lib/env.ts`
- Required vars: DATABASE_URL, BETTER_AUTH_SECRET, BETTER_AUTH_URL, AUTH_GOOGLE_CLIENT_ID, AUTH_GOOGLE_CLIENT_SECRET, STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_PRICING_TABLE_ID, OPENAI_API_KEY

#### Frontend Patterns
- Vue 3 with Composition API
- Composables for shared state (e.g., `useToasts`)
- TailwindCSS v4 for styling
- TypeScript types in `app/types/`

### Testing
- Vitest configured for unit tests
- Test files should follow standard Vitest patterns
- Run tests with `pnpm test`

### Linting & Code Quality
- ESLint with @antfu/eslint-config
- Auto-fix with `pnpm lint:fix`
- Always run linting before committing changes