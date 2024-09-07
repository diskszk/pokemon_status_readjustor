import pluginJs from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import vitest from "@vitest/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import neverthrow from "eslint-plugin-neverthrow";
import pluginReact from "eslint-plugin-react";
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
      "@stylistic": stylistic,
      "import": importPlugin,
      "unused-imports": unusedImportsPlugin,
      neverthrow,
      vitest,
    },
    rules: {
      ...tseslint.configs.eslintRecommended.rules,
      ...tseslint.configs.strict.rules,
      ...tseslint.configs.strictTypeChecked.rules,
      ...stylistic.configs["recommended-flat"].rules,
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
    },
  },
];
