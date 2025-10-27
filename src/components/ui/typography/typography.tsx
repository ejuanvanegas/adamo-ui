import { cn } from "@src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("", {
  variants: {
    variant: {
      lg: "adm:text-lg adm:leading-1",
      md: "adm:text-base adm:leading-0.5",
      sm: "adm:text-sm adm:leading",
      xs: "adm:text-xs adm:leading-[20px]",
      caption: "adm:text-[11px] adm:leading-[18px]",
    },
  },
});

function Typography({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"p">
  & VariantProps<typeof typographyVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="typography"
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography };
