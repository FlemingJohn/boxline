import styles from "@/styles/guide/GuideImage.module.css";
import type { GuideImageProps } from "@/types/components/GuideImageProps";

export function GuideImage({ step }: GuideImageProps) {
  return (
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcSet={`/guides/${step.id}.png`} />
      <img
        className={styles.image}
        src={`/guides/${step.id}.gif`}
        alt={`${step.title}: ${step.text}`}
        width={1000}
        height={560}
        loading="lazy"
      />
    </picture>
  );
}
