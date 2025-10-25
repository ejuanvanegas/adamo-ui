import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@src/components/ui/separator";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <div>
        <div className="adm:space-y-1">
          <h4 className="adm:text-sm adm:leading-none adm:font-medium">Radix Primitives</h4>
          <p className="adm:text-muted-foreground adm:text-sm">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="adm:my-4" />
        <div className="adm:flex adm:h-5 adm:items-center adm:space-x-4 adm:text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    );
  },
};

export const Horizontal: Story = {
  name: "Horizontal",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md adm:space-y-4">
        <div>
          <h3 className="adm:text-lg adm:font-semibold">Section 1</h3>
          <p className="adm:text-muted-foreground adm:text-sm">
            This is the first section of content.
          </p>
        </div>
        <Separator />
        <div>
          <h3 className="adm:text-lg adm:font-semibold">Section 2</h3>
          <p className="adm:text-muted-foreground adm:text-sm">
            This is the second section of content.
          </p>
        </div>
        <Separator />
        <div>
          <h3 className="adm:text-lg adm:font-semibold">Section 3</h3>
          <p className="adm:text-muted-foreground adm:text-sm">
            This is the third section of content.
          </p>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  name: "Vertical",
  render: function Render() {
    return (
      <div className="adm:flex adm:h-20 adm:items-center adm:space-x-4">
        <div className="adm:text-center">
          <div className="adm:text-2xl adm:font-bold">123</div>
          <div className="adm:text-muted-foreground adm:text-xs">Total Users</div>
        </div>
        <Separator orientation="vertical" />
        <div className="adm:text-center">
          <div className="adm:text-2xl adm:font-bold">456</div>
          <div className="adm:text-muted-foreground adm:text-xs">Active Sessions</div>
        </div>
        <Separator orientation="vertical" />
        <div className="adm:text-center">
          <div className="adm:text-2xl adm:font-bold">789</div>
          <div className="adm:text-muted-foreground adm:text-xs">Revenue</div>
        </div>
      </div>
    );
  },
};

export const InNavigation: Story = {
  name: "In navigation",
  render: function Render() {
    return (
      <nav className="adm:flex adm:items-center adm:space-x-4 adm:text-sm">
        <a href="#" className="adm:font-medium adm:hover:underline">
          Home
        </a>
        <Separator orientation="vertical" className="adm:h-4" />
        <a href="#" className="adm:font-medium adm:hover:underline">
          About
        </a>
        <Separator orientation="vertical" className="adm:h-4" />
        <a href="#" className="adm:font-medium adm:hover:underline">
          Services
        </a>
        <Separator orientation="vertical" className="adm:h-4" />
        <a href="#" className="adm:font-medium adm:hover:underline">
          Contact
        </a>
      </nav>
    );
  },
};

