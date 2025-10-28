import { cn } from "@src/lib/utils";
import { capitalize } from "@app/lib/capitalize";
import type { ComponentProps } from "react";

const colors = [
  "sign",
  "id",
  "pay",
  "risk",
  "neutrals",
  "error",
  "warning",
  "success",
  "waiting",
];

const variants = [
  "25",
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export type ColorsSectionProps = Readonly<ComponentProps<"section">>;

export function ColorsSection({ className, ...props }: ColorsSectionProps) {
  return (
    <section className={cn("adm:w-full", className)} {...props}>
      <h2 className="adm:text-3xl adm:font-bold adm:mb-4">Colors</h2>
      <div className="adm:flex adm:flex-col adm:gap-4">
        {colors.map((color) => {
          return (
            <div className="flex adm:flex-col">
              <p className="adm:text-3xl adm:font-bold adm:mb-2">{capitalize(color)}</p>
              <div className="adm:grid adm:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] adm:gap-4">
                {variants.map((variant) => {
                  return (
                    <div className="adm:border">
                      <div
                        className="adm:w-full adm:border-b adm:aspect-square"
                        style={{
                          backgroundColor: `var(--${color}-${variant})`,
                        }}
                      >
                      </div>
                      <div className="adm:text-xs adm:p-2">
                        <p>
                          --{color}-{variant}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
