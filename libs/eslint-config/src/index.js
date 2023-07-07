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
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@nx/typescript',
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
    indent: ['warn', 2],
    '@typescript-eslint/indent': ['warn', 2],
  },

  overrides: [
    {
      "files": ["*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/no-var-requires": 'off',
      }
    },

    {
      "files": ["*.view.tsx", "*.screen.tsx", "*.route.tsx"],
      "rules": {
        'import/no-default-export': 0,
        'import/prefer-default-export': 1,
      }
    },
  ]
};
