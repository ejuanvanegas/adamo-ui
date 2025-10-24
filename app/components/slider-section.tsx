import { ThemableSection } from "@app/contexts/themable-section";
import { Slider } from "@src/components/ui/slider";
import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type SliderSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function SliderSection({ className, ...props }: Omit<SliderSectionProps, "title">) {
  return (
    <ThemableSection title="Slider" className={cn(className)} {...props}>
      <Slider defaultValue={[33]} max={100} step={1} />
    </ThemableSection>
  );
}
