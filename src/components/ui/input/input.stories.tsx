import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";

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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return <Input type="email" placeholder="Email" />;
  },
  parameters: {
    docs: {
      description: {
        story: "The default input field with email type and placeholder.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2")}>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with an associated label for accessibility.",
      },
    },
  },
};

export const WithButton: Story = {
  name: "With button",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:w-full adm:max-w-sm adm:items-center adm:gap-2")}>
        <Input type="email" placeholder="Email" />
        <Button type="submit" variant="outline">
          Subscribe
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An input field combined with a button for form submission.",
      },
    },
  },
};

export const Disabled: Story = {
  render: function Render() {
    return <Input disabled type="email" placeholder="Email" />;
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled input field that cannot be interacted with.",
      },
    },
  },
};

export const FileInput: Story = {
  name: "File input",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2")}>
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A file input for uploading files.",
      },
    },
  },
};

export const Invalid: Story = {
  name: "Invalid",
  render: function Render() {
    return (
      <div>
        <Label htmlFor="invalid" className="adm:mb-2">Invalid input</Label>
        <Input
          id="invalid"
          type="email"
          placeholder="Enter email"
          aria-invalid
          defaultValue="invalid-email"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input fields demonstrating validation states.",
      },
    },
  },
};

export const Sizes: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4 adm:w-full adm:max-w-sm")}>
        <div className="adm:space-y-2">
          <Label>Small (height: 2rem)</Label>
          <Input
            type="text"
            placeholder="Small input"
            className={cn("adm:h-8 adm:text-sm")}
          />
        </div>
        <div className="adm:space-y-2">
          <Label>Default (height: 2.25rem)</Label>
          <Input type="text" placeholder="Default input" />
        </div>
        <div className="adm:space-y-2">
          <Label>Large (height: 2.5rem)</Label>
          <Input
            type="text"
            placeholder="Large input"
            className={cn("adm:h-10")}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input fields in different sizes.",
      },
    },
  },
};
