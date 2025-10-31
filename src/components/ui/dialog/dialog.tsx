import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@src/lib/utils";
import type { Theme } from "@src/types/theme.type";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:fixed adm:inset-0 adm:z-50 adm:bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  theme,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
  theme?: Theme
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-theme={theme}
        data-slot="dialog-content"
        className={cn(
          "adm:bg-background adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:data-[state=closed]:zoom-out-95 adm:data-[state=open]:zoom-in-95 adm:fixed adm:top-[50%] adm:left-[50%] adm:z-50 adm:grid adm:w-full adm:max-w-[calc(100%-2rem)] adm:translate-x-[-50%] adm:translate-y-[-50%] adm:gap-4 adm:rounded-lg adm:border adm:p-6 adm:shadow-xs adm:duration-200 adm:sm:max-w-lg",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="adm:ring-offset-background adm:focus:ring-ring adm:data-[state=open]:bg-accent adm:data-[state=open]:text-muted-foreground adm:absolute adm:top-4 adm:right-4 adm:rounded-xs adm:opacity-70 adm:transition-opacity adm:hover:opacity-100 adm:focus:ring-2 adm:focus:ring-offset-2 adm:focus:outline-hidden adm:disabled:pointer-events-none adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4"
          >
            <XIcon />
            <span className="adm:sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("adm:flex adm:flex-col adm:gap-2 adm:text-center adm:sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "adm:flex adm:flex-col-reverse adm:gap-2 adm:sm:flex-row adm:sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("adm:text-lg adm:leading-none adm:font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("adm:text-muted-foreground adm:text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
