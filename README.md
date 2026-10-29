# Y. Nandish portfolio

A static Next.js portfolio designed for Cloudflare Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Production verification

```bash
pnpm build
```

The static website is generated in `out/`.

## Deploy with Cloudflare Pages

Use **Next.js (Static HTML Export)** as the framework preset:

- Production branch: `main`
- Build command: `npx next build`
- Build output directory: `out`
- Node.js version: `22`

See the deployment instructions in the project handoff for the complete GitHub and Cloudflare Pages flow.
