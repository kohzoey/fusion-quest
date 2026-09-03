import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { PageFrame } from "./PageFrame";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <a href="#main-content" className="visually-hidden">
        Skip to main content
      </a>
      <NavBar />
      <PageFrame>
        <Outlet />
      </PageFrame>
    </>
  );
}
