import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@src/components/ui/hover-card";
import { Button } from "@src/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { cn } from "@src/lib/utils";
import { CalendarIcon, GitBranch, Users, Star } from "lucide-react";

const meta = {
  title: "Components/Hover Card",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "For sighted users to preview content available behind a link.",
      },
    },
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className={cn("adm:w-80")}>
          <div className={cn("adm:flex adm:justify-between adm:gap-4")}>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className={cn("adm:space-y-1")}>
              <h4 className={cn("adm:text-sm adm:font-semibold")}>@nextjs</h4>
              <p className={cn("adm:text-sm")}>
                The React Framework – created and maintained by @vercel.
              </p>
              <div className={cn("adm:flex adm:items-center adm:pt-2")}>
                <CalendarIcon className={cn("adm:mr-2 adm:h-4 adm:w-4 adm:opacity-70")} />
                <span className={cn("adm:text-xs adm:text-muted-foreground")}>
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic hover card with user profile information.",
      },
    },
  },
};

export const WithAvatar: Story = {
  name: "With avatar",
  render: function Render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar className={cn("adm:cursor-pointer")}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className={cn("adm:w-80")}>
          <div className={cn("adm:space-y-3")}>
            <div className={cn("adm:flex adm:items-center adm:gap-3")}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className={cn("adm:text-sm adm:font-semibold")}>shadcn</h4>
                <p className={cn("adm:text-sm adm:text-muted-foreground")}>@shadcn</p>
              </div>
            </div>
            <p className={cn("adm:text-sm")}>
              Building design systems and web apps. Creator of ui.shadcn.com.
            </p>
            <div className={cn("adm:flex adm:items-center adm:gap-4 adm:text-sm adm:text-muted-foreground")}>
              <div className={cn("adm:flex adm:items-center adm:gap-1")}>
                <Users className={cn("adm:h-4 adm:w-4")} />
                <span>2.1k followers</span>
              </div>
              <div className={cn("adm:flex adm:items-center adm:gap-1")}>
                <span>Following 180</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A hover card triggered by an avatar showing user details.",
      },
    },
  },
};

export const WithRepositoryInfo: Story = {
  name: "With repository info",
  render: function Render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className={cn("adm:font-mono")}>
            shadcn/ui
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className={cn("adm:w-80")}>
          <div className={cn("adm:space-y-3")}>
            <div>
              <h4 className={cn("adm:text-sm adm:font-semibold")}>shadcn/ui</h4>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                Beautifully designed components that you can copy and paste into your apps.
              </p>
            </div>
            <div className={cn("adm:flex adm:items-center adm:gap-4 adm:text-sm adm:text-muted-foreground")}>
              <div className={cn("adm:flex adm:items-center adm:gap-1")}>
                <Star className={cn("adm:h-4 adm:w-4")} />
                <span>45.2k</span>
              </div>
              <div className={cn("adm:flex adm:items-center adm:gap-1")}>
                <GitBranch className={cn("adm:h-4 adm:w-4")} />
                <span>4.1k</span>
              </div>
              <div className={cn("adm:flex adm:items-center adm:gap-1")}>
                <div className={cn("adm:h-3 adm:w-3 adm:rounded-full adm:bg-blue-500")} />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A hover card displaying repository information and statistics.",
      },
    },
  },
};

export const SimpleText: Story = {
  name: "Simple text",
  render: function Render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p className={cn("adm:text-sm")}>
            This is a simple hover card with just text content.
          </p>
        </HoverCardContent>
      </HoverCard>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A minimal hover card with simple text content.",
      },
    },
  },
};

export const WithDelay: Story = {
  name: "With delay",
  args: { openDelay: 1000, closeDelay: 500 },
  render: function Render(args) {
    return (
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover (1s delay)</Button>
        </HoverCardTrigger>
        <HoverCardContent className={cn("adm:w-64")}>
          <div className={cn("adm:space-y-2")}>
            <h4 className={cn("adm:text-sm adm:font-semibold")}>Delayed Hover Card</h4>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              This hover card has a 1 second open delay and 500ms close delay.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A hover card with custom open and close delays.",
      },
    },
  },
};

export const DifferentSizes: Story = {
  name: "Different sizes",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:gap-4")}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" size="sm">Small</Button>
          </HoverCardTrigger>
          <HoverCardContent className={cn("adm:w-48")}>
            <p className={cn("adm:text-sm")}>Small hover card content.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Medium</Button>
          </HoverCardTrigger>
          <HoverCardContent className={cn("adm:w-64")}>
            <p className={cn("adm:text-sm")}>
              Medium sized hover card with more content space.
            </p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" size="lg">Large</Button>
          </HoverCardTrigger>
          <HoverCardContent className={cn("adm:w-96")}>
            <div className={cn("adm:space-y-2")}>
              <h4 className={cn("adm:text-sm adm:font-semibold")}>Large Hover Card</h4>
              <p className={cn("adm:text-sm")}>
                This is a larger hover card that can contain more detailed information
                and content. Perfect for rich previews and detailed descriptions.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Hover cards with different content sizes.",
      },
    },
  },
};

export const WithImage: Story = {
  name: "With image",
  render: function Render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">View product</Button>
        </HoverCardTrigger>
        <HoverCardContent className={cn("adm:w-80")}>
          <div className={cn("adm:space-y-3")}>
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Product preview"
              className={cn("adm:w-full adm:h-32 adm:object-cover adm:rounded-md")}
            />
            <div>
              <h4 className={cn("adm:text-sm adm:font-semibold")}>Wireless Headphones</h4>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                High-quality wireless headphones with noise cancellation.
              </p>
              <p className={cn("adm:text-lg adm:font-bold adm:mt-2")}>$299.99</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A hover card featuring an image and product information.",
      },
    },
  },
};

export const InlineLink: Story = {
  name: "Inline link",
  render: function Render() {
    return (
      <div className={cn("adm:max-w-md")}>
        <p className={cn("adm:text-sm adm:leading-relaxed")}>
          This paragraph contains an{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#" className={cn("adm:underline adm:underline-offset-4")}>
                inline link
              </a>
            </HoverCardTrigger>
            <HoverCardContent className={cn("adm:w-64")}>
              <div className={cn("adm:space-y-2")}>
                <h4 className={cn("adm:text-sm adm:font-semibold")}>Link Preview</h4>
                <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                  This shows additional context when you hover over the link in the text.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
          {" "}that shows a preview when hovered. This is useful for providing
          additional context without breaking the reading flow.
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A hover card triggered by an inline link within text content.",
      },
    },
  },
};

export const CustomPositioning: Story = {
  name: "Custom positioning",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:gap-4 adm:justify-center adm:items-center adm:h-32")}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Top</Button>
          </HoverCardTrigger>
          <HoverCardContent side="top" className={cn("adm:w-48")}>
            <p className={cn("adm:text-sm")}>Content positioned above.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Right</Button>
          </HoverCardTrigger>
          <HoverCardContent side="right" className={cn("adm:w-48")}>
            <p className={cn("adm:text-sm")}>Content positioned to the right.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Left</Button>
          </HoverCardTrigger>
          <HoverCardContent side="left" className={cn("adm:w-48")}>
            <p className={cn("adm:text-sm")}>Content positioned to the left.</p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </HoverCardTrigger>
          <HoverCardContent side="bottom" className={cn("adm:w-48")}>
            <p className={cn("adm:text-sm")}>Content positioned below.</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Hover cards with different positioning options (top, right, bottom, left).",
      },
    },
  },
};
