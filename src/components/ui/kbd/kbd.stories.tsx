import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd, KbdGroup } from "@src/components/ui/kbd";
import { Button } from "@src/components/ui/button";
import { ButtonGroup } from "@src/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@src/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@src/components/ui/tooltip/tooltip";
import { cn } from "@src/lib/utils";
import { Search, Save, Printer, Copy, Settings } from "lucide-react";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Used to display textual user input from keyboard.",
      },
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-4")}>
        <Kbd>Ctrl</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Basic keyboard keys displayed individually.",
      },
    },
  },
};

export const WithModifiers: Story = {
  name: "With modifiers",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-col adm:items-center adm:gap-4")}>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⌃</Kbd>
        </KbdGroup>

        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>B</Kbd>
        </KbdGroup>

        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>Shift</Kbd>
          <span>+</span>
          <Kbd>P</Kbd>
        </KbdGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts with modifier keys grouped together.",
      },
    },
  },
};

export const WithGroup: Story = {
  name: "With group",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-col adm:items-center adm:gap-4")}>
        <p className={cn("adm:text-muted-foreground adm:text-sm")}>
          Use{" "}
          <KbdGroup>
            <Kbd>Ctrl + B</Kbd>
            <Kbd>Ctrl + K</Kbd>
          </KbdGroup>{" "}
          to open the command palette
        </p>

        <p className={cn("adm:text-muted-foreground adm:text-sm")}>
          Press{" "}
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>{" "}
          to search
        </p>

        <p className={cn("adm:text-muted-foreground adm:text-sm")}>
          Use{" "}
          <KbdGroup>
            <Kbd>Shift</Kbd>
            <Kbd>Tab</Kbd>
          </KbdGroup>{" "}
          to navigate backwards
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts grouped together with descriptive text.",
      },
    },
  },
};

export const WithButton: Story = {
  name: "With button",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-wrap adm:items-center adm:gap-4")}>
        <Button variant="outline" size="sm" className={cn("adm:pr-2")}>
          Accept <Kbd>⏎</Kbd>
        </Button>

        <Button variant="outline" size="sm" className={cn("adm:pr-2")}>
          Cancel <Kbd>Esc</Kbd>
        </Button>

        <Button variant="outline" size="sm" className={cn("adm:pr-2")}>
          Save <Kbd>⌘</Kbd><Kbd>S</Kbd>
        </Button>

        <Button variant="outline" size="sm" className={cn("adm:pr-2")}>
          Copy <Kbd>Ctrl</Kbd><Kbd>C</Kbd>
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts displayed inside buttons for quick actions.",
      },
    },
  },
};

export const WithTooltip: Story = {
  name: "With tooltip",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-wrap adm:gap-4")}>
        <ButtonGroup>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Save
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className={cn("adm:flex adm:items-center adm:gap-2")}>
                Save Changes <Kbd>S</Kbd>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Print
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className={cn("adm:flex adm:items-center adm:gap-2")}>
                Print Document{" "}
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <Kbd>P</Kbd>
                </KbdGroup>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Copy
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <div className={cn("adm:flex adm:items-center adm:gap-2")}>
                Copy Selection{" "}
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>C</Kbd>
                </KbdGroup>
              </div>
            </TooltipContent>
          </Tooltip>
        </ButtonGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts displayed in tooltips for additional context.",
      },
    },
  },
};

export const WithInputGroup: Story = {
  name: "With input group",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:w-full adm:max-w-xs adm:flex-col adm:gap-6")}>
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Quick actions..." />
          <InputGroupAddon align="inline-end">
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>Space</Kbd>
            </KbdGroup>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Open file..." />
          <InputGroupAddon align="inline-end">
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>O</Kbd>
            </KbdGroup>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts displayed in input groups for search and commands.",
      },
    },
  },
};

export const NavigationKeys: Story = {
  name: "Navigation keys",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:grid-cols-2 adm:gap-4 adm:max-w-md")}>
        <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
          <h4 className={cn("adm:text-sm adm:font-medium")}>Arrow Keys</h4>
          <div className={cn("adm:flex adm:gap-2")}>
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <Kbd>←</Kbd>
            <Kbd>→</Kbd>
          </div>
        </div>

        <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
          <h4 className={cn("adm:text-sm adm:font-medium")}>Function Keys</h4>
          <div className={cn("adm:flex adm:gap-2")}>
            <Kbd>F1</Kbd>
            <Kbd>F2</Kbd>
            <Kbd>F12</Kbd>
          </div>
        </div>

        <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
          <h4 className={cn("adm:text-sm adm:font-medium")}>Special Keys</h4>
          <div className={cn("adm:flex adm:gap-2")}>
            <Kbd>Tab</Kbd>
            <Kbd>Space</Kbd>
            <Kbd>Enter</Kbd>
          </div>
        </div>

        <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
          <h4 className={cn("adm:text-sm adm:font-medium")}>Numbers</h4>
          <div className={cn("adm:flex adm:gap-2")}>
            <Kbd>1</Kbd>
            <Kbd>2</Kbd>
            <Kbd>0</Kbd>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Various navigation and special keyboard keys organized by category.",
      },
    },
  },
};

