// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import { defineConfig, globalIgnores } from "eslint/config"
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      stylistic.configs.recommended
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/quote-props": ["error", "as-needed"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/space-before-function-paren": ["error", "never"],
      "@stylistic/linebreak-style": ["error", "unix"],
      // 🚫 Disable splitting JSX expressions into multiple lines
      "@stylistic/jsx-one-expression-per-line": "off",
    },
  },
])
