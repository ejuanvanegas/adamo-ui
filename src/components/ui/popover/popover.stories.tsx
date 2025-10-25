import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "@src/components/ui/popover";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { Switch } from "@src/components/ui/switch/switch";
import { Separator } from "@src/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Badge } from "@src/components/ui/badge";
import { Calendar } from "@src/components/ui/calendar";
import { cn } from "@src/lib/utils";
import {
  Settings,
  Mail,
  Calendar as CalendarIcon,
  Info,
  Plus,
  Minus,
  AlertCircle,
} from "lucide-react";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays rich content in a portal, triggered by a button.",
      },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent className={cn("adm:w-80")}>
          <div className={cn("adm:grid adm:gap-4")}>
            <div className={cn("adm:space-y-2")}>
              <h4 className={cn("adm:font-medium adm:leading-none")}>Dimensions</h4>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                Set the dimensions for the layer.
              </p>
            </div>
            <div className={cn("adm:grid adm:gap-2")}>
              <div className={cn("adm:grid adm:grid-cols-3 adm:items-center adm:gap-4")}>
                <Label htmlFor="width">Width</Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className={cn("adm:col-span-2 adm:h-8")}
                />
              </div>
              <div className={cn("adm:grid adm:grid-cols-3 adm:items-center adm:gap-4")}>
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className={cn("adm:col-span-2 adm:h-8")}
                />
              </div>
              <div className={cn("adm:grid adm:grid-cols-3 adm:items-center adm:gap-4")}>
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className={cn("adm:col-span-2 adm:h-8")}
                />
              </div>
              <div className={cn("adm:grid adm:grid-cols-3 adm:items-center adm:gap-4")}>
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className={cn("adm:col-span-2 adm:h-8")}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic popover with form content for setting dimensions.",
      },
    },
  },
};

export const Simple: Story = {
  name: "Simple",
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Click me</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>This is a simple popover with just text content.</p>
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A simple popover with basic text content.",
      },
    },
  },
};

export const WithUserProfile: Story = {
  name: "With user profile",
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className={cn("adm:h-auto adm:p-2")}>
            <Avatar className={cn("adm:h-8 adm:w-8")}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("adm:w-80")}>
          <div className={cn("adm:flex adm:gap-4")}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className={cn("adm:space-y-1")}>
              <h4 className={cn("adm:text-sm adm:font-semibold")}>@shadcn</h4>
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
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover displaying user profile information with avatar.",
      },
    },
  },
};

export const WithSettings: Story = {
  name: "With settings",
  render: function Render() {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className={cn("adm:h-4 adm:w-4")} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("adm:w-80")}>
          <div className={cn("adm:grid adm:gap-4")}>
            <div className={cn("adm:space-y-2")}>
              <h4 className={cn("adm:font-medium adm:leading-none")}>Settings</h4>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                Configure your preferences
              </p>
            </div>
            <div className={cn("adm:grid adm:gap-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <Label htmlFor="notifications">Push notifications</Label>
                <Switch id="notifications" />
              </div>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <Label htmlFor="emails">Email updates</Label>
                <Switch id="emails" defaultChecked />
              </div>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <Label htmlFor="marketing">Marketing emails</Label>
                <Switch id="marketing" />
              </div>
            </div>
            <Separator />
            <div className={cn("adm:flex adm:justify-between")}>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save changes</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover with settings form including switches and action buttons.",
      },
    },
  },
};

export const WithCalendar: Story = {
  name: "With calendar",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "adm:w-[240px] adm:justify-start adm:text-left adm:font-normal",
              !date && "adm:text-muted-foreground",
            )}
          >
            <CalendarIcon className={cn("adm:mr-2 adm:h-4 adm:w-4")} />
            {date ? date.toLocaleDateString() : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("adm:w-auto adm:p-0")} align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover with a calendar for date selection.",
      },
    },
  },
};

export const WithCounter: Story = {
  name: "With counter",
  render: function Render() {
    const [count, setCount] = useState(0);

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            Counter: {count}
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("adm:w-64")}>
          <div className={cn("adm:grid adm:gap-4")}>
            <div className={cn("adm:space-y-2")}>
              <h4 className={cn("adm:font-medium adm:leading-none")}>Counter Control</h4>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                Adjust the counter value
              </p>
            </div>
            <div className={cn("adm:flex adm:items-center adm:justify-center adm:space-x-2")}>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCount(Math.max(0, count - 1))}
                disabled={count === 0}
              >
                <Minus className={cn("adm:h-4 adm:w-4")} />
              </Button>
              <div className={cn("adm:flex adm:items-center adm:justify-center adm:w-16 adm:h-10 adm:border adm:rounded")}>
                {count}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCount(count + 1)}
              >
                <Plus className={cn("adm:h-4 adm:w-4")} />
              </Button>
            </div>
            <div className={cn("adm:flex adm:gap-2")}>
              <Button variant="outline" size="sm" onClick={() => setCount(0)}>
                Reset
              </Button>
              <Button size="sm" onClick={() => setCount(10)}>
                Set to 10
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover with interactive counter controls and state management.",
      },
    },
  },
};

