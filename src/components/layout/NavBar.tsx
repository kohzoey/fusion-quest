import { NavLink } from "react-router-dom";
import { moduleSummaries } from "../../data/moduleSummaries";
import { useProgress } from "../../context/useProgress";
import { Container } from "../ui/Container";
import styles from "./NavBar.module.css";

export function NavBar() {
  const { completed } = useProgress();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          FUSION QUEST
        </NavLink>
        <nav aria-label="Module navigation" className={styles.nav}>
          {moduleSummaries.map((m) => (
            <NavLink
              key={m.id}
              to={m.path}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.active : ""].filter(Boolean).join(" ")
              }
            >
              <span aria-hidden="true" className={styles.navOrder}>
                {m.order}
              </span>
              <span className={styles.navLabel}>{m.title}</span>
              {completed[m.id] ? (
                <span className={styles.completedMark} aria-label="Completed">
                  ✓
                </span>
              ) : null}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  );
}
