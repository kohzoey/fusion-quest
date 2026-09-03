import type { HTMLAttributes } from "react";
import styles from "./Container.module.css";

export function Container({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const classes = [styles.container, className].filter(Boolean).join(" ");
  return <div className={classes} {...rest} />;
}
