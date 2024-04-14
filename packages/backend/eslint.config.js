// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";

export default tsEslint.config(
  {
    ignores: [
      "build/**",
      ".rollup.cache/**",
      "swagger.json",
      "src/routes.ts",
      ".yarn/**",
      ".rollup.cache/**"
    ],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ['**/*.ts'],
  },
  {
    files: ["**/*.js"],
    extends: [
      tsEslint.configs.disableTypeChecked,
    ],
  }
);
