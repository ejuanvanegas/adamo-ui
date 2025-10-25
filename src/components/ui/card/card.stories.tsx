import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@src/components/ui/card";
import { Button } from "@src/components/ui/button/button";
import { Badge } from "@src/components/ui/badge/badge";
import { Avatar } from "@src/components/ui/avatar/avatar";
import { Input } from "@src/components/ui/input/input";
import { Label } from "@src/components/ui/label/label";
import {
  BellIcon,
  CheckIcon,
  CreditCardIcon,
  DollarSignIcon,
  ExternalLinkIcon,
  HeartIcon,
  MailIcon,
  MoreHorizontalIcon,
  ShareIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Card className="adm:w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic card with header, content, and footer sections.",
      },
    },
  },
};

export const WithAction: Story = {
  name: "With action",
  render: function Render() {
    return (
      <Card className="adm:w-[400px]">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            You have 3 unread messages.
          </CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              <MoreHorizontalIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="adm:space-y-4">
            <div className="adm:flex adm:items-center adm:space-x-4 adm:rounded-md adm:border adm:p-4">
              <BellIcon />
              <div className="adm:flex-1 adm:space-y-1">
                <p className="adm:text-sm adm:font-medium adm:leading-none">
                  Push Notifications
                </p>
                <p className="adm:text-sm adm:text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A card with an action button in the header for additional functionality.",
      },
    },
  },
};

export const LoginForm: Story = {
  name: "Login form",
  render: function Render() {
    return (
      <Card className="adm:w-full adm:max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="adm:flex adm:flex-col adm:gap-6">
              <div className="adm:grid adm:gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="adm:grid adm:gap-2">
                <div className="adm:flex adm:items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="adm:ml-auto adm:inline-block adm:text-sm adm:underline-offset-4 hover:adm:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="adm:flex-col adm:gap-2">
          <Button type="submit" className="adm:w-full">
            Login
          </Button>
          <Button variant="outline" className="adm:w-full">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A complete login form implemented using card components.",
      },
    },
  },
};

export const UserProfile: Story = {
  name: "User profile",
  render: function Render() {
    return (
      <Card className="adm:w-[380px]">
        <CardHeader>
          <div className="adm:flex adm:items-center adm:space-x-4">
            <Avatar className="adm:h-12 adm:w-12">
              <UserIcon />
            </Avatar>
            <div>
              <CardTitle>Sofia Davis</CardTitle>
              <CardDescription>Product Designer</CardDescription>
            </div>
          </div>
          <CardAction>
            <Button variant="outline" size="sm">
              Follow
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="adm:text-sm adm:text-muted-foreground">
            Passionate about creating beautiful and functional user experiences.
            Currently working on design systems and component libraries.
          </div>
        </CardContent>
        <CardFooter className="adm:flex adm:justify-between">
          <div className="adm:flex adm:space-x-4 adm:text-sm adm:text-muted-foreground">
            <div className="adm:flex adm:items-center">
              <HeartIcon className="adm:mr-1 adm:h-3 adm:w-3" />
              256
            </div>
            <div className="adm:flex adm:items-center">
              <StarIcon className="adm:mr-1 adm:h-3 adm:w-3" />
              98
            </div>
          </div>
          <div className="adm:flex adm:space-x-1">
            <Button variant="ghost" size="sm">
              <ShareIcon />
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLinkIcon />
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A user profile card with avatar, stats, and action buttons.",
      },
    },
  },
};

