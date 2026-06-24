# Codex Notes

## Project snapshot

- Stack: TanStack Start, React 19, TypeScript, Vite, Tailwind CSS 4.
- Package manager / lockfile: Bun (`bun.lock`).
- UI primitives live under `src/components/ui`.

## Working agreement

- Keep routing inside `src/routes`; this app uses TanStack file-based routing, not Next.js-style `pages` or `app`.
- Do not manually edit `src/routeTree.gen.ts`; treat it as generated output.
- Prefer small, localized changes that match the existing component and styling patterns.

## Useful commands

- Install deps: `bun install`
- Start dev server: `bun run dev`
- Build: `bun run build`
- Lint: `bun run lint`
- Format: `bun run format`
