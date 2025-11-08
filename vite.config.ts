import { sveltekit } from '@sveltejs/kit/vite';
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
      strategy: ["url", "baseLocale"],
      urlPatterns: [
        {
          pattern: "/about",
          localized: [
            ['en', "/about"],
            ['fr', "/a-propos"],
            ['fr-CA', "/a-propos"],
          ]
        },
        {
          pattern: "/r/100-bao-dough",
          localized: [
            ['en', "/r/100-bao-dough"],
            ['fr', "/r/100-bao-pate"],
            ['fr-CA', "/r/100-bao-pate"],
          ]
        },
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
            ["fr-CA", "/fr-CA/:path(.*)?"],
            ["fr", "/:path(.*)?"],
          ],
        },
      ],
    }),
    sveltekit()
  ]
});
