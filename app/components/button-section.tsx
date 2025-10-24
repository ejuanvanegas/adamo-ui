import { ThemableSection } from "@app/contexts/themable-section";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";
import { CircleUser } from "lucide-react";
import type { ComponentProps } from "react";

export type ButtonSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function ButtonSection({ className, ...props }: Omit<ButtonSectionProps, "title">) {
  return (
    <ThemableSection title="Buttons" className={cn(className)} {...props}>
      <div className="adm:space-y-4">
        <div>
          <h3 className="adm:font-medium adm:mb-2">Primary</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="default">Default</Button>
            <Button variant="default"><CircleUser />Default</Button>
            <Button variant="default">Default<CircleUser /></Button>
            <Button variant="default"><CircleUser />Default<CircleUser /></Button>
            <Button variant="default" disabled><CircleUser />Default<CircleUser /></Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Secondary</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary"><CircleUser />Secondary</Button>
            <Button variant="secondary">Secondary<CircleUser /></Button>
            <Button variant="secondary"><CircleUser />Secondary<CircleUser /></Button>
            <Button variant="secondary" disabled>Secondary</Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Ghost</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="ghost">Ghost</Button>
            <Button variant="ghost"><CircleUser />Ghost</Button>
            <Button variant="ghost">Ghost<CircleUser /></Button>
            <Button variant="ghost"><CircleUser />Ghost<CircleUser /></Button>
            <Button variant="ghost" disabled>Ghost</Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Outline</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="outline">Outline</Button>
            <Button variant="outline"><CircleUser />Outline</Button>
            <Button variant="outline">Outline<CircleUser /></Button>
            <Button variant="outline"><CircleUser />Outline<CircleUser /></Button>
            <Button variant="outline" disabled>Outline</Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Link</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="link">Link</Button>
            <Button variant="link"><CircleUser />Link</Button>
            <Button variant="link">Link<CircleUser /></Button>
            <Button variant="link"><CircleUser />Link<CircleUser /></Button>
            <Button variant="link" disabled>Link</Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Successs</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="success">Success</Button>
            <Button variant="success"><CircleUser />Success</Button>
            <Button variant="success">Success<CircleUser /></Button>
            <Button variant="success"><CircleUser />Success<CircleUser /></Button>
            <Button variant="success" disabled>Success</Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Warning</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="warning">Warning</Button>
            <Button variant="warning"><CircleUser />Warning</Button>
            <Button variant="warning">Warning<CircleUser /></Button>
            <Button variant="warning"><CircleUser />Warning<CircleUser /></Button>
            <Button variant="warning" disabled>Warning</Button>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Destructive</h3>
          <div className="adm:flex adm:gap-4">
            <Button variant="destructive">Destructive</Button>
            <Button variant="destructive"><CircleUser />Destructive</Button>
            <Button variant="destructive">Destructive<CircleUser /></Button>
            <Button variant="destructive"><CircleUser />Destructive<CircleUser /></Button>
            <Button variant="destructive" disabled>Destructive</Button>
          </div>
        </div>
      </div>
    </ThemableSection>
  );
}
