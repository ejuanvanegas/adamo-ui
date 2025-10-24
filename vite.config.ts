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
        accordion: path.resolve(__dirname, "src/components/ui/accordion/index.ts"),
        alert: path.resolve(__dirname, "src/components/ui/alert/index.ts"),
        avatar: path.resolve(__dirname, "src/components/ui/avatar/index.ts"),
        badge: path.resolve(__dirname, "src/components/ui/badge/index.ts"),
        button: path.resolve(__dirname, "src/components/ui/button/index.ts"),
        "button-group": path.resolve(__dirname, "src/components/ui/button-group/index.ts"),
        calendar: path.resolve(__dirname, "src/components/ui/calendar/index.ts"),
        card: path.resolve(__dirname, "src/components/ui/card/index.ts"),
        checkbox: path.resolve(__dirname, "src/components/ui/checkbox/index.ts"),
        collapsible: path.resolve(__dirname, "src/components/ui/collapsible/index.ts"),
        "context-menu": path.resolve(__dirname, "src/components/ui/context-menu/index.ts"),
        dialog: path.resolve(__dirname, "src/components/ui/dialog/index.ts"),
        "dropdown-menu": path.resolve(__dirname, "src/components/ui/dropdown-menu/index.ts"),
        field: path.resolve(__dirname, "src/components/ui/field/index.ts"),
        "hover-card": path.resolve(__dirname, "src/components/ui/hover-card/index.ts"),
        input: path.resolve(__dirname, "src/components/ui/input/index.ts"),
        "input-group": path.resolve(__dirname, "src/components/ui/input-group/index.ts"),
        kbd: path.resolve(__dirname, "src/components/ui/kbd/index.ts"),
        label: path.resolve(__dirname, "src/components/ui/label/index.ts"),
        pagination: path.resolve(__dirname, "src/components/ui/pagination/index.ts"),
        popover: path.resolve(__dirname, "src/components/ui/popover/index.ts"),
        progress: path.resolve(__dirname, "src/components/ui/progress/index.ts"),
        "radio-group": path.resolve(__dirname, "src/components/ui/radio-group/index.ts"),
        select: path.resolve(__dirname, "src/components/ui/select/index.ts"),
        separator: path.resolve(__dirname, "src/components/ui/separator/index.ts"),
        sheet: path.resolve(__dirname, "src/components/ui/sheet/index.ts"),
        skeleton: path.resolve(__dirname, "src/components/ui/skeleton/index.ts"),
        slider: path.resolve(__dirname, "src/components/ui/slider/index.ts"),
        spinner: path.resolve(__dirname, "src/components/ui/spinner/index.ts"),
        switch: path.resolve(__dirname, "src/components/ui/switch/index.ts"),
        tabs: path.resolve(__dirname, "src/components/ui/tabs/index.ts"),
        textarea: path.resolve(__dirname, "src/components/ui/textarea/index.ts"),
        toggle: path.resolve(__dirname, "src/components/ui/toggle/index.ts"),
        tooltip: path.resolve(__dirname, "src/components/ui/tooltip/index.ts"),
        styles: path.resolve(__dirname, "src/index.css"),
        "custom-layered-styles": path.resolve(__dirname, "src/custom-layered-index.css"),
        colors: path.resolve(__dirname, "src/css/colors.css"),
        fonts: path.resolve(__dirname, "src/css/fonts.css"),
        radius: path.resolve(__dirname, "src/css/radius.css"),
        themes: path.resolve(__dirname, "src/css/themes.css"),
        "tailwind-theme": path.resolve(__dirname, "src/css/tailwind-theme.css"),
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
