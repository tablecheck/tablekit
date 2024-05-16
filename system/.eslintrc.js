module.exports = {
  extends: ['@tablecheck/eslint-config'],
  rules: {
    'jsx-a11y/anchor-has-content': 'off',
    'react/button-has-type': 'off'
  },
  overrides: [
    {
      files: ['./*/src/components/*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/naming-convention': 'off'
      }
    }
  ]
};
