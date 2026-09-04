import styles from "./StageIcon.module.css";

interface StageIconProps {
  size?: number;
}

export function StageIcon({ size = 22 }: StageIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.icon}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <path d="M12 2 L20 12 L12 22 L4 12 Z" fill="none" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
