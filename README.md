# solid-tailwind

Ready-to-develop template for SolidJS

## Features

- SolidJS dynamic routing
- Code-splitting
- Dynamic document `title`
- Preconfigured Tailwind compatible with Tailwind UI
- Examples for data fetching, dynamic routing

## File structure

- `api`: Backend serverless functions served on Vercel
- `public`: Public directory to drop static files
- `src`: Frontned SolidJS part where magic happens
  - `src/routes.ts`: All routes controlled in here
- `tools`: Set of utility to help you jump-start your project

## Vercel configuration

```
# Build command
npx pnpm build

# Output directory
dist

# Install command
npx pnpm install -r --store=node_modules/.pnpm-store

# Development command
pnpm vite-dev
```

## Development

```
# With backend API
pnpm vercel-dev

# Without backend API
pnpm vite-dev
```

## Build

```
pnpm build
```
