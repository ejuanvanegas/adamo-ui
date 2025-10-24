import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@src/components/ui/card";
import { Button } from "@src/components/ui/button";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A container that groups related content and actions. Commonly used for displaying information in a consistent format.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="adm:w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with some example text that could span multiple lines to show how the content is displayed within the card.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="adm:w-[350px]">
      <CardHeader>
        <CardTitle>Newsletter</CardTitle>
        <CardDescription>Get notified about important updates.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Subscribe to our newsletter to receive updates about new features and important announcements.</p>
      </CardContent>
      <CardFooter className="adm:justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Subscribe</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="adm:w-[350px]">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            ⚙️
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Update your account settings and preferences here.</p>
      </CardContent>
    </Card>
  ),
};

export const BorderVariant: Story = {
  render: () => (
    <Card className="adm:w-[350px] adm:border-b">
      <CardHeader className="adm:border-b">
        <CardTitle>Bordered Card</CardTitle>
        <CardDescription>With border variants</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card demonstrates the use of borders to separate different sections.</p>
      </CardContent>
      <CardFooter className="adm:border-t">
        <p className="adm:text-sm adm:text-muted-foreground">Last updated: 2 days ago</p>
      </CardFooter>
    </Card>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Card className="adm:w-[350px]">
      <CardContent className="adm:pt-6">
        <p>A minimal card with just content and no header or footer.</p>
      </CardContent>
    </Card>
  ),
};

export const Complex: Story = {
  render: () => (
    <Card className="adm:w-[350px]">
      <CardHeader>
        <CardTitle>Project Status</CardTitle>
        <CardDescription>Current project overview</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">View All</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="adm:space-y-4">
          <div className="adm:space-y-2">
            <p className="adm:text-sm adm:font-medium">Tasks Completed</p>
            <p className="adm:text-2xl adm:font-bold">15/20</p>
          </div>
          <div className="adm:h-px adm:bg-border" />
          <div className="adm:space-y-2">
            <p className="adm:text-sm adm:font-medium">Time Remaining</p>
            <p className="adm:text-sm adm:text-muted-foreground">2 days</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="adm:w-full">Update Status</Button>
      </CardFooter>
    </Card>
  ),
};
