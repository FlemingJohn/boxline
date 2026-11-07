import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfiguration = [
  ...coreWebVitals,
  ...typescript,
  { rules: { "@next/next/no-img-element": "off" } },
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
];

export default eslintConfiguration;
