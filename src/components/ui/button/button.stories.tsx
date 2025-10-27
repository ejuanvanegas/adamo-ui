import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@src/components/ui/button";
import { useState } from "react";
import {
  ArrowUpIcon,
  DownloadIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  TrashIcon,
  EditIcon,
  SaveIcon,
  CopyIcon,
  ShareIcon,
  HeartIcon,
  StarIcon,
  PlayIcon,
  PauseIcon,
  ExternalLinkIcon,
  Loader2Icon,
} from "lucide-react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a button or a component that looks like a button.",
      },
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
        story: "The default button variant with primary styling.",
      },
    },
  },
};

export const Success: Story = {
  name: "Success",
  args: { variant: "success" },
  render: function Render(args) {
    return <Button {...args}>Success</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with success styling for positive actions.",
      },
    },
  },
};

export const SuccessMedium: Story = {
  name: "Success medium",
  args: { variant: "success-medium" },
  render: function Render(args) {
    return <Button {...args}>Success Medium</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the success button with subtle success styling.",
      },
    },
  },
};

export const Warning: Story = {
  name: "Warning",
  args: { variant: "warning" },
  render: function Render(args) {
    return <Button {...args}>Warning</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with warning styling for cautionary actions.",
      },
    },
  },
};

export const WarningMedium: Story = {
  name: "Warning medium",
  args: { variant: "warning-medium" },
  render: function Render(args) {
    return <Button {...args}>Warning Medium</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the warning button with subtle warning styling.",
      },
    },
  },
};

export const Destructive: Story = {
  name: "Destructive",
  args: { variant: "destructive" },
  render: function Render(args) {
    return <Button {...args}>Destructive</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with destructive styling for dangerous actions.",
      },
    },
  },
};

export const DestructiveMedium: Story = {
  name: "Destructive medium",
  args: { variant: "destructive-medium" },
  render: function Render(args) {
    return <Button {...args}>Destructive Medium</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the destructive button with subtle error styling.",
      },
    },
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: { variant: "secondary" },
  render: function Render(args) {
    return <Button {...args}>Secondary</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with secondary styling for less emphasis.",
      },
    },
  },
};

export const Outline: Story = {
  name: "Outline",
  args: { variant: "outline" },
  render: function Render(args) {
    return <Button {...args}>Outline</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with outline styling for secondary actions.",
      },
    },
  },
};

export const Ghost: Story = {
  name: "Ghost",
  args: { variant: "ghost" },
  render: function Render(args) {
    return <Button {...args}>Ghost</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with minimal styling that appears on hover.",
      },
    },
  },
};

export const Link: Story = {
  name: "Link",
  args: { variant: "link" },
  render: function Render(args) {
    return <Button {...args}>Link</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button that looks like a link with underline styling.",
      },
    },
  },
};

export const VariantsOverview: Story = {
  name: "Variants overview",
  render: function Render(args) {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button {...args}>Default</Button>
        <Button {...args} variant="success">Success</Button>
        <Button {...args} variant="success-medium">Success Medium</Button>
        <Button {...args} variant="warning">Warning</Button>
        <Button {...args} variant="warning-medium">Warning Medium</Button>
        <Button {...args} variant="destructive">Destructive</Button>
        <Button {...args} variant="destructive-medium">Destructive Medium</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="ghost">Ghost</Button>
        <Button {...args} variant="link">Link</Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "All button variants showcasing the complete range of styling options.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render(args) {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button {...args} variant="default">
          <PlusIcon />
          Add Item
        </Button>
        <Button {...args} variant="success">
          <SaveIcon />
          Save
        </Button>
        <Button {...args} variant="warning">
          <ExternalLinkIcon />
          Warning
        </Button>
        <Button {...args} variant="outline">
          <MailIcon />
          Send Email
        </Button>
        <Button {...args} variant="secondary">
          <DownloadIcon />
          Download
        </Button>
        <Button {...args} variant="destructive">
          <TrashIcon />
          Delete
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons to provide additional visual context.",
      },
    },
  },
};

