import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@src/components/ui/dropdown-menu";
import { Button } from "@src/components/ui/button";
import { Avatar } from "@src/components/ui/avatar";
import { useState } from "react";
import {
  ChevronDownIcon,
  CopyIcon,
  CreditCardIcon,
  DownloadIcon,
  EditIcon,
  FileIcon,
  FolderIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SettingsIcon,
  ShareIcon,
  TrashIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic dropdown menu with simple menu items and a label.",
      },
    },
  },
};

export const WithShortcuts: Story = {
  name: "With shortcuts",
  render: function Render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="adm:w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserIcon />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Keyboard shortcuts
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UsersIcon />
              Team
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserIcon />
                Invite users
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <MailIcon />
                    Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquareIcon />
                    Message
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusIcon />
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <PlusIcon />
              New Team
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>GitHub</DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoyIcon />
            Support
          </DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comprehensive dropdown menu with shortcuts, icons, submenus, and groups.",
      },
    },
  },
};

export const WithCheckboxes: Story = {
  name: "With checkboxes",
  render: function Render() {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="adm:w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dropdown menu with checkbox items for toggling view options.",
      },
    },
  },
};

export const WithRadioGroup: Story = {
  name: "With radio group",
  render: function Render() {
    const [position, setPosition] = useState("bottom");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="adm:w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dropdown menu with radio group items for selecting one option from multiple choices.",
      },
    },
  },
};

export const UserMenu: Story = {
  name: "User menu",
  render: function Render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="adm:h-8 adm:w-8 adm:rounded-full">
            <Avatar className="adm:h-8 adm:w-8">
              <UserIcon />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="adm:w-56" align="end" forceMount>
          <DropdownMenuLabel className="adm:font-normal">
            <div className="adm:flex adm:flex-col adm:space-y-1">
              <p className="adm:text-sm adm:font-medium adm:leading-none">John Doe</p>
              <p className="adm:text-xs adm:leading-none adm:text-muted-foreground">
                john.doe@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserIcon />
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SettingsIcon />
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon />
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A user menu dropdown with avatar trigger and user information display.",
      },
    },
  },
};

export const FileActions: Story = {
  name: "File actions",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:justify-between adm:rounded-lg adm:border adm:p-4">
        <div className="adm:flex adm:items-center adm:space-x-3">
          <FileIcon className="adm:h-8 adm:w-8" />
          <div>
            <p className="adm:text-sm adm:font-medium">document.pdf</p>
            <p className="adm:text-xs adm:text-muted-foreground">2.3 MB</p>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <EditIcon />
              Open
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              Copy Link
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon />
              Share
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DownloadIcon />
              Download
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EditIcon />
              Rename
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A file actions dropdown menu with various file operations including destructive actions.",
      },
    },
  },
};

export const SimpleActions: Story = {
  name: "Simple actions",
  render: function Render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Actions
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <EditIcon />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A simple actions dropdown with basic operations and a chevron indicator.",
      },
    },
  },
};

export const ProjectMenu: Story = {
  name: "Project menu",
  render: function Render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <FolderIcon />
            My Project
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="adm:w-56">
          <DropdownMenuLabel>Project Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <EditIcon />
            Edit Project
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShareIcon />
            Share Project
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Duplicate Project
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UsersIcon />
              Manage Access
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <UserIcon />
                  Add Member
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  Permissions
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UsersIcon />
                  View Members
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DownloadIcon />
            Export
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <TrashIcon />
            Delete Project
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comprehensive project menu with nested submenus for managing project access.",
      },
    },
  },
};

export const DisabledItems: Story = {
  name: "Disabled items",
  render: function Render() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Available Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <EditIcon />
            Edit (Available)
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <ShareIcon />
            Share (Premium Feature)
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Copy (Available)
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            <DownloadIcon />
            Download (Coming Soon)
          </DropdownMenuItem>
          <DropdownMenuItem variant="destructive" disabled>
            <TrashIcon />
            Delete (No Permission)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dropdown menu showing how disabled items appear and behave with different reasons.",
      },
    },
  },
};
