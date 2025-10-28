import * as React from "react";

import { cn } from "@src/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="adm:relative adm:w-full adm:overflow-x-auto adm:rounded-xl adm:border"
    >
      <table
        data-slot="table"
        className={cn("adm:w-full adm:caption-bottom adm:text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("adm:[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("adm:[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "adm:bg-muted/50 adm:border-t adm:font-medium adm:[&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "adm:hover:bg-muted/50 adm:data-[state=selected]:bg-muted adm:border-b adm:border-neutrals-50 adm:transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "adm:uppercase adm:bg-neutrals-50 adm:text-neutrals-500 adm:font-semibold adm:h-10 adm:p-4 adm:text-left adm:align-middle adm:whitespace-nowrap adm:[&:has([role=checkbox])]:pr-0 adm:[&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "adm:text-neutrals-500 adm:p-4 adm:align-middle adm:whitespace-nowrap adm:[&:has([role=checkbox])]:pr-0 adm:[&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("adm:text-muted-foreground adm:my-4 adm:text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
