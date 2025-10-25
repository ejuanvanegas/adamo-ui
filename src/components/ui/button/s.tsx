import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@src/components/ui/button";
import { cn } from "@src/lib/utils";
import { ArrowUpRightIcon, CircleFadingArrowUpIcon, ArrowUpIcon } from "lucide-react";
import { THEMES } from "@src/types/theme.type";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays a button or a component that looks like a button.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "success",
        "success-medium",
        "warning",
        "warning-medium",
        "destructive",
        "destructive-medium",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the button.",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "icon", "icon-sm", "icon-lg"],
      description: "The size of the button.",
      table: { defaultValue: { summary: "lg" } },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the button.",
      table: { defaultValue: { summary: "false" } },
    },
    asChild: {
      control: "boolean",
      description: "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: { defaultValue: { summary: "false" } },
    },
    theme: {
      control: { type: "select" },
      options: THEMES,
      description: "The theme variant to use.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return <Button {...args}>Button</Button>;
  },

  parameters: {
    docs: {
      description: {
        story: "The default button with primary variant.",
      },
    },
  },
};

export const Sizes: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-col adm:items-start adm:gap-8 sm:adm:flex-row")}>
        <div className={cn("adm:flex adm:items-start adm:gap-2")}>
          <Button size="sm" variant="outline">
            Small
          </Button>
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className={cn("adm:flex adm:items-start adm:gap-2")}>
          <Button variant="outline">Default</Button>
          <Button size="icon" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className={cn("adm:flex adm:items-start adm:gap-2")}>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button size="icon-lg" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Different button sizes: small, default (medium), and large. Also shows icon-only buttons for each size.",
      },
    },
  },
};

export const Outline: Story = {
  render: function Render() {
    return <Button variant="outline">Outline</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with an outlined style.",
      },
    },
  },
};

export const Secondary: Story = {
  render: function Render() {
    return <Button variant="secondary">Secondary</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with a secondary style.",
      },
    },
  },
};

export const Ghost: Story = {
  render: function Render() {
    return <Button variant="ghost">Ghost</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with a ghost style that has minimal visual weight.",
      },
    },
  },
};

export const Destructive: Story = {
  render: function Render() {
    return <Button variant="destructive">Destructive</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button for destructive actions with high visual prominence.",
      },
    },
  },
};

export const Destructivemedium: Story = {
  render: function Render() {
    return <Button variant="destructive-medium">Destructive medium</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button for destructive actions with medium visual prominence.",
      },
    },
  },
};

export const Success: Story = {
  render: function Render() {
    return <Button variant="success">Success</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button for success actions with high visual prominence.",
      },
    },
  },
};

export const Successmedium: Story = {
  render: function Render() {
    return <Button variant="success-medium">Success medium</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button for success actions with medium visual prominence.",
      },
    },
  },
};

export const Warning: Story = {
  render: function Render() {
    return <Button variant="warning">Warning</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button for warning actions with high visual prominence.",
      },
    },
  },
};

export const Warningmedium: Story = {
  render: function Render() {
    return <Button variant="warning-medium">Warning medium</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button for warning actions with medium visual prominence.",
      },
    },
  },
};

export const Link: Story = {
  render: function Render() {
    return <Button variant="link">Link</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button styled like a link.",
      },
    },
  },
};

export const Icon: Story = {
  render: function Render() {
    return (
      <Button variant="outline" size="icon">
        <CircleFadingArrowUpIcon />
      </Button>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An icon-only button without text.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render() {
    return (
      <Button variant="outline" size="sm">
        <ArrowUpRightIcon /> New Branch
      </Button>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A button with an icon and text.",
      },
    },
  },
};

export const Rounded: Story = {
  render: function Render() {
    return (
      <Button variant="outline" size="icon" className={cn("adm:rounded-full")}>
        <ArrowUpIcon />
      </Button>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An icon button with a fully rounded shape.",
      },
    },
  },
};

export const Disabled: Story = {
  render: function Render() {
    return <Button disabled>Disabled</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button in disabled state that cannot be interacted with.",
      },
    },
  },
};
