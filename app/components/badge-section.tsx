import { ThemableSection } from "@app/contexts/themable-section";
import { Badge } from "@src/components/ui/badge";
import { cn } from "@src/lib/utils";
import { CircleCheck } from "lucide-react";
import type { ComponentProps } from "react";

export type BadgeSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function BadgeSection({ className, ...props }: Omit<BadgeSectionProps, "title">) {
  return (
    <ThemableSection title="Badges" className={cn(className)} {...props}>
      <div className="adm:space-y-4">
        <div>
          <h3 className="adm:font-medium adm:mb-2">Primary</h3>
          <div className="adm:flex adm:gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="default"><CircleCheck />Default</Badge>
            <Badge variant="default">Default<CircleCheck /></Badge>
            <Badge variant="default"><CircleCheck />Default<CircleCheck /></Badge>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Secondary</h3>
          <div className="adm:flex adm:gap-4">
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="secondary"><CircleCheck />Secondary</Badge>
            <Badge variant="secondary">Secondary<CircleCheck /></Badge>
            <Badge variant="secondary"><CircleCheck />Secondary<CircleCheck /></Badge>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Success</h3>
          <div className="adm:flex adm:gap-4">
            <Badge variant="success">Success</Badge>
            <Badge variant="success"><CircleCheck />Success</Badge>
            <Badge variant="success">Success<CircleCheck /></Badge>
            <Badge variant="success"><CircleCheck />Success<CircleCheck /></Badge>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Warning</h3>
          <div className="adm:flex adm:gap-4">
            <Badge variant="warning">Warning</Badge>
            <Badge variant="warning"><CircleCheck />Warning</Badge>
            <Badge variant="warning">Warning<CircleCheck /></Badge>
            <Badge variant="warning"><CircleCheck />Warning<CircleCheck /></Badge>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Destructive</h3>
          <div className="adm:flex adm:gap-4">
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="destructive"><CircleCheck />Destructive</Badge>
            <Badge variant="destructive">Destructive<CircleCheck /></Badge>
            <Badge variant="destructive"><CircleCheck />Destructive<CircleCheck /></Badge>
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Outline</h3>
          <div className="adm:flex adm:gap-4">
            <Badge variant="outline">Outline</Badge>
            <Badge variant="outline"><CircleCheck />Outline</Badge>
            <Badge variant="outline">Outline<CircleCheck /></Badge>
            <Badge variant="outline"><CircleCheck />Outline<CircleCheck /></Badge>
          </div>
        </div>
      </div>
    </ThemableSection>
  );
}
