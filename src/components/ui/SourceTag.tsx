import type { Source } from "../../types/content";
import styles from "./SourceTag.module.css";

const TYPE_LABEL: Record<Source["type"], string> = {
  primary: "Primary source",
  companyReported: "Company-reported",
  independentlyReported: "Independently reported",
};

interface SourceTagProps {
  source: Source;
}

/**
 * Compact "Source" affordance per the brief: avoids cluttering
 * every sentence with a citation, while still making clear whether
 * a claim is a primary source, a company statement, or independent
 * reporting — these are never presented as equivalent.
 */
export function SourceTag({ source }: SourceTagProps) {
  return (
    <span className={styles.tag} title={source.label}>
      <span className={styles.typeLabel}>{TYPE_LABEL[source.type]}</span>
      {source.date ? <span className={styles.date}>· {source.date}</span> : null}
    </span>
  );
}
