import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@lib": path.resolve(__dirname, "./lib"),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        button: path.resolve(__dirname, "lib/components/ui/button/index.ts"),
        calendar: path.resolve(
          __dirname,
          "lib/components/ui/calendar/index.ts",
        ),
        dialog: path.resolve(__dirname, "lib/components/ui/dialog/index.ts"),
        styles: path.resolve(__dirname, "lib/css/styles.css"),
        "tailwind-theme": path.resolve(__dirname, "lib/css/tailwind-theme.css"),
        fonts: path.resolve(__dirname, "lib/css/fonts.css"),
        themes: path.resolve(__dirname, "lib/css/themes.css"),
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
