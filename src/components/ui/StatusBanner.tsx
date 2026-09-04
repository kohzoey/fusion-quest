import type { FusionLabStatus } from "../../types/fusionLab";
import styles from "./StatusBanner.module.css";

const BANNER_META: Record<FusionLabStatus, { icon: string; label: string; toneClass: string }> = {
  farBelow: { icon: "●", label: "Far below educational reference", toneClass: styles.far },
  approaching: { icon: "▲", label: "Approaching educational reference", toneClass: styles.approaching },
  reached: { icon: "✓", label: "Educational reference level reached", toneClass: styles.reached },
};

interface StatusBannerProps {
  status: FusionLabStatus;
}

export function StatusBanner({ status }: StatusBannerProps) {
  const meta = BANNER_META[status];
  return (
    <div className={[styles.banner, meta.toneClass].join(" ")} role="status" key={status}>
      <span aria-hidden="true" className={styles.icon}>
        {meta.icon}
      </span>
      <span className={styles.label}>{meta.label}</span>
    </div>
  );
}
