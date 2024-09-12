import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import stylisticPluginJSX from "@stylistic/eslint-plugin-jsx";
import vitest from "@vitest/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import neverthrow from "eslint-plugin-neverthrow";
import pluginReact from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ["dist", "src/gql/graphql.ts"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react": pluginReact,
      "react-hooks": reactHooksPlugin,
      "@stylistic": stylistic,
      "import": importPlugin,
      "unused-imports": unusedImportsPlugin,
      neverthrow,
      vitest,
      "@stylistic/jsx": stylisticPluginJSX,
      "jsx-a11y": jsxA11yPlugin,

    },
    rules: {
      ...tseslint.configs.eslintRecommended.rules,
      ...tseslint.configs.strict.rules,
      ...tseslint.configs.strictTypeChecked.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...stylistic.configs["recommended-flat"].rules,
      ...stylisticPluginJSX.configs["all-flat"].rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      ...importPlugin.configs.rules,
      ...vitest.configs.recommended.rules,
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": [
        "error",
        "double",
        { allowTemplateLiterals: false },
      ],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/jsx-one-expression-per-line": [
        "error",
        { allow: "single-line" },
      ],
      "@stylistic/member-delimiter-style": ["error"],
      "no-console": ["warn"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            [
              "parent",
              "sibling",
            ],
            "object",
            "type",
            "index",
          ],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
          "pathGroups": [
            {
              pattern: "@/**",
              group: "external",
              position: "after",
            },
          ],
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "@stylistic/jsx/jsx-one-expression-per-line": [
        "error",
        { allow: "single-child" },
      ],
      "@stylistic/jsx/jsx-newline": ["error", { prevent: true }],
      "@stylistic/jsx/jsx-indent": ["error", 2],
      "@stylistic/jsx/jsx-indent-props": ["error", 2],
      "@stylistic/multiline-ternary": ["error", "never"],
    },
  },
];
