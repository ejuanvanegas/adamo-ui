import { ThemableSection } from "@app/contexts/themable-section";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";

import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type AvatarSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function AvatarSection({ className, ...props }: Omit<AvatarSectionProps, "title">) {
  return (
    <ThemableSection title="Alert" className={cn(className)} {...props}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="adm:rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="adm:*:data-[slot=avatar]:ring-background adm:flex adm:-space-x-2 adm:*:data-[slot=avatar]:ring-2 adm:*:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </ThemableSection>
  );
}
