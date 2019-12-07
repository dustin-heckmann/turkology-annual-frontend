module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "jsx-a11y",
    "jest",
    "import",
    "css-modules"
  ],
  rules: {},
  settings: {
    react: { version: "detect" }
  }
};
