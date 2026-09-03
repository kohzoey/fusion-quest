import type { HTMLAttributes } from "react";
import styles from "./Section.module.css";

export function Section({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  const classes = [styles.section, className].filter(Boolean).join(" ");
  return <section className={classes} {...rest} />;
}
