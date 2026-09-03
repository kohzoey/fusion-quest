# FUSION QUEST

An interactive, self-learning web application introducing high-school students to nuclear fusion power — built for UEEP2074 Nuclear Physics Assignment A1 (Track B: Nuclear Fusion Power).

Five modules — history, physics, engineering, applications, and current research status — each combining locked, scientifically-verified content with a hands-on interactive component (a real-time triple-product simulator, an interactive tokamak diagram, a fusion-claim classification exercise, and more).

## Tech stack

React + TypeScript + Vite, plain CSS (custom properties for the design token system, CSS Modules per component), React Router (`HashRouter`, for GitHub Pages compatibility — see Deployment below), SVG for scientific diagrams. No 3D engine, no state-management library beyond React's built-in state/context — deliberately kept lean for a project of this scope.

## Project structure

```text
src/
  components/
    ui/          — generic primitives (Button, Card, Slider, StatusBadge, TargetLabel, ...)
    layout/       — NavBar, ProgressRail, PageFrame, Layout
    module/       — ModuleHero, StageBlock, MissionCheck, ModuleTransition, ...
    interactions/ — the six flagship interactions (Timeline, FusionLab, TokamakDiagram, ...)
  pages/          — Landing, ModulePage (generic, data-driven), Completion
  data/           — all locked scientific/educational content, per module
  types/          — content and Fusion Lab type definitions
  context/        — progress tracking (completion state, no scoring)
  utils/          — Fusion Lab calculation logic
  styles/         — design tokens and global base styles
```

Content and presentation are deliberately separated: every module's text, Mission Check questions, and interaction data live in `src/data/`, typed against `src/types/content.ts`. Presentation components contain no hard-coded scientific prose — this is what makes the content auditable independently of the code, and what a reviewer should check first if verifying scientific accuracy.

## Development

```bash
npm install
npm run dev        # local dev server
npx tsc -b          # type-check
npm run lint        # oxlint
npm run build       # production build to dist/
npm run preview     # serve the production build locally
```

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that type-checks, lints, builds, and deploys automatically on every push to `main`.

**One-time setup:**
1. In your GitHub repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Open `vite.config.ts` and set `base` to match your actual repository name — it currently reads `/fusion-quest/`, which is only correct if your repo is literally named `fusion-quest`. This cannot be inferred automatically; deploying with the wrong `base` will load a blank page with broken asset paths.
3. Push to `main`. The workflow builds and deploys automatically; check the **Actions** tab for progress, and the **Pages** section of **Settings** for the live URL once deployed.

**Why `HashRouter`, not `BrowserRouter`:** GitHub Pages serves static files with no server-side rewrite rule. Under `BrowserRouter`, a direct visit or a page refresh on a route like `/module-3` would 404, because the server has no `/module-3` file to serve — only client-side JavaScript can handle that route, and it never gets the chance to load. `HashRouter` avoids this entirely (URLs look like `.../#/module-3`) with zero server configuration required, which is the right tradeoff for a static deployment target over a cosmetically nicer URL scheme.

## Content integrity

All scientific content in this project went through an explicit lock-and-verify process (scientific claim registers, source verification passes, and patch-based corrections) before implementation — see the project's content blueprint documents for the full audit trail. If you find a factual or wording issue in the deployed site, check `src/data/` first: every claim there is meant to be traceable to a specific, dated source, and several files include inline flags marking content that was written during implementation (rather than transcribed verbatim from a locked document) for exactly this kind of review.
