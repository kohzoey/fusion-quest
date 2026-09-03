import type { ReactNode } from "react";
import styles from "./Disclaimer.module.css";

interface DisclaimerProps {
  children: ReactNode;
}

/**
 * Renders a scientific disclaimer. Deliberately has no dismiss
 * control at all — the locked Fusion Lab disclaimers (and any
 * similar locked wording elsewhere) must remain visible at all
 * times, not just on first view.
 */
export function Disclaimer({ children }: DisclaimerProps) {
  return (
    <div className={styles.disclaimer} role="note">
      <span className={styles.icon} aria-hidden="true">
        ℹ
      </span>
      <p className={styles.text}>{children}</p>
    </div>
  );
}
