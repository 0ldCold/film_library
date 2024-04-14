// @ts-check

import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    ignores: [
      'build/**',
      '.rollup.cache/**',
      'swagger.json',
      'src/routes.ts',
      '.yarn/**',
      '.rollup.cache/**',
    ],
  },
  {
    files: ['**/*.ts'],
  },
  {
    files: ['**/*.js'],
    ...tsEslint.configs.disableTypeChecked,
  },
);
