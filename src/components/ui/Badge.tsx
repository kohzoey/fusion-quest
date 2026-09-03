import type { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "heat" | "confinement" | "highlight" | "neutral";
}

export function Badge({ tone = "neutral", className, ...rest }: BadgeProps) {
  const classes = [styles.badge, styles[tone], className].filter(Boolean).join(" ");
  return <span className={classes} {...rest} />;
}
