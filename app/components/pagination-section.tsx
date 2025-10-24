import { ThemableSection } from "@app/contexts/themable-section";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@src/components/ui/pagination";
import { cn } from "@src/lib/utils";
import type { ComponentProps } from "react";

export type PaginationSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function PaginationSection({ className, ...props }: Omit<PaginationSectionProps, "title">) {
  return (
    <ThemableSection title="Pagination" className={cn(className)} {...props}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </ThemableSection>
  );
}
