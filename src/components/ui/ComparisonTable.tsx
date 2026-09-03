import type { ReactNode } from "react";
import styles from "./ComparisonTable.module.css";

export interface ComparisonRow {
  label: string;
  cells: ReactNode[];
}

interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonRow[];
  caption: string;
}

/**
 * Generic comparison table primitive — first used by Module 5's
 * "Compare the Approaches" stage (ITER/NIF/CFS/Helion). Renders as
 * a real <table> (not a div grid) for correct semantics and screen
 * reader support; scrolls horizontally on narrow viewports rather
 * than squeezing columns unreadably.
 */
export function ComparisonTable({ columns, rows, caption }: ComparisonTableProps) {
  return (
    <div className={styles.scrollWrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>
            <th scope="col"></th>
            {columns.map((col) => (
              <th scope="col" key={col}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
