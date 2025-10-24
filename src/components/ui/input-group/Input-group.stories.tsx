import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@src/components/ui/input-group";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";
import { Search, Mail, CreditCard, Info, Star, DollarSign, Send, Copy, Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@src/components/ui/tooltip";

const meta = {
  title: "Components/Input Group",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Display additional information or actions to an input or textarea. Built with composable components for maximum flexibility.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the input group.",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <InputGroup {...args}>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic input group with a simple input field.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCard />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Check />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Rating" />
          <InputGroupAddon align="inline-end">
            <Star />
            <Info />
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with icons positioned at the start or end. Multiple icons can be combined in a single addon.",
      },
    },
  },
};

export const WithText: Story = {
  name: "With text",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Enter your username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Display additional text information alongside inputs, such as currency symbols, domains, or email suffixes.",
      },
    },
  },
};

export const WithButton: Story = {
  name: "With button",
  render: function Render(args) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              onClick={handleCopy}
            >
              {copied ? <Check /> : <Copy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Type to search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon>
            <DollarSign />
          </InputGroupAddon>
          <InputGroupInput placeholder="Amount" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="sm">Send</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Add buttons to perform actions within the input group, such as copying, searching, or submitting.",
      },
    },
  },
};

export const WithPrefix: Story = {
  name: "With prefix",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupAddon align="inline-start">@</InputGroupAddon>
          <InputGroupInput placeholder="username" />
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon align="inline-start">
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon align="inline-start">
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Add prefixes to the start of inputs using the inline-start alignment.",
      },
    },
  },
};

export const WithSuffix: Story = {
  name: "With suffix",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupInput placeholder="username" />
          <InputGroupAddon align="inline-end">@company.com</InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Amount" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs">
              <Search />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Add suffixes to the end of inputs using the inline-end alignment.",
      },
    },
  },
};

export const WithTooltip: Story = {
  name: "With tooltip",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-4")}>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Enter password" type="password" />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  variant="ghost"
                  aria-label="Info"
                  size="icon-xs"
                >
                  <Info />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>Password must be at least 8 characters</p>
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Your email address" />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  variant="ghost"
                  aria-label="Help"
                  size="icon-xs"
                >
                  <HelpCircle />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>We&apos;ll use this to send you notifications</p>
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Add tooltips to provide additional context or help information.",
      },
    },
  },
};

export const WithTextarea: Story = {
  name: "With textarea",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-md adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupTextarea
            placeholder="Enter your message"
            className={cn("adm:min-h-[100px]")}
          />
          <InputGroupAddon align="block-end" className={cn("adm:border-t")}>
            <InputGroupText className={cn("adm:text-muted-foreground adm:text-xs")}>
              120 characters left
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupTextarea
            placeholder="Ask, Search or Chat..."
            className={cn("adm:min-h-[120px]")}
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              variant="primary"
              className={cn("adm:ml-auto adm:rounded-full")}
              size="icon-xs"
            >
              <Send />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups work with textarea components. Use block-start or block-end alignment for vertical positioning.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-4")}>
        <InputGroup {...args}>
          <InputGroupInput id="email" placeholder="shadcn" />
          <InputGroupAddon>
            <Label htmlFor="email">@</Label>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
          <InputGroupAddon align="block-start">
            <Label htmlFor="email-2" className={cn("adm:text-foreground")}>
              Email
            </Label>
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupButton
                  variant="ghost"
                  aria-label="Help"
                  className={cn("adm:ml-auto adm:rounded-full")}
                  size="icon-xs"
                >
                  <Info />
                </InputGroupButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>We&apos;ll use this to send you notifications</p>
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Add labels within input groups to improve accessibility and user experience.",
      },
    },
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup>
          <InputGroupInput placeholder="Disabled" disabled />
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Disabled with icon" disabled />
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Disabled with button" disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupButton disabled>Send</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled input groups with reduced opacity and no interaction.",
      },
    },
  },
};

export const Invalid: Story = {
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Invalid input" aria-invalid={true} />
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Invalid with icon" aria-invalid={true} />
          <InputGroupAddon align="inline-end">
            <Info />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupInput placeholder="Invalid with button" aria-invalid={true} />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Retry</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups in an error state. Use aria-invalid to indicate validation errors.",
      },
    },
  },
};

export const Combined: Story = {
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup {...args}>
          <InputGroupAddon>
            <DollarSign />
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup {...args}>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="sm">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with addons on both sides, combining icons, text, and buttons.",
      },
    },
  },
};
