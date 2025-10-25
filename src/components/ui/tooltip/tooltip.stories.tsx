import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@src/components/ui/tooltip";
import { Button } from "@src/components/ui/button";
import { Badge } from "@src/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import {
  InfoIcon,
  HelpCircleIcon,
  CopyIcon,
  RefreshCwIcon,
  TrashIcon,
  EditIcon,
  ShareIcon,
  DownloadIcon,
  BookmarkIcon,
  HeartIcon,
  EyeIcon,
  MessageCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ZapIcon,
} from "lucide-react";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    );
  },
};

export const WithIcon: Story = {
  name: "With icon",
  render: function Render() {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <InfoIcon className="adm:h-4 adm:w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>More information</p>
        </TooltipContent>
      </Tooltip>
    );
  },
};

export const Sides: Story = {
  name: "Sides",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:justify-center adm:gap-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const WithSideOffset: Story = {
  name: "With side offset",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Default (0)</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>No offset</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Offset 10</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={10}>
            <p>With 10px offset</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Offset 20</Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={20}>
            <p>With 20px offset</p>
          </TooltipContent>
        </Tooltip>
      </div>
    );
  },
};

export const WithDelayDuration: Story = {
  name: "With delay duration",
  render: function Render() {
    return (
      <TooltipProvider delayDuration={800}>
        <div className="adm:flex adm:items-center adm:gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Slow (800ms)</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This tooltip appears after 800ms</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button variant="outline">Instant</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This tooltip appears instantly</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    );
  },
};

export const ControlledTooltip: Story = {
  name: "Controlled",
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <div className="adm:flex adm:items-center adm:gap-4">
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button variant="outline">Controlled Tooltip</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This tooltip is controlled programmatically</p>
          </TooltipContent>
        </Tooltip>

        <div className="adm:flex adm:gap-2">
          <Button size="sm" onClick={() => setOpen(true)}>
            Show
          </Button>
          <Button size="sm" variant="outline" onClick={() => setOpen(false)}>
            Hide
          </Button>
        </div>

        <Badge variant={open ? "default" : "secondary"}>
          {open ? "Open" : "Closed"}
        </Badge>
      </div>
    );
  },
};

export const ActionButtons: Story = {
  name: "Action buttons",
  render: function Render() {
    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Document Actions</CardTitle>
          <CardDescription>
            Hover over the buttons to see their descriptions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="adm:flex adm:flex-wrap adm:gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <CopyIcon className="adm:h-4 adm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <EditIcon className="adm:h-4 adm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit document</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <ShareIcon className="adm:h-4 adm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share with others</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <DownloadIcon className="adm:h-4 adm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download file</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline">
                  <RefreshCwIcon className="adm:h-4 adm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Refresh content</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="destructive">
                  <TrashIcon className="adm:h-4 adm:w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete permanently</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const FormFieldsWithHelp: Story = {
  name: "Form fields with help",
  render: function Render() {
    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>
            Complete your profile information
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:space-y-2">
            <div className="adm:flex adm:items-center adm:gap-2">
              <Label htmlFor="username">Username</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircleIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground adm:cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Must be 3-20 characters long and contain only letters, numbers, and underscores</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input id="username" placeholder="Enter username" />
          </div>

          <div className="adm:space-y-2">
            <div className="adm:flex adm:items-center adm:gap-2">
              <Label htmlFor="email">Email</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground adm:cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>We'll use this email for account verification and important notifications</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input id="email" type="email" placeholder="Enter email address" />
          </div>

          <div className="adm:space-y-2">
            <div className="adm:flex adm:items-center adm:gap-2">
              <Label htmlFor="password">Password</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <AlertTriangleIcon className="adm:h-4 adm:w-4 adm:text-amber-500 adm:cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="adm:space-y-1">
                    <p className="adm:font-medium">Password requirements:</p>
                    <ul className="adm:text-xs adm:space-y-1">
                      <li>• At least 8 characters</li>
                      <li>• One uppercase letter</li>
                      <li>• One lowercase letter</li>
                      <li>• One number</li>
                      <li>• One special character</li>
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <Input id="password" type="password" placeholder="Create password" />
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const StatusIndicators: Story = {
  name: "Status indicators",
  render: function Render() {
    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Monitor system health and performance
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:items-center adm:justify-between">
            <span className="adm:text-sm">API Server</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="adm:cursor-help">
                  <CheckCircleIcon className="adm:h-5 adm:w-5 adm:text-green-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="adm:space-y-1">
                  <p className="adm:font-medium adm:text-green-500">Operational</p>
                  <p className="adm:text-xs">Response time: 245ms</p>
                  <p className="adm:text-xs">Uptime: 99.9%</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <span className="adm:text-sm">Database</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="adm:cursor-help">
                  <AlertTriangleIcon className="adm:h-5 adm:w-5 adm:text-yellow-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="adm:space-y-1">
                  <p className="adm:font-medium adm:text-yellow-500">Degraded Performance</p>
                  <p className="adm:text-xs">High query latency detected</p>
                  <p className="adm:text-xs">Connection pool: 85% utilized</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <span className="adm:text-sm">File Storage</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="adm:cursor-help">
                  <XCircleIcon className="adm:h-5 adm:w-5 adm:text-red-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="adm:space-y-1">
                  <p className="adm:font-medium adm:text-red-500">Service Unavailable</p>
                  <p className="adm:text-xs">Connection timeout</p>
                  <p className="adm:text-xs">Last successful sync: 2 hours ago</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <span className="adm:text-sm">CDN</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="adm:cursor-help">
                  <ZapIcon className="adm:h-5 adm:w-5 adm:text-blue-500" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="adm:space-y-1">
                  <p className="adm:font-medium adm:text-blue-500">Optimized</p>
                  <p className="adm:text-xs">Global edge locations: 152</p>
                  <p className="adm:text-xs">Cache hit ratio: 98.7%</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const SocialInteractions: Story = {
  name: "Social interactions",
  render: function Render() {
    const [interactions, setInteractions] = useState({
      liked: false,
      bookmarked: false,
      shared: false,
    });

    const handleInteraction = (type: keyof typeof interactions) => {
      setInteractions((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Amazing React Component</CardTitle>
          <CardDescription>
            A beautifully crafted component for your next project
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <p className="adm:text-sm adm:text-muted-foreground">
            This component provides excellent user experience with smooth animations
            and perfect accessibility. Built with TypeScript and tested thoroughly.
          </p>

          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant={interactions.liked ? "default" : "outline"}
                    onClick={() => handleInteraction("liked")}
                  >
                    <HeartIcon className={`adm:h-4 adm:w-4 ${interactions.liked ? "adm:fill-current" : ""}`} />
                    42
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{interactions.liked ? "Remove from favorites" : "Add to favorites"}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline">
                    <MessageCircleIcon className="adm:h-4 adm:w-4" />
                    12
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View comments and discussions</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="outline">
                    <EyeIcon className="adm:h-4 adm:w-4" />
                    1.2k
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Total views this week</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="adm:flex adm:gap-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant={interactions.bookmarked ? "default" : "ghost"}
                    onClick={() => handleInteraction("bookmarked")}
                  >
                    <BookmarkIcon className={`adm:h-4 adm:w-4 ${interactions.bookmarked ? "adm:fill-current" : ""}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{interactions.bookmarked ? "Remove bookmark" : "Bookmark for later"}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleInteraction("shared")}
                  >
                    <ShareIcon className="adm:h-4 adm:w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share with your network</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};
