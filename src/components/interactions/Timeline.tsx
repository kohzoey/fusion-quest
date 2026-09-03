import { useState } from "react";
import type { TimelineNode } from "../../data/module1.timeline";
import styles from "./Timeline.module.css";

interface TimelineProps {
  nodes: TimelineNode[];
}

/**
 * Discovery Timeline — Module 1's flagship interaction. Each node
 * is a keyboard-operable button; selecting one reveals its
 * WHAT HAPPENED / WHY IT MATTERED content below, without hiding
 * the rest of the timeline (spatial/sequence context stays visible,
 * consistent with the same principle used in the Module 3 tokamak
 * diagram plan).
 */
export function Timeline({ nodes }: TimelineProps) {
  const [activeId, setActiveId] = useState<string>(nodes[0]?.id ?? "");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track} role="tablist" aria-label="Fusion history timeline">
        {nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            role="tab"
            aria-selected={node.id === activeId}
            aria-controls={`timeline-panel-${node.id}`}
            id={`timeline-tab-${node.id}`}
            className={[styles.node, node.id === activeId ? styles.activeNode : ""]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActiveId(node.id)}
          >
            <span className={styles.year}>{node.year}</span>
            <span className={styles.title}>{node.title}</span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className={styles.panel}
          role="tabpanel"
          id={`timeline-panel-${active.id}`}
          aria-labelledby={`timeline-tab-${active.id}`}
        >
          <div>
            <h3 className={styles.panelLabel}>What happened?</h3>
            <p>{active.whatHappened}</p>
          </div>
          <div>
            <h3 className={styles.panelLabel}>Why did it matter?</h3>
            <p>{active.whyItMattered}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
