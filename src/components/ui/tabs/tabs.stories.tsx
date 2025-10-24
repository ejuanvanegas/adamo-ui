import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@src/components/ui/tabs";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@src/components/ui/card";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";
import { THEMES } from "@src/types/theme.type";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A set of layered sections of content—known as tab panels—that are displayed one at a time. Built on top of Radix UI Tabs primitive.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: false,
      description: "The value of the tab that should be active when initially rendered. Use when you do not need to control the state.",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the tab to activate. Should be used in conjunction with onValueChange.",
      table: {
        type: { summary: "string" },
      },
    },
    onValueChange: {
      description: "Event handler called when the value changes.",
      control: false,
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs.",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      description: "The reading direction of the tabs. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      table: {
        type: { summary: "ltr | rtl" },
      },
    },
    activationMode: {
      control: "radio",
      options: ["automatic", "manual"],
      description: "When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.",
      table: {
        type: { summary: "automatic | manual" },
        defaultValue: { summary: "automatic" },
      },
    },
    theme: {
      control: { type: "select" },
      options: THEMES,
      description: "The theme variant to use.",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "account",
  },
  render: function Render(args) {
    return (
      <Tabs {...args} className={cn("adm:w-full adm:max-w-md")}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re done.
              </CardDescription>
            </CardHeader>
            <CardContent className={cn("adm:grid adm:gap-6")}>
              <div className={cn("adm:grid adm:gap-3")}>
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className={cn("adm:grid adm:gap-3")}>
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className={cn("adm:grid adm:gap-6")}>
              <div className={cn("adm:grid adm:gap-3")}>
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className={cn("adm:grid adm:gap-3")}>
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic tabs component with content panels for account and password settings.",
      },
    },
  },
};

export const Simple: Story = {
  args: {
    defaultValue: "overview",
  },
  render: function Render(args) {
    return (
      <Tabs {...args} className={cn("adm:w-full adm:max-w-md")}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Overview content goes here.
          </p>
        </TabsContent>
        <TabsContent value="analytics">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Analytics content goes here.
          </p>
        </TabsContent>
        <TabsContent value="reports">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Reports content goes here.
          </p>
        </TabsContent>
        <TabsContent value="notifications">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Notifications content goes here.
          </p>
        </TabsContent>
      </Tabs>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A simple tabs example with multiple options and basic text content.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "account",
  },
  render: function Render(args) {
    return (
      <Tabs {...args} className={cn("adm:w-full adm:max-w-md")}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Account settings content.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Password settings content.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Settings content.
          </p>
        </TabsContent>
      </Tabs>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A tabs component with one disabled trigger that cannot be activated.",
      },
    },
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
      <div className={cn("adm:grid adm:gap-4")}>
        <div className={cn("adm:flex adm:gap-2")}>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setActiveTab("tab1")}
          >
            Go to Tab 1
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setActiveTab("tab2")}
          >
            Go to Tab 2
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setActiveTab("tab3")}
          >
            Go to Tab 3
          </Button>
        </div>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className={cn("adm:w-full adm:max-w-md")}
        >
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              This is the content for Tab 1. Active: {activeTab}
            </p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              This is the content for Tab 2. Active: {activeTab}
            </p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              This is the content for Tab 3. Active: {activeTab}
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled tabs component where the active tab can be changed programmatically using external buttons.",
      },
    },
  },
};
