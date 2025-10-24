import { capitalize } from "@app/lib/capitalize";
import { cn } from "@src/lib/utils";
import { THEMES, type Theme } from "@src/types/theme.type";
import { useState, type ComponentProps, type PropsWithChildren } from "react";

export type ThemableSectionProps = Readonly<PropsWithChildren<ComponentProps<"section"> & { title: string }>>;

export function ThemableSection({ title, className, children, ...props }: ThemableSectionProps) {
  const [theme, setTheme] = useState<Theme>("default");

  return (
    <section data-theme={theme} className={cn(className)} {...props}>
      <h2 className="adm:text-3xl adm:font-bold adm:mb-4">{title}</h2>
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
      {children}
    </section>
  );
}
