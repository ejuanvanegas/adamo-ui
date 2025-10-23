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
      "@app": path.resolve(__dirname, "./app"),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        button: path.resolve(__dirname, "src/components/ui/button/index.ts"),
        calendar: path.resolve(
          __dirname,
          "src/components/ui/calendar/index.ts",
        ),
        dialog: path.resolve(__dirname, "src/components/ui/dialog/index.ts"),
        styles: path.resolve(__dirname, "src/index.css"),
        colors: path.resolve(__dirname, "src/css/colors.css"),
        fonts: path.resolve(__dirname, "src/css/fonts.css"),
        radius: path.resolve(__dirname, "src/css/radius.css"),
        themes: path.resolve(__dirname, "src/css/themes.css"),
        "tailwind-theme": path.resolve(__dirname, "src/css/tailwind-theme.css"),
        "tailwind-base": path.resolve(__dirname, "src/css/tailwind-base.css"),
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
