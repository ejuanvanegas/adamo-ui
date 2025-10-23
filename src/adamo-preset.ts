import type { Config } from "tailwindcss";

export const PRESET: Config = {
  theme: {
    fontFamily: {
      sans: ["\"Open Sans\"", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          ...createPalette("primary"),
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
          ...createPalette("warning"),
        },
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
          ...createPalette("success"),
        },
        sign: createPalette("sign"),
        id: createPalette("id"),
        pay: createPalette("pay"),
        risk: createPalette("risk"),
        neutrals: createPalette("neutrals"),
        error: createPalette("error"),
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
  },
  plugins: [],
};

/**
 * Helper to generate color scales (25–900) from CSS variable names.
 */
function createPalette(name: string): Record<string, string> {
  const steps = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  return steps.reduce(
    (acc, step) => ({
      ...acc,
      [step]: `var(--${name}-${step})`,
    }),
    { DEFAULT: `var(--${name})` },
  );
}

export default PRESET;
