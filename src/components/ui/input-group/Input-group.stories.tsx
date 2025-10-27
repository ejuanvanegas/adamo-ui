import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "@src/components/ui/input-group";
import { Label } from "@src/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@src/components/ui/tooltip/tooltip";
import { Spinner } from "@src/components/ui/spinner";
import { cn } from "@src/lib/utils";
import {
  Search,
  Mail,
  CreditCard,
  Check,
  Star,
  Info,
  HelpCircle,
  MoreHorizontal,
  ChevronDown,
  Copy,
  Eye,
  EyeOff,
  Loader,
  Send,
  Plus,
  Forward,
} from "lucide-react";

const meta = {
  title: "Components/Input Group",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Display additional information or actions to an input or textarea.",
      },
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic input group with an icon addon.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <Mail />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCard />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Check />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
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
        story: "Input groups with various icon placements and combinations.",
      },
    },
  },
};

export const WithText: Story = {
  name: "With text",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Enter your username" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>@company.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupTextarea placeholder="Enter your message" />
          <InputGroupAddon align="block-end">
            <InputGroupText className={cn("adm:text-muted-foreground adm:text-xs")}>
              120 characters left
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with text prefixes, suffixes, and character counters.",
      },
    },
  },
};

export const WithButton: Story = {
  name: "With button",
  render: function Render() {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText("https://x.com/shadcn");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-6")}>
        <InputGroup>
          <InputGroupInput placeholder="https://x.com/shadcn" readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Copy"
              title="Copy"
              size="icon-xs"
              onClick={handleCopy}
            >
              {isCopied ? <Check /> : <Copy />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Type to search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="secondary">Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with interactive buttons for various actions.",
      },
    },
  },
};

export const WithTooltip: Story = {
  name: "With tooltip",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-4")}>
        <InputGroup>
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

        <InputGroup>
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
                <p>We'll use this to send you notifications</p>
              </TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Enter API key" />
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupAddon>
                <InputGroupButton
                  variant="ghost"
                  aria-label="Help"
                  size="icon-xs"
                >
                  <HelpCircle />
                </InputGroupButton>
              </InputGroupAddon>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Click for help with API keys</p>
            </TooltipContent>
          </Tooltip>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with tooltips providing additional context.",
      },
    },
  },
};

export const WithTextarea: Story = {
  name: "With textarea",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-md adm:gap-4")}>
        <InputGroup>
          <InputGroupTextarea
            placeholder="console.log('Hello, world!');"
            className={cn("adm:min-h-[200px]")}
          />
          <InputGroupAddon align="block-end" className={cn("adm:border-t")}>
            <InputGroupText>Line 1, Column 1</InputGroupText>
            <InputGroupButton size="sm" className={cn("adm:ml-auto")} variant="default">
              Run <Send />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupAddon align="block-start" className={cn("adm:border-b")}>
            <InputGroupText className={cn("adm:font-mono adm:font-medium")}>
              <Search />
              script.js
            </InputGroupText>
            <InputGroupButton className={cn("adm:ml-auto")} size="icon-xs">
              <Copy />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with textarea and block-aligned addons.",
      },
    },
  },
};

export const WithSpinner: Story = {
  name: "With spinner",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-4")}>
        <InputGroup data-disabled>
          <InputGroupInput placeholder="Searching..." disabled />
          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup data-disabled>
          <InputGroupInput placeholder="Processing..." disabled />
          <InputGroupAddon>
            <Spinner />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup data-disabled>
          <InputGroupInput placeholder="Saving changes..." disabled />
          <InputGroupAddon align="inline-end">
            <InputGroupText>Saving...</InputGroupText>
            <Spinner />
          </InputGroupAddon>
        </InputGroup>

        <InputGroup data-disabled>
          <InputGroupInput placeholder="Refreshing data..." disabled />
          <InputGroupAddon>
            <Loader className={cn("adm:animate-spin")} />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText className={cn("adm:text-muted-foreground")}>
              Please wait...
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with loading spinners for processing states.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-4")}>
        <InputGroup>
          <InputGroupInput id="email" placeholder="shadcn" />
          <InputGroupAddon>
            <Label htmlFor="email">@</Label>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
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
                <p>We'll use this to send you notifications</p>
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
        story: "Input groups with labels for improved accessibility.",
      },
    },
  },
};

