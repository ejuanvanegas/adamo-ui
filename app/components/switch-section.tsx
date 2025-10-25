import { ThemableSection } from "@app/contexts/themable-section";
import { Switch } from "@src/components/ui/switch/switch";
import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type SwitchSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function SwitchSection({ className, ...props }: Omit<SwitchSectionProps, "title">) {
  return (
    <ThemableSection title="Switches" className={cn(className)} {...props}>
      <div className="adm:space-y-4">
        <div>
          <h3 className="adm:font-medium adm:mb-2">Controllable</h3>
          <div className="adm:flex adm:gap-4">
            <Switch />
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Unchecked</h3>
          <div className="adm:flex adm:gap-4">
            <Switch checked={false} />
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Checked</h3>
          <div className="adm:flex adm:gap-4">
            <Switch checked={true} />
          </div>
        </div>
      </div>
    </ThemableSection>
  );
}
