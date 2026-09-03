import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  raised?: boolean;
}

export function Card({ raised = false, className, ...rest }: CardProps) {
  const classes = [styles.card, raised ? styles.raised : "", className]
    .filter(Boolean)
    .join(" ");
  return <div className={classes} {...rest} />;
}
