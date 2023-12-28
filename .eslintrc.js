const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Article: 'article',
        Button: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        Video: 'video',
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-named-as-default': 'off',
    'react/button-has-type': 'off',
    // Need to add this so the deployment can work, Will delete ASAP
    'import/no-default-export': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/require-await': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
  },
  overrides: [
    // Next.js App Router file convention
    // Must use default export
    {
      files: [
        'src/middleware.ts',
        'app/**/page.tsx',
        'app/**/layout.tsx',
        'app/**/not-found.tsx',
        'app/**/*error.tsx',
        'app/sitemap.ts',
        'app/robots.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    // module declarations
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
