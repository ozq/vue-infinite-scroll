import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintrcAutoImport from "./.eslintrc-auto-import.json" with { type: "json" };

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/**", "docs/**"],
  },
  {
    files: ["src/**/*.{js,mjs,cjs,vue}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...eslintrcAutoImport.globals,
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