export const WithDropdown: Story = {
  name: "With dropdown",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:gap-4")}>
        <InputGroup>
          <InputGroupInput placeholder="Enter file name" />
          <InputGroupAddon align="inline-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton
                  variant="ghost"
                  aria-label="More"
                  size="icon-xs"
                >
                  <MoreHorizontal />
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Copy path</DropdownMenuItem>
                <DropdownMenuItem>Open location</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </InputGroupAddon>
        </InputGroup>

        <InputGroup>
          <InputGroupInput placeholder="Enter search query" />
          <InputGroupAddon align="inline-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost" className={cn("adm:text-xs")}>
                  Search In... <ChevronDown className={cn("adm:size-3")} />
                </InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Blog Posts</DropdownMenuItem>
                <DropdownMenuItem>Changelog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input groups with dropdown menus for complex interactions.",
      },
    },
  },
};

export const PasswordToggle: Story = {
  name: "Password toggle",
  render: function Render() {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={cn("adm:w-full adm:max-w-sm")}>
        <Label htmlFor="password">Password</Label>
        <InputGroup className={cn("adm:mt-3")}>
          <InputGroupInput
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              variant="ghost"
              size="icon-xs"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword
                ? <EyeOff />
                : <Eye />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A password input with toggle visibility using input group.",
      },
    },
  },
};

export const SearchWithResults: Story = {
  name: "Search with results",
  render: function Render() {
    const [searchValue, setSearchValue] = useState("");
    const [results] = useState(["Apple", "Banana", "Cherry", "Date"]);

    const filteredResults = results.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (
      <div className={cn("adm:w-full adm:max-w-sm")}>
        <InputGroup>
          <InputGroupInput
            placeholder="Search..."
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText>{filteredResults.length} results</InputGroupText>
          </InputGroupAddon>
        </InputGroup>

        {searchValue && (
          <div className={cn("adm:mt-2 adm:text-sm adm:text-muted-foreground")}>
            {filteredResults.length > 0
              ? <p>Found {filteredResults.length} results</p>
              : <p>No results found</p>}
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A search input group with live results counter.",
      },
    },
  },
};

export const ChatInput: Story = {
  name: "Chat input",
  render: function Render() {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = () => {
      if (!message.trim()) return;
      setIsLoading(true);
      setTimeout(() => {
        setMessage("");
        setIsLoading(false);
      }, 1000);
    };

    return (
      <div className={cn("adm:w-full adm:max-w-md")}>
        <InputGroup>
          <InputGroupTextarea
            placeholder="Ask, Search or Chat..."
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            className={cn("adm:min-h-[60px]")}
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              variant="outline"
              className={cn("adm:rounded-full")}
              size="icon-xs"
            >
              <Plus />
            </InputGroupButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <InputGroupButton variant="ghost">Auto</InputGroupButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="start"
              >
                <DropdownMenuItem>Auto</DropdownMenuItem>
                <DropdownMenuItem>Agent</DropdownMenuItem>
                <DropdownMenuItem>Manual</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <InputGroupText className={cn("adm:ml-auto")}>
              {message.length}/280
            </InputGroupText>

            <InputGroupButton
              variant="default"
              className={cn("adm:rounded-full")}
              size="icon-xs"
              onClick={handleSend}
              disabled={!message.trim() || isLoading}
            >
              {isLoading ? <Spinner /> : <Forward />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A complex chat input with multiple controls and character counter.",
      },
    },
  },
};
