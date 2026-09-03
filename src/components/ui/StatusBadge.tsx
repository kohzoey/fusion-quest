import type { FusionLabStatus } from "../../types/fusionLab";
import styles from "./StatusBadge.module.css";

const STATUS_META: Record<
  FusionLabStatus,
  { icon: string; label: string; toneClass: string }
> = {
  farBelow: { icon: "●", label: "Far below educational reference", toneClass: styles.far },
  approaching: {
    icon: "▲",
    label: "Approaching educational reference",
    toneClass: styles.approaching,
  },
  reached: { icon: "✓", label: "Educational reference level reached", toneClass: styles.reached },
};

interface StatusBadgeProps {
  status: FusionLabStatus;
}

/**
 * Pairs an icon/shape with the text label so status is never
 * communicated by color alone (see accessibility requirements).
 * The wording here is the locked wording — do not shorten
 * "Educational reference level reached" to "Reached" or similar,
 * and never substitute "achieved", "ignition", or "reactor works".
 */
export function StatusBadge({ status }: StatusBadgeProps) {
  const meta = STATUS_META[status];
  return (
    <span className={[styles.badge, meta.toneClass].join(" ")}>
      <span aria-hidden="true" className={styles.icon}>
        {meta.icon}
      </span>
      <span>{meta.label}</span>
    </span>
  );
}
