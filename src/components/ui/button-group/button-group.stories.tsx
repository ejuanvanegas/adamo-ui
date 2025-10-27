import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "@src/components/ui/button-group";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@src/components/ui/select";
import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CopyIcon,
  ShareIcon,
  EditIcon,
  TrashIcon,
  SearchIcon,
  DownloadIcon,
  UploadIcon,
  PlayIcon,
  PauseIcon,
  SquareIcon,
  SkipBackIcon,
  SkipForwardIcon,
  Volume2Icon,
  VolumeXIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  RefreshCwIcon,
  SaveIcon,
  UndoIcon,
  RedoIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
        <Button variant="outline">Snooze</Button>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic button group with outline buttons grouped together horizontally.",
      },
    },
  },
};

export const WithSeparator: Story = {
  name: "With separator",
  render: function Render() {
    return (
      <ButtonGroup>
        <Button variant="secondary" size="sm">
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button variant="secondary" size="sm">
          Paste
        </Button>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button group with a separator between buttons. Useful for non-outline variants to improve visual hierarchy.",
      },
    },
  },
};

export const VerticalOrientation: Story = {
  name: "Vertical orientation",
  render: function Render() {
    return (
      <ButtonGroup orientation="vertical" aria-label="Media controls" className="adm:h-fit">
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button group with vertical orientation, stacking buttons on top of each other.",
      },
    },
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: function Render() {
    return (
      <div className="adm:flex adm:flex-col adm:items-start adm:gap-8">
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline" size="sm">
            Group
          </Button>
          <Button variant="outline" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Group</Button>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
          <Button variant="outline" size="lg">
            Group
          </Button>
          <Button variant="outline" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button groups in different sizes: small, default, and large with corresponding icon sizes.",
      },
    },
  },
};

export const NestedGroups: Story = {
  name: "Nested groups",
  render: function Render() {
    return (
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Nested button groups with spacing between groups, useful for creating complex layouts with logical groupings.",
      },
    },
  },
};

export const SplitButton: Story = {
  name: "Split button",
  render: function Render() {
    return (
      <ButtonGroup>
        <Button variant="secondary">Deploy</Button>
        <ButtonGroupSeparator />
        <Button size="icon" variant="secondary">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Split button pattern with a main action button and a dropdown trigger separated by a separator.",
      },
    },
  },
};

export const WithInput: Story = {
  name: "With input",
  render: function Render() {
    return (
      <ButtonGroup>
        <Input placeholder="Search..." />
        <Button variant="outline" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button group combining an input field with action buttons, commonly used for search interfaces.",
      },
    },
  },
};

export const WithSelect: Story = {
  name: "With select",
  render: function Render() {
    const [currency, setCurrency] = useState("$");
    const currencies = [
      { value: "$", label: "US Dollar" },
      { value: "€", label: "Euro" },
      { value: "£", label: "British Pound" },
    ];

    return (
      <ButtonGroup>
        <ButtonGroup>
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="adm:font-mono">{currency}</SelectTrigger>
            <SelectContent className="adm:min-w-24">
              {currencies.map((curr) => (
                <SelectItem key={curr.value} value={curr.value}>
                  {curr.value} <span className="adm:text-muted-foreground">{curr.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input placeholder="10.00" pattern="[0-9]*" />
        </ButtonGroup>
        <ButtonGroup>
          <Button aria-label="Send" size="icon" variant="outline">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button group with a select component for currency selection and amount input.",
      },
    },
  },
};

export const MediaControls: Story = {
  name: "Media controls",
  render: function Render() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
      <div className="adm:space-y-4">
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <SkipBackIcon />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </Button>
          <Button variant="outline" size="icon">
            <SquareIcon />
          </Button>
          <Button variant="outline" size="icon">
            <SkipForwardIcon />
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline" size="icon">
            <VolumeXIcon />
          </Button>
          <ButtonGroupText className="adm:px-4">Volume</ButtonGroupText>
          <Button variant="outline" size="icon">
            <Volume2Icon />
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Media control button groups with play/pause toggle and volume controls including text labels.",
      },
    },
  },
};

