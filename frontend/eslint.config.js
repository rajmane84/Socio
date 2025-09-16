// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
  // Flat config for recommended JS rules
  js.configs.recommended,

  // Flat config for recommended TS rules
  ...tseslint.configs.recommended,

  // Flat config for recommended React rules
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // For React 17+
    },
  },

  // Flat config for custom rules
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      eqeqeq: "error",
      curly: "error",
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: ["error", 2],
      camelcase: ["error", { properties: "never" }],
      "arrow-body-style": ["error", "as-needed"],
    },
  },

  // Disables ESLint formatting rules that conflict with Prettier
  eslintConfigPrettier,
];