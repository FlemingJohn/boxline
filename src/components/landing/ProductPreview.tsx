import styles from "@/styles/landing/ProductPreview.module.css";

const previewDescription =
  "Moving preview: an Order box appears, its rows are typed, and a line is dragged from the Customer box to connect them";

export function ProductPreview() {
  return (
    <svg className={styles.preview} viewBox="0 0 440 290" role="img" aria-label={previewDescription}>
      <defs>
        <pattern id="preview-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle className={styles.gridDot} cx="2" cy="2" r="1" />
        </pattern>
      </defs>
      <rect className={styles.frame} x="0.5" y="0.5" width="439" height="289" rx="8" />
      <text className={styles.barTitle} x="14" y="25">Shop classes</text>
      <text className={styles.barMuted} x="426" y="25" textAnchor="end">Synced · Help</text>
      <rect className={styles.surface} x="1" y="41" width="438" height="208" />
      <rect x="1" y="41" width="438" height="208" fill="url(#preview-dots)" />
      <line className={styles.divider} x1="1" y1="40.5" x2="439" y2="40.5" />
      <line className={styles.divider} x1="1" y1="249.5" x2="439" y2="249.5" />
      <rect className={styles.box} x="26" y="86" width="132" height="110" rx="3" />
      <text className={styles.boxName} x="92" y="106" textAnchor="middle">Customer</text>
      <line className={styles.boxLine} x1="26" y1="116" x2="158" y2="116" />
      <text className={styles.rowText} x="38" y="138">- id: int</text>
      <text className={styles.rowText} x="38" y="160">+ name: string</text>
      <text className={styles.rowText} x="38" y="182">+ order()</text>
      <path className={styles.link} d="M158 141 H276" pathLength="1" />
      <circle className={styles.linkDot} cx="158" cy="141" r="4" />
      <g className={styles.newBox}>
        <rect className={styles.box} x="276" y="86" width="140" height="110" rx="3" />
        <text className={styles.boxName} x="346" y="106" textAnchor="middle">Order</text>
        <line className={styles.boxLine} x1="276" y1="116" x2="416" y2="116" />
        <text className={`${styles.rowText} ${styles.firstRow}`} x="288" y="138">- total: int</text>
        <text className={`${styles.rowText} ${styles.secondRow}`} x="288" y="160">+ getTotal()</text>
        <text className={`${styles.rowText} ${styles.thirdRow}`} x="288" y="182">+ pay()</text>
      </g>
      <g className={styles.cursor}>
        <path className={styles.cursorShape} d="M1 1 L1 15 L5 11.5 L8 18 L11 16.7 L8 10.5 L13.5 10.5 Z" />
      </g>
      <text className={styles.barMuted} x="220" y="274" textAnchor="middle">Drag from a box&apos;s edge to connect it.</text>
    </svg>
  );
}
