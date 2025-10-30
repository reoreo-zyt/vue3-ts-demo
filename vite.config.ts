import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { LocaleNamespace } from "./src/plugins/namespaces-i18n-plugin";

export default defineConfig({
  plugins: [tsconfigPaths(), LocaleNamespace()],
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "Counter",
      fileName: "counter",
    },
  },
});
