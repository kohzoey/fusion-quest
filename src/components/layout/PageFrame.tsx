import type { ReactNode } from "react";
import { Container } from "../ui/Container";
import styles from "./PageFrame.module.css";

interface PageFrameProps {
  children: ReactNode;
}

/**
 * Consistent page chrome applied inside every route's <main>.
 * Keeps vertical rhythm and max-width consistent without every
 * page needing to repeat the same container/padding boilerplate.
 */
export function PageFrame({ children }: PageFrameProps) {
  return (
    <main id="main-content" className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
}
