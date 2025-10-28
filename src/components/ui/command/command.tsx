"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

import { cn } from "@src/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@src/components/ui/dialog";

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "adm:bg-popover adm:text-popover-foreground adm:flex adm:h-full adm:w-full adm:flex-col adm:overflow-hidden adm:rounded-md",
        className,
      )}
      {...props}
    />
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="adm:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("adm:overflow-hidden adm:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="adm:[&_[cmdk-group-heading]]:text-muted-foreground adm:**:data-[slot=command-input-wrapper]:h-12 adm:[&_[cmdk-group-heading]]:px-2 adm:[&_[cmdk-group-heading]]:font-medium adm:[&_[cmdk-group]]:px-2 adm:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 adm:[&_[cmdk-input-wrapper]_svg]:h-5 adm:[&_[cmdk-input-wrapper]_svg]:w-5 adm:[&_[cmdk-input]]:h-12 adm:[&_[cmdk-item]]:px-2 adm:[&_[cmdk-item]]:py-3 adm:[&_[cmdk-item]_svg]:h-5 adm:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="adm:flex adm:h-9 adm:items-center adm:gap-2 adm:border-b adm:px-3"
    >
      <SearchIcon className="adm:size-4 adm:shrink-0 adm:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "adm:placeholder:text-muted-foreground adm:flex adm:h-10 adm:w-full adm:rounded-md adm:bg-transparent adm:py-3 adm:text-sm adm:outline-hidden adm:disabled:cursor-not-allowed adm:disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "adm:max-h-[300px] adm:scroll-py-1 adm:overflow-x-hidden adm:overflow-y-auto",
        className,
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="adm:py-6 adm:text-center adm:text-sm"
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "adm:text-foreground adm:[&_[cmdk-group-heading]]:text-muted-foreground adm:overflow-hidden adm:p-1 adm:[&_[cmdk-group-heading]]:px-2 adm:[&_[cmdk-group-heading]]:py-1.5 adm:[&_[cmdk-group-heading]]:text-xs adm:[&_[cmdk-group-heading]]:font-medium",
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("adm:bg-border adm:-mx-1 adm:h-px", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "adm:data-[selected=true]:bg-accent adm:data-[selected=true]:text-accent-foreground adm:[&_svg:not([class*=text-])]:text-muted-foreground adm:relative adm:flex adm:cursor-default adm:items-center adm:gap-2 adm:rounded-sm adm:px-2 adm:py-1.5 adm:text-sm adm:outline-hidden adm:select-none adm:data-[disabled=true]:pointer-events-none adm:data-[disabled=true]:opacity-50 adm:[&_svg]:pointer-events-none adm:[&_svg]:shrink-0 adm:[&_svg:not([class*=size-])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "adm:text-muted-foreground adm:ml-auto adm:text-xs adm:tracking-widest",
        className,
      )}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
