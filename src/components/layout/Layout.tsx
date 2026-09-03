import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { PageFrame } from "./PageFrame";

export function Layout() {
  return (
    <>
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
