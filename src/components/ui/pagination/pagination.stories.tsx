import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
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

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Pagination with page navigation, next and previous links.",
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
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
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic pagination component with previous, next, and page links.",
      },
    },
  },
};

export const Simple: Story = {
  name: "Simple",
  render: function Render() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A simple pagination without ellipsis, showing only sequential pages.",
      },
    },
  },
};

export const WithEllipsis: Story = {
  name: "With ellipsis",
  render: function Render() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">20</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with ellipsis to indicate more pages between ranges.",
      },
    },
  },
};

export const MultipleEllipsis: Story = {
  name: "Multiple ellipsis",
  render: function Render() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              11
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">12</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">50</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with multiple ellipsis showing gaps on both sides.",
      },
    },
  },
};

export const FirstPage: Story = {
  name: "First page",
  render: function Render() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className={cn("adm:pointer-events-none adm:opacity-50")}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">25</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination on the first page with disabled previous button.",
      },
    },
  },
};

export const LastPage: Story = {
  name: "Last page",
  render: function Render() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">23</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">24</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              25
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className={cn("adm:pointer-events-none adm:opacity-50")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination on the last page with disabled next button.",
      },
    },
  },
};

export const SmallDataset: Story = {
  name: "Small dataset",
  render: function Render() {
    return (
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
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination for small datasets where all pages can be shown.",
      },
    },
  },
};

export const SinglePage: Story = {
  name: "Single page",
  render: function Render() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className={cn("adm:pointer-events-none adm:opacity-50")}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className={cn("adm:pointer-events-none adm:opacity-50")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with only one page, both navigation buttons disabled.",
      },
    },
  },
};

export const Interactive: Story = {
  name: "Interactive",
  render: function Render() {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 20;

    const generatePageNumbers = () => {
      const pages = [];

      // Always show first page
      pages.push(1);

      // Add ellipsis if there's a gap
      if (currentPage > 4) {
        pages.push(-1); // -1 represents ellipsis
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      // Add ellipsis if there's a gap
      if (currentPage < totalPages - 3) {
        pages.push(-2); // -2 represents ellipsis
      }

      // Always show last page if more than 1 page
      if (totalPages > 1) {
        pages.push(totalPages);
      }

      return pages;
    };

    const pages = generatePageNumbers();

    const handlePageClick = (page: number) => {
      setCurrentPage(page);
    };

    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
      <div className={cn("adm:space-y-4")}>
        <p className={cn("adm:text-center adm:text-sm adm:text-muted-foreground")}>
          Page {currentPage} of {totalPages}
        </p>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePrevious();
                }}
                className={cn(
                  currentPage === 1 && "adm:pointer-events-none adm:opacity-50",
                )}
              />
            </PaginationItem>

            {pages.map((page, index) => (
              <PaginationItem key={index}>
                {page === -1 || page === -2
                  ? <PaginationEllipsis />
                  : (
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(page);
                      }}
                    >
                      {page}
                    </PaginationLink>
                  )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
                className={cn(
                  currentPage === totalPages && "adm:pointer-events-none adm:opacity-50",
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive pagination with dynamic page generation and state management.",
      },
    },
  },
};

export const Compact: Story = {
  name: "Compact",
  render: function Render() {
    return (
      <Pagination className={cn("adm:justify-start")}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Compact pagination showing only previous and next navigation.",
      },
    },
  },
};

export const WithCustomSizing: Story = {
  name: "With custom sizing",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-8")}>
        {/* Small */}
        <div>
          <h3 className={cn("adm:text-sm adm:font-medium adm:mb-4")}>Small</h3>
          <Pagination>
            <PaginationContent className={cn("adm:gap-0.5")}>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className={cn("adm:h-8 adm:px-2 adm:text-xs")}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className={cn("adm:h-8 adm:w-8 adm:text-xs")}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className={cn("adm:h-8 adm:w-8 adm:text-xs")}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className={cn("adm:h-8 adm:w-8 adm:text-xs")}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className={cn("adm:h-8 adm:px-2 adm:text-xs")}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        {/* Large */}
        <div>
          <h3 className={cn("adm:text-sm adm:font-medium adm:mb-4")}>Large</h3>
          <Pagination>
            <PaginationContent className={cn("adm:gap-2")}>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className={cn("adm:h-12 adm:px-4 adm:text-base")}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className={cn("adm:h-12 adm:w-12 adm:text-base")}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className={cn("adm:h-12 adm:w-12 adm:text-base")}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className={cn("adm:h-12 adm:w-12 adm:text-base")}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className={cn("adm:h-12 adm:px-4 adm:text-base")}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with custom sizing - small and large variants.",
      },
    },
  },
};

export const WithPageInfo: Story = {
  name: "With page info",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4")}>
        <div className={cn("adm:flex adm:items-center adm:justify-between adm:text-sm adm:text-muted-foreground")}>
          <span>Showing 1-10 of 250 results</span>
          <span>Page 2 of 25</span>
        </div>

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
              <PaginationLink href="#">25</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pagination with additional page information and result counts.",
      },
    },
  },
};
