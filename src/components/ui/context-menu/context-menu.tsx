import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "@src/lib/utils";

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  );
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  );
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  );
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  );
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "adm:gap-2 adm:focus:bg-accent adm:focus:text-accent-foreground adm:data-[state=open]:bg-accent adm:data-[state=open]:text-accent-foreground adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:flex adm:cursor-default adm:items-center adm:rounded-sm adm:px-2 adm:py-1.5 adm:text-sm adm:outline-hidden adm:select-none adm:data-[inset]:pl-8 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="adm:ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "adm:bg-popover adm:text-popover-foreground adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:data-[state=closed]:zoom-out-95 adm:data-[state=open]:zoom-in-95 adm:data-[side=bottom]:slide-in-from-top-2 adm:data-[side=left]:slide-in-from-right-2 adm:data-[side=right]:slide-in-from-left-2 adm:data-[side=top]:slide-in-from-bottom-2 adm:z-50 adm:min-w-[8rem] adm:origin-(--radix-context-menu-content-transform-origin) adm:overflow-hidden adm:rounded-md adm:border adm:p-1 adm:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "adm:bg-popover adm:text-popover-foreground adm:data-[state=open]:animate-in adm:data-[state=closed]:animate-out adm:data-[state=closed]:fade-out-0 adm:data-[state=open]:fade-in-0 adm:data-[state=closed]:zoom-out-95 adm:data-[state=open]:zoom-in-95 adm:data-[side=bottom]:slide-in-from-top-2 adm:data-[side=left]:slide-in-from-right-2 adm:data-[side=right]:slide-in-from-left-2 adm:data-[side=top]:slide-in-from-bottom-2 adm:z-50 adm:max-h-(--radix-context-menu-content-available-height) adm:min-w-[8rem] adm:origin-(--radix-context-menu-content-transform-origin) adm:overflow-x-hidden adm:overflow-y-auto adm:rounded-md adm:border adm:p-1 adm:shadow-md",
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: "default" | "destructive"
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:data-[variant=destructive]:text-destructive adm:data-[variant=destructive]:focus:bg-destructive/10 adm:dark:data-[variant=destructive]:focus:bg-destructive/20 adm:data-[variant=destructive]:focus:text-destructive adm:data-[variant=destructive]:*:[svg]:!text-destructive adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:px-2 adm:py-1.5 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:data-[inset]:pl-8 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:py-1.5 adm:pr-2 adm:pl-8 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="adm:pointer-events-none adm:absolute adm:left-2 adm:flex adm:size-3.5 adm:items-center adm:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="adm:size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "adm:focus:bg-accent adm:focus:text-accent-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:py-1.5 adm:pr-2 adm:pl-8 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled]:pointer-events-none adm:data-[disabled]:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="adm:pointer-events-none adm:absolute adm:left-2 adm:flex adm:size-3.5 adm:items-center adm:justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="adm:size-2 adm:fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "adm:text-foreground adm:px-2 adm:py-1.5 adm:text-sm adm:font-medium adm:data-[inset]:pl-8",
        className,
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("adm:bg-border adm:-mx-1 adm:my-1 adm:h-px", className)}
      {...props}
    />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        "adm:text-muted-foreground adm:ml-auto adm:text-xs adm:tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
