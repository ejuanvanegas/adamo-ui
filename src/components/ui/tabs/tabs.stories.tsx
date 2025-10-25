import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@src/components/ui/tabs";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@src/components/ui/card";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { Badge } from "@src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Separator } from "@src/components/ui/separator";
import { Progress } from "@src/components/ui/progress";
import {
  UserIcon,
  LockIcon,
  BellIcon,
  CreditCardIcon,
  SettingsIcon,
  FileTextIcon,
  BarChart3Icon,
  UsersIcon,
  CalendarIcon,
  MessageSquareIcon,
  StarIcon,
  ShoppingCartIcon,
  TrendingUpIcon,
  ActivityIcon,
  BookOpenIcon,
  CodeIcon,
  AppWindowIcon,
} from "lucide-react";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Tabs defaultValue="account" className="adm:w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
    );
  },
};

export const WithCards: Story = {
  name: "With cards",
  render: function Render() {
    return (
      <Tabs defaultValue="account" className="adm:w-[400px]">
        <TabsList className="adm:grid adm:w-full adm:grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="adm:space-y-2">
              <div className="adm:space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="adm:space-y-1">
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
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="adm:space-y-2">
              <div className="adm:space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="adm:space-y-1">
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
};

export const WithIcons: Story = {
  name: "With icons",
  render: function Render() {
    return (
      <Tabs defaultValue="profile" className="adm:w-[500px]">
        <TabsList className="adm:grid adm:w-full adm:grid-cols-4">
          <TabsTrigger value="profile">
            <UserIcon />
            Profile
          </TabsTrigger>
          <TabsTrigger value="security">
            <LockIcon />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <BellIcon />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCardIcon />
            Billing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:space-x-2">
                <UserIcon className="adm:size-5" />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>
                Update your personal information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="adm:space-y-4">
              <div className="adm:flex adm:items-center adm:space-x-4">
                <Avatar className="adm:size-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="adm:space-y-1">
                  <Button variant="outline" size="sm">Change avatar</Button>
                  <p className="adm:text-xs adm:text-muted-foreground">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>
              <div className="adm:grid adm:grid-cols-2 adm:gap-4">
                <div className="adm:space-y-2">
                  <Label>First name</Label>
                  <Input defaultValue="John" />
                </div>
                <div className="adm:space-y-2">
                  <Label>Last name</Label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:space-x-2">
                <LockIcon className="adm:size-5" />
                <span>Security Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="adm:space-y-4">
              <div className="adm:flex adm:items-center adm:justify-between">
                <div>
                  <h4 className="adm:font-medium">Two-factor authentication</h4>
                  <p className="adm:text-sm adm:text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Badge variant="outline">Not enabled</Badge>
              </div>
              <div className="adm:flex adm:items-center adm:justify-between">
                <div>
                  <h4 className="adm:font-medium">Login sessions</h4>
                  <p className="adm:text-sm adm:text-muted-foreground">
                    Manage your active sessions
                  </p>
                </div>
                <Button variant="outline" size="sm">View sessions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:space-x-2">
                <BellIcon className="adm:size-5" />
                <span>Notification Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="adm:space-y-3">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Email notifications</span>
                  <Badge>Enabled</Badge>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Push notifications</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>SMS notifications</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:space-x-2">
                <CreditCardIcon className="adm:size-5" />
                <span>Billing Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="adm:space-y-4">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Current plan</span>
                  <Badge>Pro Plan</Badge>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Monthly usage</span>
                  <span className="adm:text-sm adm:text-muted-foreground">75%</span>
                </div>
                <Progress value={75} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:gap-2">
          <Button
            onClick={() => setActiveTab("overview")}
            variant={activeTab === "overview" ? "default" : "outline"}
            size="sm"
          >
            Go to Overview
          </Button>
          <Button
            onClick={() => setActiveTab("analytics")}
            variant={activeTab === "analytics" ? "default" : "outline"}
            size="sm"
          >
            Go to Analytics
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="adm:w-[500px]">
          <TabsList className="adm:grid adm:w-full adm:grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  Current tab: {activeTab}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>A high-level view of your dashboard metrics and key performance indicators.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Current tab: {activeTab}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed analytics and insights about your data and user behavior.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Current tab: {activeTab}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Generate and download various reports about your account activity.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};

export const Dashboard: Story = {
  name: "Dashboard",
  render: function Render() {
    return (
      <Tabs defaultValue="overview" className="adm:w-full">
        <TabsList>
          <TabsTrigger value="overview">
            <BarChart3Icon />
            Overview
          </TabsTrigger>
          <TabsTrigger value="customers">
            <UsersIcon />
            Customers
          </TabsTrigger>
          <TabsTrigger value="orders">
            <ShoppingCartIcon />
            Orders
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <TrendingUpIcon />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="adm:space-y-4">
          <div className="adm:grid adm:gap-4 adm:md:grid-cols-2 adm:lg:grid-cols-4">
            <Card>
              <CardHeader className="adm:flex adm:flex-row adm:items-center adm:justify-between adm:space-y-0 adm:pb-2">
                <CardTitle className="adm:text-sm adm:font-medium">Total Revenue</CardTitle>
                <TrendingUpIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
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
                <CardTitle className="adm:text-sm adm:font-medium">Subscriptions</CardTitle>
                <UsersIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
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
                <CardTitle className="adm:text-sm adm:font-medium">Active Now</CardTitle>
                <ActivityIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="adm:text-2xl adm:font-bold">+573</div>
                <p className="adm:text-xs adm:text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>
                View and manage your customer base
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="adm:space-y-4">
                <div className="adm:flex adm:items-center adm:space-x-4">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="adm:flex-1">
                    <p className="adm:font-medium">John Doe</p>
                    <p className="adm:text-sm adm:text-muted-foreground">john@example.com</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <Separator />
                <div className="adm:flex adm:items-center adm:space-x-4">
                  <Avatar>
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="adm:flex-1">
                    <p className="adm:font-medium">Jane Smith</p>
                    <p className="adm:text-sm adm:text-muted-foreground">jane@example.com</p>
                  </div>
                  <Badge variant="secondary">Inactive</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>
                Latest orders and transactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="adm:space-y-4">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:font-medium">Order #1234</p>
                    <p className="adm:text-sm adm:text-muted-foreground">2 hours ago</p>
                  </div>
                  <div className="adm:text-right">
                    <p className="adm:font-medium">$299.00</p>
                    <Badge>Completed</Badge>
                  </div>
                </div>
                <Separator />
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:font-medium">Order #1235</p>
                    <p className="adm:text-sm adm:text-muted-foreground">5 hours ago</p>
                  </div>
                  <div className="adm:text-right">
                    <p className="adm:font-medium">$149.00</p>
                    <Badge variant="outline">Processing</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>
                Detailed insights and metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="adm:space-y-4">
                <div>
                  <div className="adm:flex adm:justify-between adm:text-sm">
                    <span>Conversion Rate</span>
                    <span>12.5%</span>
                  </div>
                  <Progress value={12.5} className="adm:mt-2" />
                </div>
                <div>
                  <div className="adm:flex adm:justify-between adm:text-sm">
                    <span>Customer Satisfaction</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} className="adm:mt-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};

export const VerticalTabs: Story = {
  name: "Vertical tabs",
  render: function Render() {
    return (
      <Tabs defaultValue="general" className="adm:flex adm:w-full adm:max-w-4xl adm:space-x-4" orientation="vertical">
        <TabsList className="adm:flex adm:flex-col adm:h-auto adm:w-48 adm:p-1">
          <TabsTrigger value="general" className="adm:w-full adm:justify-start">
            <SettingsIcon />
            General
          </TabsTrigger>
          <TabsTrigger value="account" className="adm:w-full adm:justify-start">
            <UserIcon />
            Account
          </TabsTrigger>
          <TabsTrigger value="security" className="adm:w-full adm:justify-start">
            <LockIcon />
            Security
          </TabsTrigger>
          <TabsTrigger value="notifications" className="adm:w-full adm:justify-start">
            <BellIcon />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="adm:w-full adm:justify-start">
            <CreditCardIcon />
            Billing
          </TabsTrigger>
        </TabsList>

        <div className="adm:flex-1">
          <TabsContent value="general" className="adm:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure your general application preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="adm:space-y-4">
                <div className="adm:space-y-2">
                  <Label>Application name</Label>
                  <Input defaultValue="My Application" />
                </div>
                <div className="adm:space-y-2">
                  <Label>Description</Label>
                  <Input defaultValue="A powerful application" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="adm:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="adm:space-y-4">
                <div className="adm:space-y-2">
                  <Label>Email</Label>
                  <Input type="email" defaultValue="user@example.com" />
                </div>
                <div className="adm:space-y-2">
                  <Label>Display name</Label>
                  <Input defaultValue="John Doe" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="adm:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your security and privacy settings
                </CardDescription>
              </CardHeader>
              <CardContent className="adm:space-y-4">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:font-medium">Two-factor authentication</p>
                    <p className="adm:text-sm adm:text-muted-foreground">
                      Secure your account with 2FA
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="adm:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="adm:space-y-4">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Email notifications</span>
                  <Badge>Enabled</Badge>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Push notifications</span>
                  <Badge variant="secondary">Disabled</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="adm:mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Billing Settings</CardTitle>
                <CardDescription>
                  Manage your subscription and payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="adm:space-y-4">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Current plan</span>
                  <Badge>Pro</Badge>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span>Billing cycle</span>
                  <span className="adm:text-sm adm:text-muted-foreground">Monthly</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    );
  },
};

export const DocumentationTabs: Story = {
  name: "Documentation tabs",
  render: function Render() {
    return (
      <Tabs defaultValue="preview" className="adm:w-full adm:max-w-4xl">
        <TabsList>
          <TabsTrigger value="preview">
            <AppWindowIcon />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">
            <CodeIcon />
            Code
          </TabsTrigger>
          <TabsTrigger value="docs">
            <BookOpenIcon />
            Documentation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Component Preview</CardTitle>
              <CardDescription>
                See how the component looks and behaves
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="adm:p-6 adm:border adm:rounded-lg adm:bg-muted/50">
                <div className="adm:flex adm:items-center adm:space-x-2">
                  <Button>Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Source Code</CardTitle>
              <CardDescription>
                Copy and paste the component code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="adm:p-4 adm:bg-muted adm:rounded-lg adm:font-mono adm:text-sm">
                <div className="adm:text-muted-foreground">// Button component example</div>
                <div>&lt;Button&gt;Primary Button&lt;/Button&gt;</div>
                <div>&lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;</div>
                <div>&lt;Button variant="outline"&gt;Outline&lt;/Button&gt;</div>
              </div>
              <div className="adm:flex adm:justify-end adm:pt-4">
                <Button variant="outline" size="sm">
                  Copy Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="adm:space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>
                Learn how to use this component
              </CardDescription>
            </CardHeader>
            <CardContent className="adm:space-y-4">
              <div>
                <h4 className="adm:font-semibold adm:mb-2">Props</h4>
                <div className="adm:space-y-2">
                  <div className="adm:flex adm:justify-between adm:text-sm">
                    <code className="adm:bg-muted adm:px-1 adm:rounded">variant</code>
                    <span className="adm:text-muted-foreground">
                      "default" | "secondary" | "outline"
                    </span>
                  </div>
                  <div className="adm:flex adm:justify-between adm:text-sm">
                    <code className="adm:bg-muted adm:px-1 adm:rounded">size</code>
                    <span className="adm:text-muted-foreground">
                      "sm" | "default" | "lg"
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="adm:font-semibold adm:mb-2">Usage</h4>
                <p className="adm:text-sm adm:text-muted-foreground">
                  The Button component supports multiple variants and sizes.
                  Use the variant prop to change the visual style and the size prop to adjust the button size.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};

export const BadgeSupport: Story = {
  name: "Badge support",
  render: function Render() {
    return (
      <Tabs defaultValue="inbox" className="adm:w-[500px]">
        <TabsList className="adm:grid adm:w-full adm:grid-cols-4">
          <TabsTrigger value="inbox" className="adm:relative">
            <MessageSquareIcon />
            Inbox
            <Badge className="adm:ml-1 adm:scale-75">12</Badge>
          </TabsTrigger>
          <TabsTrigger value="starred" className="adm:relative">
            <StarIcon />
            Starred
            <Badge variant="secondary" className="adm:ml-1 adm:scale-75">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="sent">
            <CalendarIcon />
            Sent
          </TabsTrigger>
          <TabsTrigger value="drafts" className="adm:relative">
            <FileTextIcon />
            Drafts
            <Badge variant="destructive" className="adm:ml-1 adm:scale-75">1</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inbox">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:justify-between">
                Inbox Messages
                <Badge>12 unread</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="adm:space-y-3">
                <div className="adm:flex adm:items-center adm:space-x-3">
                  <Avatar className="adm:size-8">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="adm:flex-1">
                    <p className="adm:font-medium">John Doe</p>
                    <p className="adm:text-sm adm:text-muted-foreground">
                      Meeting reminder for tomorrow
                    </p>
                  </div>
                  <Badge variant="destructive" className="adm:scale-75">New</Badge>
                </div>
                <Separator />
                <div className="adm:flex adm:items-center adm:space-x-3">
                  <Avatar className="adm:size-8">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div className="adm:flex-1">
                    <p className="adm:font-medium">Jane Smith</p>
                    <p className="adm:text-sm adm:text-muted-foreground">
                      Project update and next steps
                    </p>
                  </div>
                  <Badge variant="destructive" className="adm:scale-75">New</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="starred">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:justify-between">
                Starred Messages
                <Badge variant="secondary">3 starred</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="adm:text-muted-foreground">Important messages you've starred for later reference.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent">
          <Card>
            <CardHeader>
              <CardTitle>Sent Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="adm:text-muted-foreground">Messages you've sent to others.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle className="adm:flex adm:items-center adm:justify-between">
                Draft Messages
                <Badge variant="destructive">1 draft</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="adm:text-muted-foreground">Unsent messages saved as drafts.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};
