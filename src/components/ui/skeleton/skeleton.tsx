import { cn } from "@src/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("adm:bg-accent adm:animate-pulse adm:rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
