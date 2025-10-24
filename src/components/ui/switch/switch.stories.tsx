import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Label } from "@src/components/ui/label";
import { Switch } from "@src/components/ui/switch";
import { cn } from "@src/lib/utils";
import { THEMES } from "@src/types/theme.type";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A control that allows the user to toggle between checked and not checked. Built on top of Radix UI Switch primitive.",
      },
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "The controlled checked state of the switch. Must be used with onCheckedChange.",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultChecked: {
      control: "boolean",
      description: "The default checked state when initially rendered. Use when you do not need to control the state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the switch and applies disabled styling.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onCheckedChange: {
      description: "Event handler called when the checked state of the switch changes.",
      control: false,
      table: {
        type: { summary: "(checked: boolean) => void" },
      },
    },
    required: {
      control: "boolean",
      description: "When true, indicates that the user must check the switch before the owning form can be submitted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    name: {
      control: "text",
      description: "The name of the switch. Submitted with its owning form as part of a name/value pair.",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "The value given as data when submitted with a name.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "on" },
      },
    },
    theme: {
      control: { type: "select" },
      options: THEMES,
      description: "The theme variant to use.",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return <Switch {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "A basic switch control in its default state.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render(args) {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-2")}>
        <Switch {...args} id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane mode</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A switch with an associated label for better accessibility and user experience.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-2")}>
        <Switch {...args} id="disabled" />
        <Label htmlFor="disabled">Disabled</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled switch that cannot be interacted with.",
      },
    },
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-2")}>
        <Switch {...args} id="checked" />
        <Label htmlFor="checked">Checked</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A switch that is checked by default using the defaultChecked prop.",
      },
    },
  },
};

export const DisabledChecked: Story = {
  name: "Disabled checked",
  args: {
    disabled: true,
    defaultChecked: true,
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-2")}>
        <Switch {...args} id="disabled-checked" />
        <Label htmlFor="disabled-checked">Disabled checked</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled switch in the checked state.",
      },
    },
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);

    return (
      <div className={cn("adm:flex adm:items-center adm:gap-2")}>
        <Switch
          id="controlled"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="controlled">
          {checked ? "On" : "Off"}
        </Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled switch where the checked state is managed externally. The label updates to show the current state.",
      },
    },
  },
};