export const InCards: Story = {
  name: "In cards",
  render: function Render() {
    return (
      <div className="adm:grid adm:gap-4 adm:md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
          </CardHeader>
          <CardContent className="adm:space-y-4">
            <div className="adm:flex adm:items-center adm:space-x-2">
              <Avatar className="adm:h-8 adm:w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="adm:text-sm adm:font-medium">John Doe</p>
                <p className="adm:text-muted-foreground adm:text-xs">john@example.com</p>
              </div>
            </div>
            <Separator />
            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between adm:text-sm">
                <span>Status</span>
                <Badge variant="default">Active</Badge>
              </div>
              <div className="adm:flex adm:justify-between adm:text-sm">
                <span>Role</span>
                <span className="adm:text-muted-foreground">Admin</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="adm:space-y-4">
              <div className="adm:flex adm:justify-between">
                <span className="adm:text-sm">Total Views</span>
                <span className="adm:text-sm adm:font-medium">1,234</span>
              </div>
              <Separator />
              <div className="adm:flex adm:justify-between">
                <span className="adm:text-sm">Downloads</span>
                <span className="adm:text-sm adm:font-medium">567</span>
              </div>
              <Separator />
              <div className="adm:flex adm:justify-between">
                <span className="adm:text-sm">Likes</span>
                <span className="adm:text-sm adm:font-medium">89</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const WithActions: Story = {
  name: "With actions",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-sm adm:space-y-4">
        <div className="adm:space-y-2">
          <h3 className="adm:text-lg adm:font-semibold">Quick Actions</h3>
          <p className="adm:text-muted-foreground adm:text-sm">
            Choose an action to perform
          </p>
        </div>

        <Separator />

        <div className="adm:space-y-2">
          <Button variant="outline" className="adm:w-full adm:justify-start">
            Create New Project
          </Button>
          <Button variant="outline" className="adm:w-full adm:justify-start">
            Import Existing
          </Button>
          <Button variant="outline" className="adm:w-full adm:justify-start">
            Browse Templates
          </Button>
        </div>

        <Separator />

        <div className="adm:space-y-2">
          <Button variant="outline" className="adm:w-full adm:justify-start">
            Settings
          </Button>
          <Button variant="outline" className="adm:w-full adm:justify-start">
            Help & Support
          </Button>
        </div>
      </div>
    );
  },
};

export const CustomSpacing: Story = {
  name: "Custom spacing",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md adm:space-y-6">
        <div>
          <h3 className="adm:text-base adm:font-semibold">Tight Spacing</h3>
          <p className="adm:text-muted-foreground adm:text-sm">Content above</p>
        </div>
        <Separator className="adm:my-2" />
        <div>
          <p className="adm:text-muted-foreground adm:text-sm">Content below</p>
        </div>

        <div className="adm:py-4">
          <h3 className="adm:text-base adm:font-semibold">Normal Spacing</h3>
          <p className="adm:text-muted-foreground adm:text-sm">Content above</p>
        </div>
        <Separator className="adm:my-4" />
        <div>
          <p className="adm:text-muted-foreground adm:text-sm">Content below</p>
        </div>

        <div className="adm:py-6">
          <h3 className="adm:text-base adm:font-semibold">Loose Spacing</h3>
          <p className="adm:text-muted-foreground adm:text-sm">Content above</p>
        </div>
        <Separator className="adm:my-8" />
        <div>
          <p className="adm:text-muted-foreground adm:text-sm">Content below</p>
        </div>
      </div>
    );
  },
};

export const InListItems: Story = {
  name: "In list items",
  render: function Render() {
    const items = [
      { id: 1, title: "First Item", description: "Description for the first item" },
      { id: 2, title: "Second Item", description: "Description for the second item" },
      { id: 3, title: "Third Item", description: "Description for the third item" },
      { id: 4, title: "Fourth Item", description: "Description for the fourth item" },
    ];

    return (
      <div className="adm:w-full adm:max-w-md adm:space-y-0">
        {items.map((item, index) => (
          <div key={item.id}>
            <div className="adm:py-3">
              <h4 className="adm:text-sm adm:font-medium">{item.title}</h4>
              <p className="adm:text-muted-foreground adm:text-xs">{item.description}</p>
            </div>
            {index < items.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    );
  },
};

export const WithCustomColors: Story = {
  name: "With custom colors",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md adm:space-y-6">
        <div>
          <h3 className="adm:text-base adm:font-semibold">Default Separator</h3>
          <Separator className="adm:my-4" />
          <p className="adm:text-muted-foreground adm:text-sm">Standard border color</p>
        </div>

        <div>
          <h3 className="adm:text-base adm:font-semibold">Subtle Separator</h3>
          <Separator className="adm:my-4 adm:bg-muted" />
          <p className="adm:text-muted-foreground adm:text-sm">Muted background color</p>
        </div>

        <div>
          <h3 className="adm:text-base adm:font-semibold">Accent Separator</h3>
          <Separator className="adm:my-4 adm:bg-primary adm:h-0.5" />
          <p className="adm:text-muted-foreground adm:text-sm">Primary color with custom height</p>
        </div>
      </div>
    );
  },
};