export const IconOnly: Story = {
  name: "Icon only",
  render: function Render(args) {
    return (
      <div className="adm:flex adm:gap-2 adm:items-center">
        <Button {...args} variant="outline" size="icon-sm" aria-label="Edit">
          <EditIcon />
        </Button>
        <Button {...args} variant="outline" size="icon" aria-label="Settings">
          <SettingsIcon />
        </Button>
        <Button {...args} variant="outline" size="icon-lg" aria-label="Search">
          <SearchIcon />
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons in different sizes with proper aria-labels for accessibility.",
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-4 adm:items-center adm:flex-wrap">
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline" size="default">
          Default
        </Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons in different sizes: small, default, and large.",
      },
    },
  },
};

export const Loading: Story = {
  name: "Loading",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button disabled>
          <Loader2Icon className="adm:animate-spin" />
          Loading...
        </Button>
        <Button variant="outline" disabled>
          <Loader2Icon className="adm:animate-spin" />
          Please wait
        </Button>
        <Button variant="secondary" disabled>
          <Loader2Icon className="adm:animate-spin" />
          Processing
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Loading buttons with spinner icons and disabled state.",
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
        <Button variant="destructive" disabled>
          Disabled Destructive
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled buttons showing the reduced opacity and non-interactive state.",
      },
    },
  },
};

export const AsChild: Story = {
  name: "As child",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon />
            External Link
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#download" download>
            <DownloadIcon />
            Download File
          </a>
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Using the asChild prop to render buttons as other elements like links.",
      },
    },
  },
};

export const Rounded: Story = {
  name: "Rounded",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:items-center">
        <Button variant="outline" size="icon" className="adm:rounded-full">
          <ArrowUpIcon />
        </Button>
        <Button variant="default" className="adm:rounded-full">
          <PlusIcon />
          Add New
        </Button>
        <Button variant="secondary" className="adm:rounded-full">
          <HeartIcon />
          Like
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons with rounded-full styling for a circular appearance.",
      },
    },
  },
};

export const Interactive: Story = {
  name: "Interactive",
  render: function Render() {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [playing, setPlaying] = useState(false);

    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button
          variant={liked ? "default" : "outline"}
          onClick={() => setLiked(!liked)}
        >
          <HeartIcon className={liked ? "adm:fill-current" : ""} />
          {liked ? "Liked" : "Like"}
        </Button>
        <Button
          variant={saved ? "secondary" : "outline"}
          onClick={() => setSaved(!saved)}
        >
          <StarIcon className={saved ? "adm:fill-current" : ""} />
          {saved ? "Saved" : "Save"}
        </Button>
        <Button
          variant="outline"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
          {playing ? "Pause" : "Play"}
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive buttons that change state when clicked, demonstrating toggle functionality.",
      },
    },
  },
};

export const ActionButtons: Story = {
  name: "Action buttons",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Primary Actions</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Button>
              <SaveIcon />
              Save Changes
            </Button>
            <Button>
              <PlusIcon />
              Create New
            </Button>
            <Button>
              <DownloadIcon />
              Export Data
            </Button>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Secondary Actions</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Button variant="outline">
              <EditIcon />
              Edit
            </Button>
            <Button variant="outline">
              <CopyIcon />
              Copy
            </Button>
            <Button variant="outline">
              <ShareIcon />
              Share
            </Button>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Dangerous Actions</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Button variant="destructive">
              <TrashIcon />
              Delete Item
            </Button>
            <Button variant="destructive">
              Reset All Data
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Common action buttons organized by importance and danger level.",
      },
    },
  },
};

export const AllVariants: Story = {
  name: "All variants",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Variants</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Sizes</h4>
          <div className="adm:flex adm:gap-2 adm:items-center adm:flex-wrap">
            <Button variant="outline" size="sm">Small</Button>
            <Button variant="outline" size="default">Default</Button>
            <Button variant="outline" size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Icon Sizes</h4>
          <div className="adm:flex adm:gap-2 adm:items-center">
            <Button variant="outline" size="icon-sm" aria-label="Small icon">
              <SettingsIcon />
            </Button>
            <Button variant="outline" size="icon" aria-label="Default icon">
              <SettingsIcon />
            </Button>
            <Button variant="outline" size="icon-lg" aria-label="Large icon">
              <SettingsIcon />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">States</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button disabled>
              <Loader2Icon className="adm:animate-spin" />
              Loading
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comprehensive overview of all button variants, sizes, and states.",
      },
    },
  },
};
