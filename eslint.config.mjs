import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  files: ["src/**/*.ts", "src/**/*.tsx"],
  ignores: ["**/node_modules/", "**/dist/"],
}, ...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:react/jsx-runtime",
  "plugin:import/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:@typescript-eslint/recommended",
  "prettier",
)), {
  plugins: {
    "@typescript-eslint": fixupPluginRules(typescriptEslint),
  },

  languageOptions: {
    parser: tsParser,
  },

  settings: {
    react: {
      version: "detect",
    },

    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },

  rules: {
    "no-extra-boolean-cast": "off",
  },
}];
