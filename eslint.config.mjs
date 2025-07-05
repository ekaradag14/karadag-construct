import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended' // Add this last to override
  ),
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['warn', 2],
      'prettier/prettier': [
        'warn',
        {
          tabWidth: 2,
          useTabs: false,
        },
      ],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];

export default eslintConfig;
