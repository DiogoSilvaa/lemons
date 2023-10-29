const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next",
    "prettier",
  ],
  globals: {
    JSX: true,
    React: true,
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
  plugins: ["@typescript-eslint", "react"],
  rules: {},
};
