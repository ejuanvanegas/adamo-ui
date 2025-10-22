import { cn } from "@lib/lib/utils";
import { capitalize } from "@src/lib/capitalize";
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

export type ColorsProps = Readonly<ComponentProps<"section">>;

export function Colors({ className, ...props }: ColorsProps) {
  return (
    <section className={cn("w-full", className)} {...props}>
      <h2 className="text-3xl font-medium mb-4">Colors</h2>
      <div className="flex flex-col gap-4">
        {colors.map((color) => {
          return (
            <div className="flex flex-col">
              <p className="font-medium mb-2">{capitalize(color)}</p>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4">
                {variants.map((variant) => {
                  return (
                    <div className="border">
                      <div
                        className="w-full border-b aspect-square"
                        style={{
                          backgroundColor: `var(--${color}-${variant})`,
                        }}
                      >
                      </div>
                      <div className="text-xs p-2">
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
