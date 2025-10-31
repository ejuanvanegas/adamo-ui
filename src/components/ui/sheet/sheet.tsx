import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:fixed adm:inset-0 adm:z-50 adm:bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  showCloseButton?: boolean
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "adm:bg-background adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:fixed adm:z-50 adm:flex adm:flex-col adm:gap-4 adm:shadow-xs adm:transition adm:ease-in-out adm:data-[state=closed]:duration-300 adm:data-[state=open]:duration-500",
          side === "right"
          && "adm:rounded-tl-lg adm:rounded-bl-lg adm:data-[state=closed]:slide-out-to-right adm:data-[state=open]:slide-in-from-right adm:inset-y-0 adm:right-0 adm:h-full adm:w-3/4 adm:border-l adm:sm:max-w-sm",
          side === "left"
          && "adm:rounded-tr-lg adm:rounded-br-lg adm:data-[state=closed]:slide-out-to-left adm:data-[state=open]:slide-in-from-left adm:inset-y-0 adm:left-0 adm:h-full adm:w-3/4 adm:border-r adm:sm:max-w-sm",
          side === "top"
          && "adm:rounded-br-lg adm:rounded-bl-lg adm:data-[state=closed]:slide-out-to-top adm:data-[state=open]:slide-in-from-top adm:inset-x-0 adm:top-0 adm:h-auto adm:border-b",
          side === "bottom"
          && "adm:rounded-tr-lg adm:rounded-tl-lg adm:data-[state=closed]:slide-out-to-bottom adm:data-[state=open]:slide-in-from-bottom adm:inset-x-0 adm:bottom-0 adm:h-auto adm:border-t",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="adm:ring-offset-background adm:focus:ring-ring adm:data-[state=open]:bg-secondary adm:absolute adm:top-4 adm:right-4 adm:rounded-xs adm:opacity-70 adm:transition-opacity adm:hover:opacity-100 adm:focus:ring-2 adm:focus:ring-offset-2 adm:focus:outline-hidden adm:disabled:pointer-events-none">
            <XIcon className="adm:size-4" />
            <span className="adm:sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("adm:flex adm:flex-col adm:gap-1.5 adm:p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("adm:mt-auto adm:flex adm:flex-col adm:gap-2 adm:p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("adm:text-foreground adm:font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("adm:text-muted-foreground adm:text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
