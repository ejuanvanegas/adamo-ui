import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/ui/accordion";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A vertically stacked set of interactive headings that each reveal a section of content.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["single", "multiple"],
      description: "Determines whether one or multiple items can be opened at the same time.",
    },
    collapsible: {
      control: "boolean",
      description: "When type is 'single', allows closing content when clicking trigger for an open item.",
      table: { defaultValue: { summary: "false" } },
    },
    defaultValue: {
      control: "text",
      description: "The default active value(s) when initially rendered. Use when not controlling the state.",
    },
    value: {
      control: "text",
      description: "The controlled value of the item to expand. Use with onValueChange.",
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the accordion.",
      table: { defaultValue: { summary: "false" } },
    },
    onValueChange: {
      description: "Event handler called when the expanded state changes.",
      control: false,
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <Accordion
        {...args}
        className={cn("adm:w-full")}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className={cn("adm:flex adm:flex-col adm:gap-4 adm:text-balance")}>
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent className={cn("adm:flex adm:flex-col adm:gap-4 adm:text-balance")}>
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className={cn("adm:flex adm:flex-col adm:gap-4 adm:text-balance")}>
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic accordion with single selection and collapsible items. Only one item can be open at a time.",
      },
    },
  },
};

export const Multiple: Story = {
  args: { type: "multiple", defaultValue: ["item-1", "item-2"] },
  render: function Render(args) {
    return (
      <Accordion
        {...args}
        className={cn("adm:w-full")}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and is fully keyboard navigable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that can be customized to match your design system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It includes smooth animations for opening and closing accordion items.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An accordion that allows multiple items to be open at the same time.",
      },
    },
  },
};

export const Collapsible: Story = {
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <Accordion
        {...args}
        className={cn("adm:w-full")}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I close this?</AccordionTrigger>
          <AccordionContent>
            Yes! Because collapsible is set to true, you can click the trigger again to close this item.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What happens if I click another item?</AccordionTrigger>
          <AccordionContent>
            The currently open item will close and the new item will open, since type is set to single.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A single-selection accordion where the open item can be collapsed by clicking its trigger again.",
      },
    },
  },
};

export const Disabled: Story = {
  args: { type: "single", collapsible: true, disabled: true },
  render: function Render(args) {
    return (
      <Accordion
        {...args}
        className={cn("adm:w-full")}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Active Item</AccordionTrigger>
          <AccordionContent>
            This accordion item is active and can be interacted with normally.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Disabled Item</AccordionTrigger>
          <AccordionContent>
            This content cannot be accessed because the item is disabled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Another Active Item</AccordionTrigger>
          <AccordionContent>
            This item is also active and can be opened and closed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An accordion with one disabled item that cannot be interacted with.",
      },
    },
  },
};
