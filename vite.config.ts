import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
  // so all built asset URLs need that repo-name prefix. IMPORTANT:
  // replace "fusion-quest" below with your actual GitHub repository
  // name before deploying (see README.md's Deployment section) —
  // this cannot be inferred automatically. If deploying to a
  // user/org root site (https://<user>.github.io/) instead of a
  // project site, set this back to '/'.
  base: '/fusion-quest/',
})
