import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@src/components/ui/checkbox";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A control that allows the user to toggle between checked and not checked.",
      },
    },
  },
  argTypes: {
    checked: {
      control: { type: "select" },
      options: [true, false, "indeterminate"],
      description: "The controlled checked state of the checkbox. Can be true, false, or 'indeterminate'.",
    },
    defaultChecked: {
      control: "boolean",
      description: "The default checked state when initially rendered. Use when not controlling the state.",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the checkbox.",
      table: { defaultValue: { summary: "false" } },
    },
    required: {
      control: "boolean",
      description: "When true, indicates that the user must check this checkbox before the form can be submitted.",
      table: { defaultValue: { summary: "false" } },
    },
    onCheckedChange: {
      description: "Event handler called when the checked state changes.",
      control: false,
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return <Checkbox {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "A basic checkbox component.",
      },
    },
  },
};

export const Withlabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-3")}>
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox with an associated label for better accessibility.",
      },
    },
  },
};

export const Checked: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:items-start adm:gap-3")}>
        <Checkbox id="terms-2" defaultChecked />
        <div className={cn("adm:grid adm:gap-2")}>
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className={cn("adm:text-muted-foreground adm:text-sm")}>
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox with a default checked state and additional description text.",
      },
    },
  },
};

export const Disabled: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:items-start adm:gap-3")}>
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox in disabled state that cannot be interacted with.",
      },
    },
  },
};

export const Indeterminate: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-3")}>
        <Checkbox id="indeterminate" checked="indeterminate" />
        <Label htmlFor="indeterminate">Indeterminate state</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox with an indeterminate state, useful for parent checkboxes when some children are selected.",
      },
    },
  },
};
