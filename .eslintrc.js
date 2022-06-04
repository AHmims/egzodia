module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
  rules: {
    indent: [
      'error',
      2,
      {
        ObjectExpression: 1,
        ImportDeclaration: 1,
        MemberExpression: 1,
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: true,
      },
    ],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import .*',
      },
    ],
  },
};
