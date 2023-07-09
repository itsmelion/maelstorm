const {
  generic, typescriptGenerics, promises, react, imports, whitespace,
} = require('./rules');

module.exports = {
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },

  extends: [
    'eslint:recommended',
    // disable airbnb broken imports config.
    // 'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@nx/typescript',
    'plugin:@nx/react',
  ],

  globals: {
    __DEV__: 'readonly',
  },

  plugins: [
    'promise',
    '@typescript-eslint',
    'react',
    'react-hooks',
    '@nx',
  ],

  env: {
    node: true,
    commonjs: true,
    browser: false,
    es2022: true,
  },

  settings: {
    // Tells eslint-plugin-react to automatically detect the version of React to use
    react: { version: 'detect' },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },

  rules: {
    ...generic,
    ...whitespace,
    ...promises,
    ...imports,
    ...react,
    ...typescriptGenerics,
  },

  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    {
      files: ['*.view.tsx', '*.screen.tsx', '*.route.tsx', '*.stories.tsx', '.storybook/**'],
      rules: {
        'import/no-default-export': 0,
        'import/prefer-default-export': 1,
      },
    },
  ],
};
