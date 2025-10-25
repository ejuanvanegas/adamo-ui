import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "@src/components/ui/avatar";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@src/components/ui/tooltip";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic avatar with an image and fallback initials.",
      },
    },
  },
};

export const FallbackOnly: Story = {
  name: "Fallback only",
  render: function Render() {
    return (
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An avatar displaying only fallback initials without an image.",
      },
    },
  },
};

export const BrokenImage: Story = {
  name: "Broken image",
  render: function Render() {
    return (
      <Avatar>
        <AvatarImage src="https://broken-link.com/image.jpg" alt="Broken" />
        <AvatarFallback>BK</AvatarFallback>
      </Avatar>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates how the avatar gracefully falls back to initials when the image fails to load.",
      },
    },
  },
};

export const DifferentSizes: Story = {
  name: "Different sizes",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-6">
        <Avatar className="adm:size-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="adm:text-xs">CN</AvatarFallback>
        </Avatar>
        <Avatar className="adm:size-8">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar className="adm:size-12">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <Avatar className="adm:size-16">
          <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
          <AvatarFallback className="adm:text-lg">VC</AvatarFallback>
        </Avatar>
        <Avatar className="adm:size-20">
          <AvatarImage src="https://github.com/nextjs.png" alt="@nextjs" />
          <AvatarFallback className="adm:text-xl">NJ</AvatarFallback>
        </Avatar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Avatars in various sizes from extra small to extra large, with appropriate text scaling.",
      },
    },
  },
};

export const SquareAvatar: Story = {
  name: "Square avatar",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-4">
        <Avatar className="adm:rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="adm:rounded-md">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar className="adm:rounded-sm">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <Avatar className="adm:rounded-none">
          <AvatarFallback>SQ</AvatarFallback>
        </Avatar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Avatars with different border radius values, from rounded corners to completely square.",
      },
    },
  },
};

export const AvatarGroup: Story = {
  name: "Avatar group",
  render: function Render() {
    return (
      <div className="adm:flex -adm:space-x-2">
        <Avatar className="adm:ring-2 adm:ring-background">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="adm:ring-2 adm:ring-background">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <Avatar className="adm:ring-2 adm:ring-background">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
        <Avatar className="adm:ring-2 adm:ring-background adm:bg-muted">
          <AvatarFallback>+2</AvatarFallback>
        </Avatar>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A group of overlapping avatars with ring borders, commonly used to show team members or participants.",
      },
    },
  },
};

export const WithTooltip: Story = {
  name: "With tooltip",
  render: function Render() {
    return (
      <TooltipProvider>
        <div className="adm:flex adm:gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="adm:cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>shadcn - UI Engineer</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="adm:cursor-pointer">
                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>Evil Rabbit - Designer</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive avatars with tooltips that show additional user information on hover.",
      },
    },
  },
};

export const UserProfile: Story = {
  name: "User profile",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-4 adm:p-6 adm:rounded-lg adm:border adm:max-w-md">
        <Avatar className="adm:size-16">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="adm:text-lg">CN</AvatarFallback>
        </Avatar>
        <div className="adm:flex-1">
          <h3 className="adm:text-lg adm:font-semibold">Colin Northcott</h3>
          <p className="adm:text-sm adm:text-muted-foreground">@shadcn • UI Engineer</p>
          <div className="adm:flex adm:gap-2 adm:mt-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
          </div>
        </div>
        <Button size="sm">Follow</Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A complete user profile card featuring a large avatar, user details, skills, and action button.",
      },
    },
  },
};

export const CommentSystem: Story = {
  name: "Comment system",
  render: function Render() {
    const comments = [
      {
        id: 1,
        author: "John Doe",
        avatar: "https://github.com/shadcn.png",
        fallback: "JD",
        time: "2 hours ago",
        content: "This looks great! Really excited to see this feature in production.",
      },
      {
        id: 2,
        author: "Jane Smith",
        avatar: "https://github.com/evilrabbit.png",
        fallback: "JS",
        time: "1 hour ago",
        content: "I agree with John. The user experience improvements are very noticeable.",
      },
      {
        id: 3,
        author: "Mike Johnson",
        avatar: "",
        fallback: "MJ",
        time: "30 minutes ago",
        content: "Should we consider adding some loading states for better perceived performance?",
      },
    ];

    return (
      <div className="adm:space-y-4 adm:max-w-2xl">
        {comments.map((comment) => (
          <div key={comment.id} className="adm:flex adm:gap-3">
            <Avatar>
              {comment.avatar && <AvatarImage src={comment.avatar} alt={comment.author} />}
              <AvatarFallback>{comment.fallback}</AvatarFallback>
            </Avatar>
            <div className="adm:flex-1 adm:space-y-1">
              <div className="adm:flex adm:items-center adm:gap-2">
                <span className="adm:text-sm adm:font-medium">{comment.author}</span>
                <span className="adm:text-xs adm:text-muted-foreground">{comment.time}</span>
              </div>
              <p className="adm:text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comment thread layout demonstrating avatars in a conversational context with timestamps.",
      },
    },
  },
};
