// noinspection JSUnusedGlobalSymbols

import { fileURLToPath, URL } from "node:url";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {
  getPascalCaseRouteName,
  VueRouterAutoImports,
} from "unplugin-vue-router";
import VueDevTools from "vite-plugin-vue-devtools";
import { ClientSideLayout } from "vite-plugin-vue-layouts";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      getRouteName: (routeNode) => {
        // Convert pascal case to kebab case
        return getPascalCaseRouteName(routeNode)
          .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
          .toLowerCase();
      },
      // beforeWriteFiles: (root) => {
      //   // root.insert('/apps/email/:filter', '/src/pages/apps/email/index.vue')
      //   // root.insert('/apps/email/:label', '/src/pages/apps/email/index.vue')
      // },
      importMode: "async",
      pathParser: {
        // should `users.[id]` be parsed as `users/:id`?
        dotNesting: true,
      },
    }),
    vue(),
    VueDevTools(),
    // Docs: https://github.com/johncampionjr/vite-plugin-vue-layouts#vite-plugin-vue-layouts
    ClientSideLayout({
      // layoutsDir: "./src/layouts/",
      defaultLayout: "default",
      importMode: "sync",
    }),
    Pages,
    // Docs: https://github.com/antfu/unplugin-vue-components#unplugin-vue-components
    Components({
      dirs: ["src/components"],
      dts: true,
      resolvers: [PrimeVueResolver()],
    }),

    // Docs: https://github.com/antfu/unplugin-auto-import#unplugin-auto-import
    AutoImport({
      imports: ["vue", VueRouterAutoImports, "pinia"],
      dirs: ["./src/composables/*"],
      vueTemplate: true,

      // ℹ️ Disabled to avoid confusion & accidental usage
      ignore: ["useCookies", "useStorage"],
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/SAMS_Intern/",
  build: {
    chunkSizeWarningLimit: 5000,
    // outDir: "deploy/dist",
  },
  server: {
    port: 9000,
    proxy: {},
  },

  clearScreen: true,
  optimizeDeps: {
    entries: ["./src/**/*.vue"],
  },
});
