import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@src/lib/utils";
import { Label } from "@src/components/ui/label/label";
import { Separator } from "@src/components/ui/separator";

function FieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "adm:flex adm:flex-col adm:gap-6",
        "adm:has-[>[data-slot=checkbox-group]]:gap-3 adm:has-[>[data-slot=radio-group]]:gap-3",
        className,
      )}
      {...props}
    />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "adm:mb-3 adm:font-medium",
        "adm:data-[variant=legend]:text-base",
        "adm:data-[variant=label]:text-sm",
        className,
      )}
      {...props}
    />
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "adm:group/field-group adm:@container/field-group adm:flex adm:w-full adm:flex-col adm:gap-7 adm:data-[slot=checkbox-group]:gap-3 adm:[&>[data-slot=field-group]]:gap-4",
        className,
      )}
      {...props}
    />
  );
}

const fieldVariants = cva(
  "adm:group/field adm:flex adm:w-full adm:gap-2 adm:data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["adm:flex-col adm:[&>*]:w-full adm:[&>.sr-only]:w-auto"],
        horizontal: [
          "adm:flex-row adm:items-center",
          "adm:[&>[data-slot=field-label]]:flex-auto",
          "adm:has-[>[data-slot=field-content]]:items-start adm:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "adm:flex-col adm:[&>*]:w-full adm:[&>.sr-only]:w-auto adm:@md/field-group:flex-row adm:@md/field-group:items-center adm:@md/field-group:[&>*]:w-auto",
          "adm:@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "adm:@md/field-group:has-[>[data-slot=field-content]]:items-start adm:@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

function Field({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  );
}

function FieldContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        "adm:group/field-content adm:flex adm:flex-1 adm:flex-col adm:gap-1.5 adm:leading-snug",
        className,
      )}
      {...props}
    />
  );
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "adm:group/field-label adm:peer/field-label adm:flex adm:w-fit adm:gap-2 adm:leading-snug adm:group-data-[disabled=true]/field:opacity-50",
        "adm:has-[>[data-slot=field]]:w-full adm:has-[>[data-slot=field]]:flex-col adm:has-[>[data-slot=field]]:rounded-md adm:has-[>[data-slot=field]]:border adm:[&>*]:data-[slot=field]:p-4",
        "adm:has-data-[state=checked]:bg-primary/5 adm:has-data-[state=checked]:border-primary adm:dark:has-data-[state=checked]:bg-primary/10",
        className,
      )}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "adm:flex adm:w-fit adm:items-center adm:gap-2 adm:text-sm adm:leading-snug adm:font-medium adm:group-data-[disabled=true]/field:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function FieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "adm:text-muted-foreground adm:text-sm adm:leading-normal adm:font-normal adm:group-has-[[data-orientation=horizontal]]/field:text-balance",
        "adm:last:mt-0 adm:nth-last-2:-mt-1 adm:[[data-variant=legend]+&]:-mt-1.5",
        "adm:[&>a:hover]:text-primary adm:[&>a]:underline adm:[&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "adm:relative adm:-my-2 adm:h-5 adm:text-sm adm:group-data-[variant=outline]/field-group:-mb-2",
        className,
      )}
      {...props}
    >
      <Separator className="adm:absolute adm:inset-0 adm:top-1/2" />
      {children && (
        <span
          className="adm:bg-background adm:text-muted-foreground adm:relative adm:mx-auto adm:block adm:w-fit adm:px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className="adm:ml-4 adm:flex adm:list-disc adm:flex-col adm:gap-1">
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("adm:text-destructive adm:text-sm adm:font-normal", className)}
      {...props}
    >
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
};