export const ProductCard: Story = {
  name: "Product card",
  render: function Render() {
    return (
      <Card className="adm:w-[350px]">
        <CardHeader>
          <div className="adm:aspect-square adm:rounded-md adm:bg-muted"></div>
        </CardHeader>
        <CardContent>
          <div className="adm:space-y-2">
            <Badge variant="secondary">Electronics</Badge>
            <CardTitle>Wireless Headphones</CardTitle>
            <CardDescription>
              Premium wireless headphones with noise cancellation and 30-hour battery life.
            </CardDescription>
            <div className="adm:flex adm:items-center adm:justify-between">
              <div className="adm:text-2xl adm:font-bold">$299.99</div>
              <div className="adm:flex adm:items-center adm:text-sm adm:text-muted-foreground">
                <StarIcon className="adm:mr-1 adm:h-4 adm:w-4 adm:fill-current" />
                4.5 (128 reviews)
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="adm:flex adm:gap-2">
          <Button className="adm:flex-1">
            <CreditCardIcon />
            Add to Cart
          </Button>
          <Button variant="outline" size="sm">
            <HeartIcon />
          </Button>
        </CardFooter>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A product card displaying item details with pricing and actions.",
      },
    },
  },
};

export const StatsCard: Story = {
  name: "Stats card",
  render: function Render() {
    return (
      <div className="adm:grid adm:gap-4 adm:grid-cols-1 md:adm:grid-cols-2 lg:adm:grid-cols-4">
        <Card>
          <CardHeader className="adm:flex adm:flex-row adm:items-center adm:justify-between adm:space-y-0 adm:pb-2">
            <CardTitle className="adm:text-sm adm:font-medium">
              Total Revenue
            </CardTitle>
            <DollarSignIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="adm:text-2xl adm:font-bold">$45,231.89</div>
            <p className="adm:text-xs adm:text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="adm:flex adm:flex-row adm:items-center adm:justify-between adm:space-y-0 adm:pb-2">
            <CardTitle className="adm:text-sm adm:font-medium">
              Subscriptions
            </CardTitle>
            <UserIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="adm:text-2xl adm:font-bold">+2350</div>
            <p className="adm:text-xs adm:text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="adm:flex adm:flex-row adm:items-center adm:justify-between adm:space-y-0 adm:pb-2">
            <CardTitle className="adm:text-sm adm:font-medium">Sales</CardTitle>
            <CreditCardIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="adm:text-2xl adm:font-bold">+12,234</div>
            <p className="adm:text-xs adm:text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="adm:flex adm:flex-row adm:items-center adm:justify-between adm:space-y-0 adm:pb-2">
            <CardTitle className="adm:text-sm adm:font-medium">
              Active Now
            </CardTitle>
            <UserIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="adm:text-2xl adm:font-bold">+573</div>
            <p className="adm:text-xs adm:text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple stat cards arranged in a grid layout for dashboard displays.",
      },
    },
  },
};

export const NotificationCard: Story = {
  name: "Notification card",
  render: function Render() {
    return (
      <Card className="adm:w-[380px]">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            You have 3 unread messages.
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:grid adm:gap-4">
          <div className="adm:flex adm:items-center adm:space-x-4 adm:rounded-md adm:border adm:p-4">
            <BellIcon className="adm:h-4 adm:w-4" />
            <div className="adm:flex-1 adm:space-y-1">
              <p className="adm:text-sm adm:font-medium adm:leading-none">
                Push Notifications
              </p>
              <p className="adm:text-sm adm:text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
          </div>
          <div className="adm:flex adm:items-center adm:space-x-4 adm:rounded-md adm:border adm:p-4">
            <MailIcon className="adm:h-4 adm:w-4" />
            <div className="adm:flex-1 adm:space-y-1">
              <p className="adm:text-sm adm:font-medium adm:leading-none">
                Email Notifications
              </p>
              <p className="adm:text-sm adm:text-muted-foreground">
                Send notifications to email.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="adm:w-full">
            <CheckIcon /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A notification card with multiple notification items and actions.",
      },
    },
  },
};

export const SimpleContent: Story = {
  name: "Simple content",
  render: function Render() {
    return (
      <Card className="adm:w-[350px]">
        <CardContent>
          <div className="adm:space-y-4">
            <h3 className="adm:text-lg adm:font-semibold">Simple Card</h3>
            <p className="adm:text-sm adm:text-muted-foreground">
              This is a simple card with just content, no header or footer.
              Sometimes you just need a clean container for your content.
            </p>
            <Button>Learn More</Button>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A minimal card with only content section, no header or footer.",
      },
    },
  },
};
