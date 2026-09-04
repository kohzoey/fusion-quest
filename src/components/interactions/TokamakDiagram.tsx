import { useId, useState } from "react";
import type { TokamakComponent } from "../../data/module3.tokamak";
import { emphasizeTerms } from "../../utils/emphasizeTerms";
import styles from "./TokamakDiagram.module.css";

interface TokamakDiagramProps {
  components: TokamakComponent[];
}

const CENTER = 200;
const COIL_RADIUS = 178;
const COIL_COUNT = 10;
const VESSEL_OUTER = 165;
const VESSEL_INNER = 150;
const WALL_OUTER = 150;
const WALL_INNER = 140;
const PLASMA_OUTER = 138;
const PLASMA_INNER = 55;
const DIVERTOR_START_DEG = 70;
const DIVERTOR_END_DEG = 110;

function polar(radius: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

function annulusPath(outer: number, inner: number, startDeg: number, endDeg: number): string {
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const p1 = polar(outer, startDeg);
  const p2 = polar(outer, endDeg);
  const p3 = polar(inner, endDeg);
  const p4 = polar(inner, startDeg);
  return [
    `M ${p1.x} ${p1.y}`,
    `A ${outer} ${outer} 0 ${large} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${inner} ${inner} 0 ${large} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

export function TokamakDiagram({ components }: TokamakDiagramProps) {
  const [activeId, setActiveId] = useState<string>(components[0]?.id ?? "");
  const titleId = useId();
  const active = components.find((c) => c.id === activeId) ?? components[0];

  const byId = (id: string) => components.find((c) => c.id === id)!;

  const coilPositions = Array.from({ length: COIL_COUNT }, (_, i) => {
    const deg = (360 / COIL_COUNT) * i;
    return { deg, pos: polar(COIL_RADIUS, deg) };
  });

  const select = (id: string) => setActiveId(id);
  const onKeyActivate = (id: string) => (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      select(id);
    }
  };

  return (
    <div className={styles.wrapper}>
      <svg
        viewBox="0 0 400 400"
        role="group"
        aria-labelledby={titleId}
        className={styles.svg}
      >
        <title id={titleId}>Interactive tokamak cutaway diagram</title>

        <g>
          {coilPositions.map(({ deg, pos }, i) => (
            <rect
              key={i}
              x={pos.x - 10}
              y={pos.y - 18}
              width={20}
              height={36}
              rx={4}
              transform={`rotate(${deg + 90} ${pos.x} ${pos.y})`}
              className={[styles.shape, activeId === "magnetic-coils" ? styles.active : ""].join(" ")}
              tabIndex={0}
              role="button"
              aria-pressed={activeId === "magnetic-coils"}
              aria-label={`Magnetic coil, part of ${byId("magnetic-coils").name}`}
              onClick={() => select("magnetic-coils")}
              onKeyDown={onKeyActivate("magnetic-coils")}
            />
          ))}
        </g>

        <path
          d={annulusPath(VESSEL_OUTER, VESSEL_INNER, 0, 359.999)}
          className={[styles.shape, styles.vessel, activeId === "vacuum-vessel" ? styles.active : ""].join(" ")}
          tabIndex={0}
          role="button"
          aria-pressed={activeId === "vacuum-vessel"}
          aria-label={byId("vacuum-vessel").name}
          onClick={() => select("vacuum-vessel")}
          onKeyDown={onKeyActivate("vacuum-vessel")}
        />

        <path
          d={annulusPath(WALL_OUTER, WALL_INNER, 0, 359.999)}
          className={[styles.shape, styles.wall, activeId === "first-wall" ? styles.active : ""].join(" ")}
          tabIndex={0}
          role="button"
          aria-pressed={activeId === "first-wall"}
          aria-label={byId("first-wall").name}
          onClick={() => select("first-wall")}
          onKeyDown={onKeyActivate("first-wall")}
        />

        <path
          d={annulusPath(PLASMA_OUTER, PLASMA_INNER, DIVERTOR_END_DEG, DIVERTOR_START_DEG + 360)}
          className={[styles.shape, styles.plasma, activeId === "plasma" ? styles.active : ""].join(" ")}
          tabIndex={0}
          role="button"
          aria-pressed={activeId === "plasma"}
          aria-label={byId("plasma").name}
          onClick={() => select("plasma")}
          onKeyDown={onKeyActivate("plasma")}
        />

        <path
          d={annulusPath(WALL_OUTER, PLASMA_INNER, DIVERTOR_START_DEG, DIVERTOR_END_DEG)}
          className={[styles.shape, styles.divertor, activeId === "divertor" ? styles.active : ""].join(" ")}
          tabIndex={0}
          role="button"
          aria-pressed={activeId === "divertor"}
          aria-label={byId("divertor").name}
          onClick={() => select("divertor")}
          onKeyDown={onKeyActivate("divertor")}
        />
      </svg>

      {active ? (
        <div className={styles.panel} role="status">
          <h3>{active.name}</h3>
          <p>{emphasizeTerms(active.explanation)}</p>
          {active.deeper ? <p className={styles.deeper}>{emphasizeTerms(active.deeper)}</p> : null}
          <p className={styles.misconception}>
            <strong>Watch out for:</strong> {active.misconception}
          </p>
        </div>
      ) : null}

      <ul className={styles.legend} aria-hidden="true">
        <li>
          <span className={styles.swatch} style={{ background: "var(--color-accent-confinement)" }} /> Magnetic coils
        </li>
        <li>
          <span className={styles.swatch} style={{ background: "var(--color-bg-panel-raised)" }} /> Vacuum vessel
        </li>
        <li>
          <span className={styles.swatch} style={{ background: "var(--color-accent-highlight)" }} /> First wall
        </li>
        <li>
          <span className={styles.swatch} style={{ background: "var(--color-accent-heat)" }} /> Plasma
        </li>
        <li>
          <span className={styles.swatch} style={{ background: "var(--color-status-far)" }} /> Divertor
        </li>
      </ul>
    </div>
  );
}
