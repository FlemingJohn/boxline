import { StartButtons } from "@/components/landing/StartButtons";
import { Logo } from "@/components/shared/Logo";
import styles from "@/styles/landing/LandingHero.module.css";

export function LandingHero() {
  return (
    <main className={styles.page}>
      <header className={styles.brand}>
        <Logo className={styles.logo} />
        <span className={styles.name}>Boxline</span>
      </header>
      <section className={styles.hero}>
        <h1 className={styles.title}>Click to add a box. Drag to connect it.</h1>
        <p className={styles.text}>
          Make UML class and ER diagrams without signing up. Your diagrams stay on your computer.
        </p>
        <StartButtons />
      </section>
    </main>
  );
}
