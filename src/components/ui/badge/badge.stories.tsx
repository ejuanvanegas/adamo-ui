import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { cn } from "@src/lib/utils";
import {
  CheckIcon,
  XIcon,
  AlertCircleIcon,
  BadgeCheckIcon,
  StarIcon,
  TrendingUpIcon,
  ShieldIcon,
  CrownIcon,
  HeartIcon,
  ZapIcon,
  BellIcon,
  GiftIcon,
  DollarSignIcon,
} from "lucide-react";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a badge or a component that looks like a badge.",
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return <Badge {...args}>Badge</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "The default badge variant with primary styling.",
      },
    },
  },
};

export const DefaultMedium: Story = {
  name: "Default medium",
  args: { variant: "default-medium" },
  render: function Render(args) {
    return <Badge {...args}>Default Medium</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the default badge with subtle primary styling.",
      },
    },
  },
};

export const Secondary: Story = {
  name: "Secondary",
  args: { variant: "secondary" },
  render: function Render(args) {
    return <Badge {...args}>Secondary</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A badge with secondary styling for less emphasis.",
      },
    },
  },
};

export const Success: Story = {
  name: "Success",
  args: { variant: "success" },
  render: function Render(args) {
    return <Badge {...args}>Success</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A badge with success styling for positive actions or states.",
      },
    },
  },
};

export const SuccessMedium: Story = {
  name: "Success medium",
  args: { variant: "success-medium" },
  render: function Render(args) {
    return <Badge {...args}>Success Medium</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the success badge with subtle success styling.",
      },
    },
  },
};

export const Warning: Story = {
  name: "Warning",
  args: { variant: "warning" },
  render: function Render(args) {
    return <Badge {...args}>Warning</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A badge with warning styling for cautionary messages or states.",
      },
    },
  },
};

export const WarningMedium: Story = {
  name: "Warning medium",
  args: { variant: "warning-medium" },
  render: function Render(args) {
    return <Badge {...args}>Warning Medium</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the warning badge with subtle warning styling.",
      },
    },
  },
};

export const Destructive: Story = {
  name: "Destructive",
  args: { variant: "destructive" },
  render: function Render(args) {
    return <Badge {...args}>Destructive</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A badge with destructive styling for errors or dangerous actions.",
      },
    },
  },
};

export const DestructiveMedium: Story = {
  name: "Destructive medium",
  args: { variant: "destructive-medium" },
  render: function Render(args) {
    return <Badge {...args}>Destructive Medium</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A lighter version of the destructive badge with subtle error styling.",
      },
    },
  },
};

export const Muted: Story = {
  name: "Muted",
  args: { variant: "muted" },
  render: function Render(args) {
    return <Badge {...args}>Muted</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A badge with muted styling for subtle, low-emphasis content.",
      },
    },
  },
};

export const Outline: Story = {
  name: "Outline",
  args: { variant: "outline" },
  render: function Render(args) {
    return <Badge {...args}>Outline</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A badge with outline styling for subtle, bordered emphasis.",
      },
    },
  },
};

export const Large: Story = {
  name: "Large size",
  args: { variant: "success", size: "lg" },
  render: function Render(args) {
    return <Badge {...args}>Large Badge</Badge>;
  },
  parameters: {
    docs: {
      description: {
        story: "A larger badge size for increased visibility and emphasis.",
      },
    },
  },
};

