module.exports = {
  root: true,
  env: {
    node: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.scss', '.json']
      }
    }
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 105, tabWidth: 4 }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ]
  },
  globals: {
    __PATH_PREFIX__: true
  }
};