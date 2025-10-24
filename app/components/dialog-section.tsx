import { ThemableSection } from "@app/contexts/themable-section";
import { Button } from "@src/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@src/components/ui/dialog";

import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type DialogSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function DialogSection({ className, ...props }: Omit<DialogSectionProps, "title">) {
  return (
    <ThemableSection title="Dialog" className={cn(className)} {...props}>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="adm:flex">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </ThemableSection>
  );
}
