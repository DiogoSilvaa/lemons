const { resolve } = require("node:path")

const project = resolve(process.cwd(), "tsconfig.json")

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  globals: {
    JSX: true
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        project
      }
    },
    react: {
      version: "detect"
    }
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],
  plugins: ["@typescript-eslint", "react"],
  rules: {}
}
