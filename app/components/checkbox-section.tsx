import { ThemableSection } from "@app/contexts/themable-section";
import { Checkbox } from "@src/components/ui/checkbox";
import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type CheckboxSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function CheckboxSection({ className, ...props }: Omit<CheckboxSectionProps, "title">) {
  return (
    <ThemableSection title="Checkboxes" className={cn(className)} {...props}>
      <div className="adm:space-y-4">
        <div>
          <h3 className="adm:font-medium adm:mb-2">Controllable</h3>
          <div className="adm:flex adm:gap-4">
            <Checkbox />
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Unchecked</h3>
          <div className="adm:flex adm:gap-4">
            <Checkbox checked={false} />
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Checked</h3>
          <div className="adm:flex adm:gap-4">
            <Checkbox checked={true} />
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Indeterminate</h3>
          <div className="adm:flex adm:gap-4">
            <Checkbox checked="indeterminate" />
          </div>
        </div>
      </div>
    </ThemableSection>
  );
}