export const VariantsAndSizes: Story = {
  name: "Variants and sizes",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4")}>
        <div className={cn("adm:flex adm:gap-2 adm:flex-wrap")}>
          <Badge>Default</Badge>
          <Badge variant="default-medium">Default Medium</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="success-medium">Success Medium</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="warning-medium">Warning Medium</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="destructive-medium">Destructive Medium</Badge>
          <Badge variant="muted">Muted</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className={cn("adm:flex adm:gap-2 adm:flex-wrap")}>
          <Badge size="lg">Default Large</Badge>
          <Badge size="lg" variant="default-medium">Default Medium</Badge>
          <Badge size="lg" variant="secondary">Secondary</Badge>
          <Badge size="lg" variant="success">Success</Badge>
          <Badge size="lg" variant="success-medium">Success Medium</Badge>
          <Badge size="lg" variant="warning">Warning</Badge>
          <Badge size="lg" variant="warning-medium">Warning Medium</Badge>
          <Badge size="lg" variant="destructive">Destructive</Badge>
          <Badge size="lg" variant="destructive-medium">Destructive Medium</Badge>
          <Badge size="lg" variant="muted">Muted</Badge>
          <Badge size="lg" variant="outline">Outline</Badge>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "All badge variants in both default and large sizes, showcasing the complete range of styling options.",
      },
    },
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <div className={cn("adm:flex adm:gap-2 adm:flex-wrap")}>
          <Badge variant="default">
            <CheckIcon />
            Verified
          </Badge>
          <Badge variant="secondary">
            <StarIcon />
            Featured
          </Badge>
          <Badge variant="destructive">
            <XIcon />
            Error
          </Badge>
          <Badge variant="outline">
            <AlertCircleIcon />
            Warning
          </Badge>
        </div>
        <div className={cn("adm:flex adm:gap-2 adm:flex-wrap")}>
          <Badge size="lg" variant="default-medium">
            <CheckIcon />
            Verified
          </Badge>
          <Badge size="lg" variant="secondary">
            <StarIcon />
            Featured
          </Badge>
          <Badge size="lg" variant="destructive-medium">
            <XIcon />
            Error
          </Badge>
          <Badge size="lg" variant="outline">
            <AlertCircleIcon />
            Warning
          </Badge>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Badges with icons to provide additional context and visual appeal.",
      },
    },
  },
};

export const NumberBadges: Story = {
  name: "Number badges",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap adm:items-center">
        <Badge className="adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums">
          8
        </Badge>
        <Badge
          variant="destructive"
          className="adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums"
        >
          99
        </Badge>
        <Badge
          variant="outline"
          className="adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums"
        >
          20+
        </Badge>
        <Badge
          variant="secondary"
          className="adm:h-6 adm:min-w-6 adm:rounded-full adm:px-1.5 adm:font-mono adm:tabular-nums"
        >
          1.2K
        </Badge>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Circular number badges commonly used for notifications, counts, and metrics.",
      },
    },
  },
};

export const StatusBadges: Story = {
  name: "Status badges",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Badge variant="default">
          <CheckIcon />
          Active
        </Badge>
        <Badge variant="secondary">
          <ZapIcon />
          Pending
        </Badge>
        <Badge variant="outline">
          <AlertCircleIcon />
          Warning
        </Badge>
        <Badge variant="destructive">
          <XIcon />
          Inactive
        </Badge>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Status indicators using different badge variants to show various states.",
      },
    },
  },
};

export const UserRoles: Story = {
  name: "User roles",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Badge variant="default">
          <CrownIcon />
          Admin
        </Badge>
        <Badge variant="secondary">
          <ShieldIcon />
          Moderator
        </Badge>
        <Badge variant="outline">
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge variant="outline">
          Member
        </Badge>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "User role badges with appropriate icons and styling for different permission levels.",
      },
    },
  },
};

export const CustomColors: Story = {
  name: "Custom colors",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Badge
          variant="secondary"
          className="adm:bg-blue-500 adm:text-white dark:adm:bg-blue-600"
        >
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge
          variant="secondary"
          className="adm:bg-green-500 adm:text-white dark:adm:bg-green-600"
        >
          <CheckIcon />
          Success
        </Badge>
        <Badge
          variant="secondary"
          className="adm:bg-purple-500 adm:text-white dark:adm:bg-purple-600"
        >
          <StarIcon />
          Premium
        </Badge>
        <Badge
          variant="secondary"
          className="adm:bg-orange-500 adm:text-white dark:adm:bg-orange-600"
        >
          <TrendingUpIcon />
          Trending
        </Badge>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Badges with custom color schemes to match branding or specific use cases.",
      },
    },
  },
};

