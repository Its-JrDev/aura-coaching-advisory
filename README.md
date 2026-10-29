# Aura Coaching & Advisory — Executive Leadership & Strategy

High-performance executive coaching and strategic advisory platform built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and native compatibility for **Cloudflare Pages / Cloudflare Workers** via `@opennextjs/cloudflare`.

---

## 📖 Deployment Guide & CI/CD

For a complete step-by-step tutorial on deploying to Cloudflare Pages, configuring custom domains, and setting up automated CI/CD:
👉 **[Guía Paso a Paso de Despliegue en Cloudflare Pages](./CLOUDFLARE_DEPLOYMENT_GUIDE.md)**

### CI/CD Pipeline
This repository includes a GitHub Actions CI/CD workflow (`.github/workflows/ci-cd.yml`):
- **On Pull Request & Push:** Runs TypeScript checks, Next.js build verification, and OpenNext bundling.
- **On Push to `main`:** Automatically deploys to Cloudflare when `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets are added to GitHub repository secrets.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or later (LTS recommended)
- **npm** / **pnpm** / **bun**

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development (Next.js)
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## ⛅ Cloudflare Pages & Workers Deployment

This project uses the official **OpenNext for Cloudflare** (`@opennextjs/cloudflare`) adapter with full Node.js runtime compatibility (`nodejs_compat`).

### Local Preview in Cloudflare Worker runtime
Build and preview the production build using Cloudflare's local Workerd runtime:
```bash
npm run preview
```

### Build for Cloudflare
```bash
npm run build:cf
```
This generates the optimized bundle in `.open-next/`:
- Worker entry: `.open-next/worker.js`
- Static assets: `.open-next/assets/`

### Deploy via Wrangler CLI
```bash
npm run deploy
```

### Deploy via Cloudflare Dashboard (Git Integration)
When connecting your GitHub/GitLab repository to Cloudflare:

| Setting | Value |
| --- | --- |
| **Framework preset** | None / Next.js |
| **Build command** | `npm run build:cf` *(or `npx @opennextjs/cloudflare build`)* |
| **Build output directory** | `.open-next/assets` |
| **Root directory** | `/` |
| **Compatibility flag** | `nodejs_compat` |
| **Compatibility date** | `2026-10-01` (or latest) |

---

## 🛠️ Scripts Overview

| Command | Description |
| --- | --- |
| `npm run dev` | Runs the Next.js Turbopack development server |
| `npm run build` | Builds standard Next.js production output |
| `npm run build:cf` | Builds the Cloudflare Pages/Workers bundle via OpenNext |
| `npm run preview` | Builds and runs a local Cloudflare Wrangler preview server |
| `npm run deploy` | Deploys the project to Cloudflare via Wrangler |
| `npm run lint` | Runs Next.js ESLint checks |
