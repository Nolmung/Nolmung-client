import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintPluginImport,
      '@tanstack/query': tanstackQuery,
    },
    rules: {
      'no-unused-vars': 'warn',
      ...reactHooks.configs.recommended.rules,
      ...tanstackQuery.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'], // 내장 모듈과 외부 모듈을 먼저
            ['internal'], // 내부 모듈
            ['parent', 'sibling', 'index'], // 상위/형제/인덱스 모듈 순서로
          ],
          'newlines-between': 'always', // 그룹 간 줄바꿈을 강제
          alphabetize: { order: 'asc', caseInsensitive: true }, // 알파벳 순으로 정렬
        },
      ],
    },
  },
);
