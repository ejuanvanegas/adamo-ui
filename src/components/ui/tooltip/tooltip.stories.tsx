import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@src/components/ui/tooltip";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.",
      table: { defaultValue: { summary: "false" } },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the tooltip. Must be used with onOpenChange.",
    },
    onOpenChange: {
      description: "Event handler called when the open state changes.",
      control: false,
    },
    delayDuration: {
      control: { type: "number" },
      description: "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
      table: { defaultValue: { summary: "0" } },
    },
    disableHoverableContent: {
      control: "boolean",
      description: "Prevents the tooltip content from remaining open when hovering.",
      table: { defaultValue: { summary: "false" } },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic tooltip that appears when hovering over the trigger element.",
      },
    },
  },
};

export const Side: Story = {
  render: function Render(args) {
    return (
      <div className={cn("adm:flex adm:gap-4")}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={5}>
            <p>Top tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            <p>Right tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={5}>
            <p>Bottom tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={5}>
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Tooltips can be positioned on different sides of the trigger element.",
      },
    },
  },
};

export const WithDelay: Story = {
  render: function Render(args) {
    return (
      <TooltipProvider delayDuration={500}>
        <Tooltip {...args}>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover (500ms delay)</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <p>This tooltip has a 500ms delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A tooltip with a custom delay before appearing. Useful to prevent tooltips from showing on accidental hovers.",
      },
    },
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <div className={cn("adm:flex adm:items-center adm:gap-4")}>
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button variant="outline">Controlled</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <p>Controlled tooltip</p>
          </TooltipContent>
        </Tooltip>
        <Button variant="secondary" onClick={() => setOpen(!open)}>
          Toggle Tooltip
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A tooltip with controlled open state. The tooltip can be toggled programmatically.",
      },
    },
  },
};

export const WithRichContent: Story = {
  render: function Render(args) {
    return (
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">View Details</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={5} className={cn("adm:max-w-xs")}>
          <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
            <p className={cn("adm:font-semibold")}>Product Information</p>
            <p className={cn("adm:text-xs")}>
              This product features advanced technology and premium materials for exceptional performance.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A tooltip with rich content including headings and formatted text.",
      },
    },
  },
};

export const AsChild: Story = {
  render: function Render(args) {
    return (
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <a
            href="#"
            className={cn("adm:inline-flex adm:items-center adm:gap-2 adm:text-sm adm:underline adm:text-primary")}
          >
            Learn more
          </a>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p>Click to view documentation</p>
        </TooltipContent>
      </Tooltip>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A tooltip triggered from an anchor element using the asChild prop.",
      },
    },
  },
};
