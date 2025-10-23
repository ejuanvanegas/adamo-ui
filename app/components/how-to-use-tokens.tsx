import { THEMES, type Theme } from "@src/types/theme.type";
import { cn } from "@src/lib/utils";
import { capitalize } from "@app/lib/capitalize";
import { useState, type ComponentProps } from "react";

const TW_PREFIX = "";

const VARS = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "warning",
  "warning-foreground",
  "success",
  "success-foreground",
  "border",
  "input",
  "ring",
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "sidebar",
  "sidebar-foreground",
  "sidebar-primary",
  "sidebar-primary-foreground",
  "sidebar-accent",
  "sidebar-accent-foreground",
  "sidebar-border",
  "sidebar-ring",
];

export type HowToUseTokensProps = Readonly<ComponentProps<"section">>;

export function HowToUseTokens({ className, ...props }: HowToUseTokensProps) {
  const [theme, setTheme] = useState<Theme>("default");

  const risk = getComputedStyle(document.documentElement)
    .getPropertyValue("--risk-500")
    .trim();

  const id = getComputedStyle(document.documentElement)
    .getPropertyValue("--id-500")
    .trim();

  return (
    <section className={cn(className)} {...props}>
      <h2 className="adm:text-3xl adm:font-medium adm:mb-4">Cómo utilizar los tokens</h2>
      <p className="adm:mb-4">
        El tema se define configurando data-theme en la etiqueta{" "}
        <code>{"<html>...</html>"}</code> por ejemplo{" "}
        <code>{"<html data-theme='risk'>...</html>"}</code>
      </p>
      <p>
        Automáticamente los tokens definidos por shadcn/ui toman los valores
        correspondientes al tema. Ejemplo:
      </p>
      <div className="adm:flex adm:gap-2 adm:items-center">
        <p>Si data-theme="risk" entonces --primary: {risk}</p>
        <div
          className="adm:size-4 adm:rounded"
          style={{ backgroundColor: "var(--risk-500)" }}
        >
        </div>
      </div>
      <div className="adm:flex adm:gap-2 adm:items-center adm:mb-4">
        <p>Si data-theme="id" entonces --primary: {id}</p>
        <div
          className="adm:size-4 adm:rounded"
          style={{ backgroundColor: "var(--id-500)" }}
        >
        </div>
      </div>
      <p className="adm:mb-4">
        Esto sucede para variables que configura cada tema. Por lo tanto, evitar
        al máximo utilizar tokens arbitrarios como {TW_PREFIX}bg-error-500,{" "}
        {TW_PREFIX}warning-500 y demás. Para eso ya hay definidos tokens como{" "}
        {TW_PREFIX}bg-primary, {TW_PREFIX}bg-destructive, {TW_PREFIX}bg-warning,{" "}
        {TW_PREFIX}bg-success y demás. A continuación los tokens:
      </p>
      <select
        className="adm:mb-4"
        onChange={(e) => {
          setTheme(e.target.value as Theme);
        }}
      >
        {THEMES.map((theme) => {
          return <option value={theme}>{capitalize(theme)}</option>;
        })}
      </select>
      <div
        data-theme={theme}
        className="adm:grid adm:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] adm:gap-4"
      >
        {VARS.map((variable) => (
          <div className="adm:border">
            <div
              className="adm:w-full adm:border-b adm:aspect-square"
              style={{
                backgroundColor: `var(--${variable})`,
              }}
            >
            </div>
            <div className="adm:text-xs adm:p-2">
              <p>{variable}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
