# V0 AI Chat Component

A polished, production-ready AI chat UI component for Next.js, originally generated with
[Vercel v0](https://v0.dev) and refined for shadcn/ui + Tailwind CSS. It renders a
dark-themed conversational interface with auto-resizing input, smooth message animations,
and full shadcn/ui design-system integration.

## Features

- 🎨 **Dark, minimal chat UI** — full-screen conversational layout (`bg-neutral-950`)
- ✍️ **Auto-resizing textarea** — custom `useAutoResizeTextarea` hook with a `fieldSizing:
  "fixed"` override to prevent conflicts with the base shadcn Textarea's `field-sizing-content`
- 🧩 **shadcn/ui component library** — full Radix-based component set included
  (dialogs, dropdowns, tooltips, command palette, toasts, and more)
- 🗄️ **Prisma-ready** — Prisma client + migration scaffolding included for wiring up
  message persistence
- ⚡ **Next.js 16 + React 19 + TypeScript** — app router, server components where applicable
- 🎭 **Framer Motion** — smooth UI animations
- 🗃️ **TanStack Query + Table** — ready for async data and tabular displays

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui, Radix UI, Lucide icons
- **Editor:** MDXEditor (`@mdxeditor/editor`)
- **Drag & drop:** `@dnd-kit/core`, `@dnd-kit/sortable`
- **Database (optional):** Prisma + SQLite/Postgres
- **Runtime:** Bun / Node.js

## Quick Start

```bash
# install dependencies
bun install        # or: npm install

# start the dev server
bun run dev        # or: npm run dev

# open http://localhost:3000
```

The home page renders `<VercelV0Chat />` (`src/components/ui/v0-ai-chat.tsx`) —
a self-contained chat interface you can drop into any app.

## Project Structure

```
src/
  app/
    page.tsx          # home page — renders VercelV0Chat
    layout.tsx        # root layout + globals
    api/route.ts      # placeholder API route (hello world)
    globals.css       # Tailwind entry
  components/ui/      # shadcn/ui component library
    v0-ai-chat.tsx    # the AI chat component
  hooks/              # shared React hooks (incl. auto-resize textarea)
  lib/                # utilities
prisma/               # Prisma schema + migrations
public/               # static assets
worklog.md            # integration notes from the v0 component merge
```

## Environment Variables

The placeholder API route needs none. If you wire the chat up to a real model
provider, add your key (e.g. `ZAI_API_KEY`) to `.env.local` and consume it in
`src/app/api/`.

## Deploy Notes

- **Static export:** the demo page is fully client-side. Add `output: "export"` and
  `images: { unoptimized: true }` to `next.config.ts`, remove the placeholder
  `src/app/api/route.ts`, run `next build`, and host the `out/` directory on
  GitHub Pages or any static host.
- **Full-stack:** keep the default config (`output: "standalone"`) and deploy to
  Node-capable platforms (Vercel, Netlify, Docker) with `bun run start`.
- **Database:** run `bun run db:push` (or `db:migrate`) to apply the Prisma schema.

## License

MIT — use it in anything.

---

Built by [Girish Lade](https://ladestack.in) — founder of
[LadeStack](https://ladestack.in), a studio shipping free, local-first developer tools.
