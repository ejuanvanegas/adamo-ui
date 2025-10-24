import { ThemableSection } from "@app/contexts/themable-section";
import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type ButtonGroupSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function ButtonGroupSection({ className, ...props }: Omit<ButtonGroupSectionProps, "title">) {
  return (
    <ThemableSection title="Button group" className={cn(className)} {...props}>
    </ThemableSection>
  );
}
