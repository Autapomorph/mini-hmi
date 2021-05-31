module.exports = {
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'no-use-before-define': ['error', { functions: false }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
    'import/extensions': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
