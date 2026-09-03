import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./styles/global.css";
import App from "./App.tsx";

// HashRouter, not BrowserRouter: GitHub Pages serves static files
// with no server-side rewrite rule, so a direct visit or refresh on
// e.g. /module-3 would 404 under BrowserRouter. HashRouter (URLs
// like /#/module-3) works with zero server configuration, which is
// the right tradeoff for a static student-project deployment target
// over a prettier URL scheme that would need extra infrastructure.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