export const ProductLabels: Story = {
  name: "Product labels",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:gap-2 adm:flex-wrap">
          <Badge variant="destructive">Sale</Badge>
          <Badge variant="default">New</Badge>
          <Badge variant="secondary">Bestseller</Badge>
          <Badge variant="outline">Limited</Badge>
        </div>
        <div className="adm:flex adm:gap-2 adm:flex-wrap">
          <Badge variant="secondary" className="adm:bg-green-100 adm:text-green-800 dark:adm:bg-green-900 dark:adm:text-green-200">
            Free Shipping
          </Badge>
          <Badge variant="secondary" className="adm:bg-purple-100 adm:text-purple-800 dark:adm:bg-purple-900 dark:adm:text-purple-200">
            <StarIcon />
            Premium
          </Badge>
          <Badge variant="secondary" className="adm:bg-yellow-100 adm:text-yellow-800 dark:adm:bg-yellow-900 dark:adm:text-yellow-200">
            <GiftIcon />
            Bundle Deal
          </Badge>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "E-commerce product labels with various promotional and informational badges.",
      },
    },
  },
};

export const WithAvatars: Story = {
  name: "With avatars",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-4 adm:flex-wrap adm:items-center">
        <div className="adm:flex adm:items-center adm:gap-2">
          <Avatar className="adm:size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Badge variant="secondary">shadcn</Badge>
        </div>
        <div className="adm:flex adm:items-center adm:gap-2">
          <Avatar className="adm:size-6">
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Badge variant="outline">evilrabbit</Badge>
        </div>
        <div className="adm:flex adm:items-center adm:gap-2">
          <Avatar className="adm:size-6">
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>
          <Badge variant="default">
            <BadgeCheckIcon />
            maxleiter
          </Badge>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Badges combined with avatars to create user tags and mentions.",
      },
    },
  },
};

export const NotificationBadges: Story = {
  name: "Notification badges",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-6 adm:items-center">
        <div className="adm:relative">
          <Button variant="outline" size="icon">
            <BellIcon />
          </Button>
          <Badge
            variant="destructive"
            className="adm:absolute adm:-top-2 adm:-right-2 adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums"
          >
            3
          </Badge>
        </div>
        <div className="adm:relative">
          <Button variant="outline" size="icon">
            <HeartIcon />
          </Button>
          <Badge
            variant="default"
            className="adm:absolute adm:-top-2 adm:-right-2 adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums"
          >
            12
          </Badge>
        </div>
        <div className="adm:relative">
          <Button variant="outline" size="icon">
            <GiftIcon />
          </Button>
          <Badge
            variant="secondary"
            className="adm:absolute adm:-top-2 adm:-right-2 adm:h-4 adm:min-w-4 adm:rounded-full adm:px-0.5 adm:text-xs"
          >
            •
          </Badge>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Notification badges positioned on buttons to indicate unread counts or activity.",
      },
    },
  },
};

export const PricingBadges: Story = {
  name: "Pricing badges",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Badge variant="secondary">
          <DollarSignIcon />
          $9.99
        </Badge>
        <Badge variant="destructive" className="adm:animate-pulse">
          50% OFF
        </Badge>
        <Badge variant="default">
          <TrendingUpIcon />
          Best Value
        </Badge>
        <Badge variant="outline">
          Free Trial
        </Badge>
        <Badge variant="secondary" className="adm:bg-green-100 adm:text-green-800 dark:adm:bg-green-900 dark:adm:text-green-200">
          <CheckIcon />
          Money Back Guarantee
        </Badge>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Pricing-related badges for e-commerce and SaaS applications with promotional styling.",
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
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Basic Variants</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">With Icons</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap">
            <Badge variant="default">
              <CheckIcon />
              Verified
            </Badge>
            <Badge variant="secondary">
              <StarIcon />
              Featured
            </Badge>
            <Badge variant="destructive">
              <XIcon />
              Error
            </Badge>
            <Badge variant="outline">
              <AlertCircleIcon />
              Warning
            </Badge>
          </div>
        </div>

        <div>
          <h4 className="adm:text-sm adm:font-medium adm:mb-2">Number Badges</h4>
          <div className="adm:flex adm:gap-2 adm:flex-wrap adm:items-center">
            <Badge className="adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums">
              1
            </Badge>
            <Badge variant="destructive" className="adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums">
              99+
            </Badge>
            <Badge variant="outline" className="adm:h-5 adm:min-w-5 adm:rounded-full adm:px-1 adm:font-mono adm:tabular-nums">
              42
            </Badge>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comprehensive overview of all badge variants and common patterns.",
      },
    },
  },
};
