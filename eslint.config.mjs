import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    // no-page-custom-font is a Pages Router rule: it wants font <link> tags in
    // pages/_document.js, which does not exist here. The tag lives in the App
    // Router root layout, so it already applies to every page.
    files: ['app/layout.tsx'],
    rules: { '@next/next/no-page-custom-font': 'off' },
  },
];

export default config;
