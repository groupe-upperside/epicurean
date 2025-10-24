import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
            "trad.ts",
            "push-trad.ts",
            "pull-trad.ts",
            "upload.ts",
            "generate-env-example.js",
            "next.config.ts",
            "lib/next-intl/custom-next-intl-client-provider.tsx",
            "lib/playwright/base-fixtures.ts",
        ],
    },
];

export default eslintConfig;
