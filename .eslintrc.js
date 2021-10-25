module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recomended",
    "prettier@typescript-eslint",
    "standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {},
};
