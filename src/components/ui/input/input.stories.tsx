import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";
import { THEMES } from "@src/types/theme.type";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays a form input field or a component that looks like an input field.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "search", "tel", "url", "file", "date", "time", "datetime-local", "month", "week", "color"],
      description: "The type of input field.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: "text",
      description: "The placeholder text displayed when the input is empty.",
      table: {
        type: { summary: "string" },
      },
    },
    defaultValue: {
      control: "text",
      description: "The default value of the input when initially rendered. Use when you do not need to control the state.",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the input. Must be used with onChange.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      control: "boolean",
      description: "When true, the input is read-only and cannot be modified by the user.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "When true, indicates that the user must fill in a value before submitting the owning form.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    "aria-invalid": {
      control: "boolean",
      description: "Indicates whether the input value is invalid.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    maxLength: {
      control: "number",
      description: "The maximum number of characters the user can enter.",
      table: {
        type: { summary: "number" },
      },
    },
    minLength: {
      control: "number",
      description: "The minimum number of characters the user must enter.",
      table: {
        type: { summary: "number" },
      },
    },
    pattern: {
      control: "text",
      description: "A regular expression that the input's value must match for validation.",
      table: {
        type: { summary: "string" },
      },
    },
    theme: {
      control: { type: "select" },
      options: THEMES,
      description: "The theme variant to use.",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
  render: function Render(args) {
    return <Input {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "A basic input field with email type and placeholder.",
      },
    },
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="picture">Picture</Label>
        <Input {...args} id="picture" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field for file uploads with a label.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    type: "email",
    placeholder: "Email",
    disabled: true,
  },
  render: function Render(args) {
    return <Input {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "When disabled, the input cannot be interacted with and displays reduced opacity.",
      },
    },
  },
};

export const ReadOnly: Story = {
  name: "Read only",
  args: {
    type: "text",
    defaultValue: "This is read-only",
    readOnly: true,
  },
  render: function Render(args) {
    return <Input {...args} />;
  },
  parameters: {
    docs: {
      description: {
        story: "A read-only input that displays a value but cannot be modified by the user.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  args: {
    type: "email",
    placeholder: "Email",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="email">Email</Label>
        <Input {...args} id="email" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with an associated label for better accessibility.",
      },
    },
  },
};

export const WithText: Story = {
  name: "With text",
  args: {
    type: "email",
    placeholder: "Email",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="email-with-text">Email</Label>
        <Input {...args} id="email-with-text" />
        <p className={cn("adm:text-sm adm:text-muted-foreground")}>
          Enter your email address.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with a label and helper text below.",
      },
    },
  },
};

export const WithButton: Story = {
  name: "With button",
  args: {
    type: "email",
    placeholder: "Email",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:flex adm:w-full adm:max-w-sm adm:items-center adm:gap-2")}>
        <Input {...args} />
        <Button type="submit" variant="outline">
          Subscribe
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field combined with a button, useful for forms like newsletter subscriptions.",
      },
    },
  },
};

export const WithError: Story = {
  name: "With error",
  args: {
    type: "email",
    placeholder: "Email",
    "aria-invalid": true,
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="email-error">Email</Label>
        <Input {...args} id="email-error" />
        <p className={cn("adm:text-sm adm:font-medium adm:text-destructive")}>
          Please enter a valid email address.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input in an error state with validation message. Use aria-invalid to indicate the error state.",
      },
    },
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter amount",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="amount">Amount</Label>
        <Input {...args} id="amount" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A number input with increment/decrement controls.",
      },
    },
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="password">Password</Label>
        <Input {...args} id="password" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A password input that obscures the entered text.",
      },
    },
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="search">Search</Label>
        <Input {...args} id="search" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A search input with browser-specific search styling.",
      },
    },
  },
};

export const Tel: Story = {
  args: {
    type: "tel",
    placeholder: "+1 (555) 000-0000",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="phone">Phone</Label>
        <Input {...args} id="phone" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A telephone input optimized for entering phone numbers.",
      },
    },
  },
};

export const URL: Story = {
  args: {
    type: "url",
    placeholder: "https://example.com",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="website">Website</Label>
        <Input {...args} id="website" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A URL input for entering web addresses.",
      },
    },
  },
};

export const Date: Story = {
  args: {
    type: "date",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="date">Date</Label>
        <Input {...args} id="date" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A date input with a date picker interface.",
      },
    },
  },
};

export const Time: Story = {
  args: {
    type: "time",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-3")}>
        <Label htmlFor="time">Time</Label>
        <Input {...args} id="time" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A time input with a time picker interface.",
      },
    },
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className={cn("adm:space-y-4 adm:max-w-sm")}>
        <div className={cn("adm:grid adm:gap-3")}>
          <Label htmlFor="controlled">Email</Label>
          <Input
            type="email"
            id="controlled"
            placeholder="Email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className={cn("adm:text-sm adm:text-muted-foreground")}>
          Value: {value || "(empty)"}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled input where the value is managed externally using the value and onChange props.",
      },
    },
  },
};
