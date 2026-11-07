import { GuideImage } from "@/components/guide/GuideImage";
import { Icon } from "@/components/shared/Icon";
import { guideSteps } from "@/lib/guide/guideSteps";
import styles from "@/styles/landing/HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-title">
      <h2 className={styles.title} id="how-it-works-title">How it works</h2>
      <div className={styles.steps}>
        {guideSteps.map((step) => (
          <article className={styles.step} key={step.id}>
            <GuideImage step={step} />
            <h3 className={styles.stepTitle}>
              <span className={styles.stepIcon}><Icon shape={step.icon} /></span>
              {step.title}
            </h3>
            <p className={styles.stepText}>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