export const TextFormatting: Story = {
  name: "Text formatting",
  render: function Render() {
    const [formatting, setFormatting] = useState({
      bold: false,
      italic: false,
      underline: false,
    });
    const [alignment, setAlignment] = useState("left");

    return (
      <div className="adm:space-y-4">
        <ButtonGroup>
          <Button
            variant={formatting.bold ? "default" : "outline"}
            size="icon"
            onClick={() => setFormatting((prev) => ({ ...prev, bold: !prev.bold }))}
          >
            <BoldIcon />
          </Button>
          <Button
            variant={formatting.italic ? "default" : "outline"}
            size="icon"
            onClick={() => setFormatting((prev) => ({ ...prev, italic: !prev.italic }))}
          >
            <ItalicIcon />
          </Button>
          <Button
            variant={formatting.underline ? "default" : "outline"}
            size="icon"
            onClick={() => setFormatting((prev) => ({ ...prev, underline: !prev.underline }))}
          >
            <UnderlineIcon />
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button
            variant={alignment === "left" ? "default" : "outline"}
            size="icon"
            onClick={() => setAlignment("left")}
          >
            <AlignLeftIcon />
          </Button>
          <Button
            variant={alignment === "center" ? "default" : "outline"}
            size="icon"
            onClick={() => setAlignment("center")}
          >
            <AlignCenterIcon />
          </Button>
          <Button
            variant={alignment === "right" ? "default" : "outline"}
            size="icon"
            onClick={() => setAlignment("right")}
          >
            <AlignRightIcon />
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Text formatting controls with toggle states for bold, italic, underline, and text alignment options.",
      },
    },
  },
};

export const FileActions: Story = {
  name: "File actions",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <ButtonGroup>
          <Button variant="outline">
            <SaveIcon />
            Save
          </Button>
          <Button variant="outline">
            <DownloadIcon />
            Download
          </Button>
          <Button variant="outline">
            <UploadIcon />
            Upload
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline" size="icon">
            <UndoIcon />
          </Button>
          <Button variant="outline" size="icon">
            <RedoIcon />
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline" size="icon">
            <CopyIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ShareIcon />
          </Button>
          <ButtonGroupSeparator />
          <Button variant="outline" size="icon">
            <TrashIcon />
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "File action button groups with various actions like save, download, undo/redo, and document management.",
      },
    },
  },
};

export const Toolbar: Story = {
  name: "Toolbar",
  render: function Render() {
    return (
      <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <ArrowLeftIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Archive</Button>
          <Button variant="outline">Report</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Snooze</Button>
          <Button variant="outline" size="icon">
            <MoreHorizontalIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <SettingsIcon />
          </Button>
          <Button variant="outline" size="icon">
            <RefreshCwIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Complex toolbar layout with multiple nested button groups representing different functional areas.",
      },
    },
  },
};

export const WithText: Story = {
  name: "With text",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <ButtonGroup>
          <ButtonGroupText>Actions:</ButtonGroupText>
          <Button variant="outline">Edit</Button>
          <Button variant="outline">Delete</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button variant="outline">
            <EditIcon />
            Edit
          </Button>
          <ButtonGroupText>or</ButtonGroupText>
          <Button variant="outline">
            <CopyIcon />
            Copy
          </Button>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Button groups with text labels to provide context and improve clarity of action groups.",
      },
    },
  },
};

export const AllOrientations: Story = {
  name: "All orientations",
  render: function Render() {
    return (
      <div className="adm:space-y-8">
        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Horizontal (default)</h4>
          <ButtonGroup>
            <Button variant="outline">First</Button>
            <Button variant="outline">Second</Button>
            <Button variant="outline">Third</Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Vertical</h4>
          <ButtonGroup orientation="vertical" className="adm:h-fit">
            <Button variant="outline">First</Button>
            <Button variant="outline">Second</Button>
            <Button variant="outline">Third</Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">With Separators</h4>
          <ButtonGroup>
            <Button variant="secondary">Copy</Button>
            <ButtonGroupSeparator />
            <Button variant="secondary">Paste</Button>
            <ButtonGroupSeparator />
            <Button variant="secondary">Cut</Button>
          </ButtonGroup>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Mixed Content</h4>
          <ButtonGroup>
            <ButtonGroupText>Filter:</ButtonGroupText>
            <Button variant="outline">All</Button>
            <Button variant="outline">Active</Button>
            <Button variant="outline">Archived</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Comprehensive overview of all button group orientations, separators, and mixed content patterns.",
      },
    },
  },
};
