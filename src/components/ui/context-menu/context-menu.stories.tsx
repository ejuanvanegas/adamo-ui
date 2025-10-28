import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@src/components/ui/context-menu";
import { useState } from "react";
import {
  BookmarkIcon,
  CopyIcon,
  DownloadIcon,
  EditIcon,
  FileIcon,
  FolderIcon,
  LinkIcon,
  MoreHorizontalIcon,
  RefreshCwIcon,
  ShareIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/Context Menu",
  component: ContextMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <ContextMenu>
        <ContextMenuTrigger>Right click</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
          <ContextMenuItem>Team</ContextMenuItem>
          <ContextMenuItem>Subscription</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic context menu with simple menu items. Right-click to open.",
      },
    },
  },
};

export const BrowserMenu: Story = {
  name: "Browser menu",
  render: function Render() {
    const [showBookmarks, setShowBookmarks] = useState(true);
    const [showFullUrls, setShowFullUrls] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState("pedro");

    return (
      <ContextMenu>
        <ContextMenuTrigger className="adm:flex adm:h-[150px] adm:w-[300px] adm:items-center adm:justify-center adm:rounded-md adm:border adm:border-dashed adm:text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="adm:w-52">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <RefreshCwIcon />
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <MoreHorizontalIcon />
              More Tools
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="adm:w-44">
              <ContextMenuItem>
                <DownloadIcon />
                Save Page...
              </ContextMenuItem>
              <ContextMenuItem>
                <LinkIcon />
                Create Shortcut...
              </ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            <BookmarkIcon />
            Show Bookmarks
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showFullUrls}
            onCheckedChange={setShowFullUrls}
          >
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={selectedPerson} onValueChange={setSelectedPerson}>
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioItem value="pedro">
              <UserIcon />
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">
              <UserIcon />
              Colm Tuite
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A comprehensive browser-style context menu with submenus, checkboxes, and radio groups.",
      },
    },
  },
};

export const FileManager: Story = {
  name: "File manager",
  render: function Render() {
    return (
      <div className="adm:grid adm:grid-cols-3 adm:gap-4 adm:p-4">
        <ContextMenu>
          <ContextMenuTrigger className="adm:flex adm:h-24 adm:flex-col adm:items-center adm:justify-center adm:rounded-lg adm:border adm:p-4 adm:transition-colors hover:adm:bg-muted">
            <FileIcon className="adm:h-8 adm:w-8 adm:mb-2" />
            <span className="adm:text-sm">Document.pdf</span>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <EditIcon />
              Open
            </ContextMenuItem>
            <ContextMenuItem>
              <EditIcon />
              Open with...
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <ShareIcon />
              Share
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <FileIcon />
              Properties
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <ContextMenu>
          <ContextMenuTrigger className="adm:flex adm:h-24 adm:flex-col adm:items-center adm:justify-center adm:rounded-lg adm:border adm:p-4 adm:transition-colors hover:adm:bg-muted">
            <FolderIcon className="adm:h-8 adm:w-8 adm:mb-2" />
            <span className="adm:text-sm">Projects</span>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <FolderIcon />
              Open
            </ContextMenuItem>
            <ContextMenuItem>
              <EditIcon />
              Open in new window
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <EditIcon />
              Rename
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <FileIcon />
              Properties
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        <ContextMenu>
          <ContextMenuTrigger className="adm:flex adm:h-24 adm:flex-col adm:items-center adm:justify-center adm:rounded-lg adm:border adm:p-4 adm:transition-colors hover:adm:bg-muted">
            <FileIcon className="adm:h-8 adm:w-8 adm:mb-2" />
            <span className="adm:text-sm">Image.jpg</span>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <EditIcon />
              View
            </ContextMenuItem>
            <ContextMenuItem>
              <EditIcon />
              Edit
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <ShareIcon />
              Share
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <DownloadIcon />
              Save as...
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <TrashIcon />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple context menus for different file types in a file manager interface.",
      },
    },
  },
};

export const WithGroups: Story = {
  name: "With groups",
  render: function Render() {
    const [showHiddenFiles, setShowHiddenFiles] = useState(false);
    const [showFileExtensions, setShowFileExtensions] = useState(true);

    return (
      <ContextMenu>
        <ContextMenuTrigger className="adm:flex adm:h-[150px] adm:w-[300px] adm:items-center adm:justify-center adm:rounded-md adm:border adm:border-dashed adm:text-sm">
          Right click for grouped menu
        </ContextMenuTrigger>
        <ContextMenuContent className="adm:w-56">
          <ContextMenuLabel>File Operations</ContextMenuLabel>
          <ContextMenuItem>
            <FileIcon />
            New File
            <ContextMenuShortcut>⌘N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <FolderIcon />
            New Folder
            <ContextMenuShortcut>⌘⇧N</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />

          <ContextMenuLabel>Edit</ContextMenuLabel>
          <ContextMenuItem>
            <CopyIcon />
            Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <EditIcon />
            Paste
            <ContextMenuShortcut>⌘V</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />

          <ContextMenuLabel>View</ContextMenuLabel>
          <ContextMenuCheckboxItem checked={showHiddenFiles} onCheckedChange={setShowHiddenFiles}>
            Show Hidden Files
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked={showFileExtensions} onCheckedChange={setShowFileExtensions}>
            Show File Extensions
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />

          <ContextMenuItem variant="destructive">
            <TrashIcon />
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A context menu organized into labeled groups for better organization.",
      },
    },
  },
};

export const DisabledItems: Story = {
  name: "Disabled items",
  render: function Render() {
    return (
      <ContextMenu>
        <ContextMenuTrigger className="adm:flex adm:h-[150px] adm:w-[300px] adm:items-center adm:justify-center adm:rounded-md adm:border adm:border-dashed adm:text-sm">
          Right click to see disabled items
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <EditIcon />
            Available Action
          </ContextMenuItem>
          <ContextMenuItem disabled>
            <CopyIcon />
            Disabled Action
          </ContextMenuItem>
          <ContextMenuItem>
            <ShareIcon />
            Another Available Action
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem disabled>
            <DownloadIcon />
            Not Available (Premium)
          </ContextMenuItem>
          <ContextMenuItem variant="destructive" disabled>
            <TrashIcon />
            Cannot Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A context menu showing how disabled items appear and behave.",
      },
    },
  },
};
