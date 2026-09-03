import type { TemporalStatus } from "../../types/content";
import styles from "./TargetLabel.module.css";

const LABEL_TEXT: Record<TemporalStatus, string> = {
  target: "TARGET",
  projected: "PROJECTED",
  demonstrated: "DEMONSTRATED",
};

interface TargetLabelProps {
  status: TemporalStatus;
  date?: string;
}

/**
 * The single shared component responsible for satisfying: "Every
 * future date must be visually labelled as TARGET or PROJECTED.
 * Never make future company timelines look guaranteed." Any date
 * rendered anywhere in M5 (or elsewhere) should go through this
 * component rather than being typed inline, so the label can never
 * be silently omitted.
 */
export function TargetLabel({ status, date }: TargetLabelProps) {
  const classes = [styles.label, status === "demonstrated" ? styles.demonstrated : styles.future].join(" ");
  return (
    <span className={classes}>
      {date ? <span className={styles.date}>{date}</span> : null}
      <span className={styles.tag}>{LABEL_TEXT[status]}</span>
    </span>
  );
}