export const WithInfo: Story = {
  name: "With info",
  render: function Render() {
    return (
      <div className={cn("adm:flex adm:items-center adm:gap-4")}>
        <span>Complex Feature</span>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("adm:h-5 adm:w-5")}>
              <Info className={cn("adm:h-3 adm:w-3")} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className={cn("adm:w-80")}>
            <div className={cn("adm:space-y-3")}>
              <div className={cn("adm:flex adm:items-center adm:gap-2")}>
                <AlertCircle className={cn("adm:h-4 adm:w-4 adm:text-blue-500")} />
                <h4 className={cn("adm:font-medium")}>About this feature</h4>
              </div>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                This is a complex feature that requires additional explanation.
                It includes multiple components working together to provide
                advanced functionality for power users.
              </p>
              <div className={cn("adm:space-y-2")}>
                <h5 className={cn("adm:text-sm adm:font-medium")}>Key benefits:</h5>
                <ul className={cn("adm:text-sm adm:space-y-1 adm:text-muted-foreground")}>
                  <li>• Improved performance and efficiency</li>
                  <li>• Better user experience</li>
                  <li>• Advanced customization options</li>
                </ul>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover providing detailed information and help content.",
      },
    },
  },
};

export const WithNotifications: Story = {
  name: "With notifications",
  render: function Render() {
    const notifications = [
      { id: 1, title: "New message", time: "2 min ago", read: false },
      { id: 2, title: "System update", time: "1 hour ago", read: true },
      { id: 3, title: "Meeting reminder", time: "3 hours ago", read: false },
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className={cn("adm:relative")}>
            <Mail className={cn("adm:h-4 adm:w-4")} />
            <Badge
              className={cn("adm:absolute adm:-top-2 adm:-right-2 adm:h-5 adm:w-5 adm:p-0 adm:flex adm:items-center adm:justify-center")}
              variant="destructive"
            >
              3
            </Badge>
          </Button>
        </PopoverTrigger>
        <PopoverContent className={cn("adm:w-80")}>
          <div className={cn("adm:space-y-3")}>
            <div className={cn("adm:flex adm:items-center adm:justify-between")}>
              <h4 className={cn("adm:font-medium")}>Notifications</h4>
              <Button variant="ghost" size="sm">
                Mark all read
              </Button>
            </div>
            <div className={cn("adm:space-y-2")}>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "adm:flex adm:items-start adm:gap-3 adm:p-2 adm:rounded adm:hover:bg-muted",
                    !notification.read && "adm:bg-muted/50",
                  )}
                >
                  <div className={cn("adm:flex-1")}>
                    <p className={cn("adm:text-sm adm:font-medium")}>{notification.title}</p>
                    <p className={cn("adm:text-xs adm:text-muted-foreground")}>{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className={cn("adm:h-2 adm:w-2 adm:bg-blue-500 adm:rounded-full adm:mt-1")} />
                  )}
                </div>
              ))}
            </div>
            <Separator />
            <Button variant="outline" size="sm" className={cn("adm:w-full")}>
              View all notifications
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover displaying a list of notifications with read/unread states.",
      },
    },
  },
};

export const WithPositioning: Story = {
  name: "With positioning",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:grid-cols-3 adm:gap-4 adm:p-8")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p>This popover appears on top</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p>This popover appears on the right</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p>This popover appears on the bottom</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p>This popover appears on the left</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Start aligned</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <p>This popover is aligned to the start</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">End aligned</Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <p>This popover is aligned to the end</p>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Popovers demonstrating different positioning and alignment options.",
      },
    },
  },
};

export const WithAnchor: Story = {
  name: "With anchor",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4")}>
        <p>
          This is some text with an{" "}
          <Popover>
            <PopoverAnchor asChild>
              <span className={cn("adm:underline adm:cursor-pointer")}>
                anchored element
              </span>
            </PopoverAnchor>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("adm:ml-2")}>
                Show info
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>This popover is anchored to the underlined text above!</p>
            </PopoverContent>
          </Popover>
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A popover using PopoverAnchor to position relative to a different element.",
      },
    },
  },
};
