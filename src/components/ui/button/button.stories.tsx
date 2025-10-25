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
  ChevronDownIcon,
  ExternalLinkIcon,
  Loader2Icon,
} from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return <Button>Button</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "The default button variant with primary styling.",
      },
    },
  },
};

export const Secondary: Story = {
  name: "Secondary",
  render: function Render() {
    return <Button variant="secondary">Secondary</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with secondary styling for less emphasis.",
      },
    },
  },
};

export const Destructive: Story = {
  name: "Destructive",
  render: function Render() {
    return <Button variant="destructive">Destructive</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button with destructive styling for dangerous actions.",
      },
    },
  },
};

export const Outline: Story = {
  name: "Outline",
  render: function Render() {
    return <Button variant="outline">Outline</Button>;
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
  render: function Render() {
    return <Button variant="ghost">Ghost</Button>;
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
  render: function Render() {
    return <Button variant="link">Link</Button>;
  },
  parameters: {
    docs: {
      description: {
        story: "A button styled to look like a text link.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button variant="default">
          <PlusIcon />
          Add Item
        </Button>
        <Button variant="outline">
          <MailIcon />
          Send Email
        </Button>
        <Button variant="secondary">
          <DownloadIcon />
          Download
        </Button>
        <Button variant="destructive">
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
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:items-center">
        <Button variant="outline" size="icon-sm" aria-label="Edit">
          <EditIcon />
        </Button>
        <Button variant="outline" size="icon" aria-label="Settings">
          <SettingsIcon />
        </Button>
        <Button variant="outline" size="icon-lg" aria-label="Search">
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

export const ButtonGroup: Story = {
  name: "Button group",
  render: function Render() {
    const [selected, setSelected] = useState("center");

    return (
      <div className="adm:space-y-4">
        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Joined Buttons</h4>
          <div className="adm:flex">
            <Button
              variant="outline"
              className="adm:rounded-r-none adm:border-r-0"
            >
              <EditIcon />
              Edit
            </Button>
            <Button
              variant="outline"
              className="adm:rounded-none adm:border-r-0"
            >
              <CopyIcon />
              Copy
            </Button>
            <Button
              variant="outline"
              className="adm:rounded-l-none"
            >
              <ShareIcon />
              Share
            </Button>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Toggle Group</h4>
          <div className="adm:flex">
            {["left", "center", "right"].map((alignment) => (
              <Button
                key={alignment}
                variant={selected === alignment ? "default" : "outline"}
                className={`
                  ${alignment === "left" ? "adm:rounded-r-none adm:border-r-0" : ""}
                  ${alignment === "center" ? "adm:rounded-none adm:border-r-0" : ""}
                  ${alignment === "right" ? "adm:rounded-l-none" : ""}
                `}
                onClick={() => setSelected(alignment)}
              >
                {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button groups showing joined buttons and toggle functionality.",
      },
    },
  },
};

export const DropdownButton: Story = {
  name: "Dropdown button",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button variant="outline">
          More Actions
          <ChevronDownIcon />
        </Button>
        <Button>
          Create
          <ChevronDownIcon />
        </Button>
        <div className="adm:flex">
          <Button className="adm:rounded-r-none adm:border-r-0">
            Deploy
          </Button>
          <Button
            className="adm:rounded-r-none adm:border-r-0"
          >
            Deploy
          </Button>
          <Button
            variant="default"
            size="icon"
            className="adm:rounded-l-none adm:border-l-0"
          >
            <ChevronDownIcon />
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons designed to work with dropdown menus, including split button patterns.",
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
