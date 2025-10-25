import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@src/components/ui/accordion";
import { cn } from "@src/lib/utils";
import { Calendar, Folder } from "lucide-react";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Accordion groups related content and allows the user to show and hide sections of information.",
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item one</AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>This is the first item content.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item two</AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>This is the second item content.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Item three</AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>This is the third item content.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A single-collapsible accordion where only one item can be open at a time.",
      },
    },
  },
};

export const Multiple: Story = {
  args: { type: "multiple" },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="m-item-1">
          <AccordionTrigger>First</AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>Content for the first item. Multiple items can be opened.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="m-item-2">
          <AccordionTrigger>Second</AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>Content for the second item.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A multi-select accordion where several items can be open simultaneously.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="icon-1">
          <AccordionTrigger>
            <div className={cn("adm:flex adm:items-center adm:gap-2")}>
              <Calendar className={cn("adm:size-4 adm:text-muted-foreground")} />
              Events
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>Upcoming events and dates.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="icon-2">
          <AccordionTrigger>
            <div className={cn("adm:flex adm:items-center adm:gap-2")}>
              <Folder className={cn("adm:size-4 adm:text-muted-foreground")} />
              Files
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>Files and folders related to this project.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion items with leading icons inside their triggers.",
      },
    },
  },
};
