# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Linus Fischer (leicraft.de). Built with Nuxt 4, Nuxt UI 4, Tailwind CSS 4, and Bun. It is a static, content-driven site with two pages and a skills/project showcase.

- Package manager/runtime: **Bun**
- Framework: **Nuxt 4** (`nuxt.config.ts` uses `compatibilityDate: '2025-07-15'`)
- UI library: **@nuxt/ui** v4
- Styling: **Tailwind CSS 4** via `@import "tailwindcss"` in `app/assets/css/main.css`
- Static hosting: `nitro.preset: 'static'`; generated output goes to `.output/public/`, symlinked as `dist/`.

## Common Commands

All scripts use `bun`. Prefer `bun` over `npm`/`pnpm` in this repo.

```sh
# Install dependencies
bun install

# Dev server
bun run dev

# Production build (server-rendered bundle)
bun run build

# Static site generation (used for deployment)
bun run generate

# Preview generated static build locally
bun run preview

# Type checking
bun run typecheck

# Run tests
bun test
```

Important script details:

- `typecheck` runs `nuxt typecheck` followed by `tsc -p ./tsconfig/tsconfig.typecheck.json`. The second pass type-checks `tests/` using the generated `.nuxt/tsconfig.json`.
- `bun test` uses Bun’s built-in test runner. There is currently a single placeholder test in `tests/basic.test.ts`.
- There is no dedicated lint script configured. If linting is needed, ask before adding a new tool.

## Architecture & Code Layout

### Entry Points & Layout

- `app/app.vue`: Root component. Wraps the app in `<UApp>` and renders `<NuxtLayout>` + `<NuxtPage>`.
- `app/layouts/default.vue`: Default layout. Provides a shared `UHeader`, navigation menu, social links, and `UFooter` around page content.
- `app/app.config.ts`: Nuxt UI app configuration — sets primary color to `sky`, neutral to `slate`, theme radius `0.5`, and `blackAsPrimary: false`.
- `app/assets/css/main.css`: Global CSS. Imports Tailwind and `@nuxt/ui`, sets the `Rubik` font, dark color scheme, and custom background color `#0b0c1b`.

### Pages & Components

- `app/pages/index.vue`: Landing page. Contains hero, about text, and a skills section composed with the `Skillset` component.
- `app/pages/projects.vue`: Projects showcase rendered as a grid of `ProjectCard` components.
- `app/components/Skillset.vue`: Renders a named group of skills as a wrap of icon components.
- `app/components/ProjectCard.vue`: Card for project logo, title, and description slot.
- `app/components/img/LCMCIcon.vue`: Custom SVG logo used in the header.
- `app/components/skill/skill-icons/`: Large collection of SVG icon components used by `Skillset`. Names follow the pattern `<Tech>-<Variant>-icon.vue`.

### Static Assets

- `public/`: Static assets served at root. Contains `static/logo/`, `assets/img/`, `favicon.ico`, `.htaccess`, `robots.txt`, and a `utils/` directory.
- `dist/` is a symlink to `.output/public/`.

### TypeScript & Configuration

- `tsconfig.json`: Nuxt-generated project references; delegates to files in `.nuxt/tsconfig.*.json`.
- `tsconfig/tsconfig.typecheck.json`: Extends `.nuxt/tsconfig.json` and includes `tests/**/*` for the second typecheck pass.
- `nuxt.config.ts`: Module `@nuxt/ui`, static nitro preset, dark color mode with no class suffix.

## CI / CD

- `.gitlab-ci.yml` (primary CI): runs `bun run typecheck`, `bun test`, and on the default branch runs `bun run generate` + `.gitlab/ci/deploy.sh` to deploy via rsync/ssh using environment variables.
- `.github/workflows/release.yml`: Manually triggered release workflow that builds, archives `dist/`, and creates a GitHub release.
- GitLab CI sets `NUXT_TELEMETRY_DISABLED=1` and caches `node_modules` based on `bun.lock`.

## MCP / Tooling Context

The project exposes MCP servers for Nuxt and Nuxt UI in `.vscode/mcp.json` and `.claude/settings.json`. These are for editor/agent context and do not need to be changed during normal development.

## Notes for Changes

- This is a static content site; there is no backend API or data layer.
- Skill icons are individual Vue components imported explicitly into `app/pages/index.vue`. Adding a skill requires importing the icon component and adding it to the relevant array.
- Color mode is forced to dark (`preference: 'dark'`, `fallback: 'dark'`, `classSuffix: ''`). Avoid adding light-mode-specific overrides unless explicitly requested.
- The custom background color `#0b0c1b` is defined in both `main.css` and the layout via `main-bg-color`; keep them in sync when changing the site background.
