import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@src/components/ui/collapsible";
import { Button } from "@src/components/ui/button";
import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  InfoIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic collapsible component with simple text content.",
      },
    },
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="adm:flex adm:w-[350px] adm:flex-col adm:gap-2"
      >
        <div className="adm:flex adm:items-center adm:justify-between adm:gap-4">
          <h4 className="adm:text-sm adm:font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="adm:size-8">
              <ChevronsUpDownIcon />
              <span className="adm:sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="adm:rounded-md adm:border adm:px-4 adm:py-2 adm:font-mono adm:text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="adm:flex adm:flex-col adm:gap-2">
          <div className="adm:rounded-md adm:border adm:px-4 adm:py-2 adm:font-mono adm:text-sm">
            @radix-ui/colors
          </div>
          <div className="adm:rounded-md adm:border adm:px-4 adm:py-2 adm:font-mono adm:text-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled collapsible with state management and custom trigger button.",
      },
    },
  },
};

export const WithChevron: Story = {
  name: "With chevron",
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="adm:w-[400px] adm:space-y-2"
      >
        <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:justify-between adm:rounded-lg adm:border adm:p-4 adm:text-left adm:transition-colors hover:adm:bg-muted">
          <span className="adm:font-medium">Project Settings</span>
          <ChevronDownIcon
            className={`adm:h-4 adm:w-4 adm:transition-transform ${
              isOpen ? "adm:rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="adm:space-y-2">
          <div className="adm:rounded-lg adm:border adm:p-4">
            <h4 className="adm:font-medium adm:mb-2">General</h4>
            <p className="adm:text-sm adm:text-muted-foreground">
              Configure general project settings and preferences.
            </p>
          </div>
          <div className="adm:rounded-lg adm:border adm:p-4">
            <h4 className="adm:font-medium adm:mb-2">Security</h4>
            <p className="adm:text-sm adm:text-muted-foreground">
              Manage security settings and access controls.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A collapsible with an animated chevron icon that rotates when expanded.",
      },
    },
  },
};

export const FAQ: Story = {
  name: "FAQ",
  render: function Render() {
    return (
      <div className="adm:w-[500px] adm:space-y-4">
        <h3 className="adm:text-lg adm:font-semibold">Frequently Asked Questions</h3>

        <Collapsible className="adm:space-y-2">
          <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:justify-between adm:rounded-lg adm:border adm:p-4 adm:text-left adm:transition-colors hover:adm:bg-muted">
            <span className="adm:font-medium">What is this component library?</span>
            <ChevronRightIcon className="adm:h-4 adm:w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:px-4 adm:pb-4">
            <p className="adm:text-sm adm:text-muted-foreground">
              This is a collection of reusable UI components built with React and styled with Tailwind CSS.
              It provides a consistent design system for building modern web applications.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="adm:space-y-2">
          <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:justify-between adm:rounded-lg adm:border adm:p-4 adm:text-left adm:transition-colors hover:adm:bg-muted">
            <span className="adm:font-medium">How do I install it?</span>
            <ChevronRightIcon className="adm:h-4 adm:w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:px-4 adm:pb-4">
            <p className="adm:text-sm adm:text-muted-foreground adm:mb-2">
              You can install individual components using the CLI:
            </p>
            <code className="adm:bg-muted adm:px-2 adm:py-1 adm:rounded adm:text-xs">
              npx shadcn@latest add [component-name]
            </code>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="adm:space-y-2">
          <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:justify-between adm:rounded-lg adm:border adm:p-4 adm:text-left adm:transition-colors hover:adm:bg-muted">
            <span className="adm:font-medium">Is it free to use?</span>
            <ChevronRightIcon className="adm:h-4 adm:w-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:px-4 adm:pb-4">
            <p className="adm:text-sm adm:text-muted-foreground">
              Yes! This component library is completely free to use for both personal and commercial projects.
              No attribution is required.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple collapsible components used to create an FAQ section.",
      },
    },
  },
};

export const Navigation: Story = {
  name: "Navigation",
  render: function Render() {
    const [openSections, setOpenSections] = useState<string[]>(["general"]);

    const toggleSection = (section: string) => {
      setOpenSections((prev) =>
        prev.includes(section)
          ? prev.filter((s) => s !== section)
          : [...prev, section],
      );
    };

    return (
      <div className="adm:w-[300px] adm:space-y-2">
        <h3 className="adm:text-lg adm:font-semibold adm:mb-4">Navigation Menu</h3>

        <Collapsible
          open={openSections.includes("general")}
          onOpenChange={() => toggleSection("general")}
        >
          <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:gap-2 adm:rounded-lg adm:p-3 adm:text-left adm:transition-colors hover:adm:bg-muted">
            <SettingsIcon className="adm:h-4 adm:w-4" />
            <span className="adm:font-medium adm:flex-1">General</span>
            <ChevronDownIcon
              className={`adm:h-4 adm:w-4 adm:transition-transform ${
                openSections.includes("general") ? "adm:rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:ml-6 adm:space-y-1">
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Profile
            </a>
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Preferences
            </a>
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Notifications
            </a>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={openSections.includes("account")}
          onOpenChange={() => toggleSection("account")}
        >
          <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:gap-2 adm:rounded-lg adm:p-3 adm:text-left adm:transition-colors hover:adm:bg-muted">
            <UserIcon className="adm:h-4 adm:w-4" />
            <span className="adm:font-medium adm:flex-1">Account</span>
            <ChevronDownIcon
              className={`adm:h-4 adm:w-4 adm:transition-transform ${
                openSections.includes("account") ? "adm:rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:ml-6 adm:space-y-1">
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Billing
            </a>
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Security
            </a>
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              API Keys
            </a>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={openSections.includes("help")}
          onOpenChange={() => toggleSection("help")}
        >
          <CollapsibleTrigger className="adm:flex adm:w-full adm:items-center adm:gap-2 adm:rounded-lg adm:p-3 adm:text-left adm:transition-colors hover:adm:bg-muted">
            <InfoIcon className="adm:h-4 adm:w-4" />
            <span className="adm:font-medium adm:flex-1">Help & Support</span>
            <ChevronDownIcon
              className={`adm:h-4 adm:w-4 adm:transition-transform ${
                openSections.includes("help") ? "adm:rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:ml-6 adm:space-y-1">
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Documentation
            </a>
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Contact Support
            </a>
            <a href="#" className="adm:block adm:rounded adm:px-3 adm:py-2 adm:text-sm adm:transition-colors hover:adm:bg-muted">
              Report Bug
            </a>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A navigation menu using collapsible components with multiple expandable sections.",
      },
    },
  },
};

export const SimpleList: Story = {
  name: "Simple list",
  render: function Render() {
    return (
      <div className="adm:w-[350px] adm:space-y-2">
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="adm:w-full adm:rounded-lg adm:border adm:p-3 adm:text-left adm:font-medium adm:transition-colors hover:adm:bg-muted">
            Recent Files
          </CollapsibleTrigger>
          <CollapsibleContent className="adm:mt-2 adm:space-y-1">
            <div className="adm:rounded adm:border adm:p-3 adm:text-sm">document.pdf</div>
            <div className="adm:rounded adm:border adm:p-3 adm:text-sm">presentation.pptx</div>
            <div className="adm:rounded adm:border adm:p-3 adm:text-sm">spreadsheet.xlsx</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A simple collapsible list that is expanded by default.",
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:w-[350px] adm:space-y-4">
        <Collapsible disabled>
          <CollapsibleTrigger className="adm:w-full adm:rounded-lg adm:border adm:p-3 adm:text-left adm:font-medium adm:opacity-50 adm:cursor-not-allowed">
            Disabled Section (Coming Soon)
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="adm:mt-2 adm:rounded adm:border adm:p-3 adm:text-sm adm:text-muted-foreground">
              This content is not available yet.
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="adm:w-full adm:rounded-lg adm:border adm:p-3 adm:text-left adm:font-medium adm:transition-colors hover:adm:bg-muted">
            Available Section
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="adm:mt-2 adm:rounded adm:border adm:p-3 adm:text-sm">
              This content is available and working properly.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled collapsible compared to a normal one showing the difference in interaction.",
      },
    },
  },
};