export const ComplexShortcuts: Story = {
  name: "Complex shortcuts",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-col adm:gap-4")}>
        <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
          <h4 className={cn("adm:text-sm adm:font-medium")}>Editor Shortcuts</h4>
          <div className={cn("adm:flex adm:flex-col adm:gap-2 adm:text-sm")}>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <span>Duplicate line</span>
              <KbdGroup>
                <Kbd>Shift</Kbd>
                <Kbd>Alt</Kbd>
                <Kbd>↓</Kbd>
              </KbdGroup>
            </div>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <span>Multi-cursor</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Alt</Kbd>
                <Kbd>↓</Kbd>
              </KbdGroup>
            </div>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <span>Go to definition</span>
              <KbdGroup>
                <Kbd>F12</Kbd>
              </KbdGroup>
            </div>
          </div>
        </div>

        <div className={cn("adm:flex adm:flex-col adm:gap-2")}>
          <h4 className={cn("adm:text-sm adm:font-medium")}>Browser Shortcuts</h4>
          <div className={cn("adm:flex adm:flex-col adm:gap-2 adm:text-sm")}>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <span>New tab</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>T</Kbd>
              </KbdGroup>
            </div>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <span>Developer tools</span>
              <KbdGroup>
                <Kbd>F12</Kbd>
              </KbdGroup>
            </div>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <span>Hard refresh</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Shift</Kbd>
                <Kbd>R</Kbd>
              </KbdGroup>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Complex keyboard shortcuts organized by context with descriptions.",
      },
    },
  },
};

export const WithIcons: Story = {
  name: "With icons",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-col adm:gap-4")}>
        <div className={cn("adm:flex adm:items-center adm:gap-4")}>
          <Kbd><Save className={cn("adm:size-3")} /></Kbd>
          <Kbd><Copy className={cn("adm:size-3")} /></Kbd>
          <Kbd><Settings className={cn("adm:size-3")} /></Kbd>
          <Kbd><Printer className={cn("adm:size-3")} /></Kbd>
        </div>

        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <span className={cn("adm:text-sm")}>Quick actions:</span>
          <KbdGroup>
            <Kbd><Save className={cn("adm:size-3")} /></Kbd>
            <Kbd>S</Kbd>
          </KbdGroup>
          <KbdGroup>
            <Kbd><Copy className={cn("adm:size-3")} /></Kbd>
            <Kbd>C</Kbd>
          </KbdGroup>
        </div>

        <p className={cn("adm:text-sm adm:text-muted-foreground")}>
          Press <Kbd><Search className={cn("adm:size-3")} /></Kbd> or{" "}
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <Kbd>F</Kbd>
          </KbdGroup>{" "}
          to search
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts with icons for visual recognition.",
      },
    },
  },
};

export const InContext: Story = {
  name: "In context",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:flex-col adm:gap-6 adm:max-w-md")}>
        <div className={cn("adm:rounded-lg adm:border adm:p-4")}>
          <h3 className={cn("adm:text-lg adm:font-semibold adm:mb-2")}>Command Palette</h3>
          <p className={cn("adm:text-sm adm:text-muted-foreground adm:mb-4")}>
            Quickly access commands and navigate your workspace.
          </p>
          <div className={cn("adm:flex adm:items-center adm:gap-2 adm:text-sm")}>
            <span>Open with</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
            <span>or</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
        </div>

        <div className={cn("adm:rounded-lg adm:border adm:p-4")}>
          <h3 className={cn("adm:text-lg adm:font-semibold adm:mb-2")}>Quick File Search</h3>
          <p className={cn("adm:text-sm adm:text-muted-foreground adm:mb-4")}>
            Find and open files in your project instantly.
          </p>
          <div className={cn("adm:flex adm:items-center adm:gap-2 adm:text-sm")}>
            <span>Open with</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
            <span>or</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>P</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard shortcuts displayed within contextual help and feature descriptions.",
      },
    },
  },
};
