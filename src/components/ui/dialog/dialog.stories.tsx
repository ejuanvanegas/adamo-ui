import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@src/components/ui/dialog";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { Checkbox } from "@src/components/ui/checkbox";
import {
  CopyIcon,
  InfoIcon,
  PlusIcon,
  SaveIcon,
  ShareIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic dialog with title and description. Click the trigger to open.",
      },
    },
  },
};

export const EditProfile: Story = {
  name: "Edit profile",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="adm:sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:grid adm:gap-4 adm:py-4">
            <div className="adm:grid adm:grid-cols-4 adm:items-center adm:gap-4">
              <Label htmlFor="name" className="adm:text-right">
                Name
              </Label>
              <Input id="name" defaultValue="Pedro Duarte" className="adm:col-span-3" />
            </div>
            <div className="adm:grid adm:grid-cols-4 adm:items-center adm:gap-4">
              <Label htmlFor="username" className="adm:text-right">
                Username
              </Label>
              <Input id="username" defaultValue="@peduarte" className="adm:col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              <SaveIcon />
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog with form inputs for editing user profile information.",
      },
    },
  },
};

export const ShareLink: Story = {
  name: "Share link",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <ShareIcon />
            Share
          </Button>
        </DialogTrigger>
        <DialogContent className="adm:sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:flex adm:items-center adm:space-x-2">
            <div className="adm:grid adm:flex-1 adm:gap-2">
              <Label htmlFor="link" className="adm:sr-only">
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="adm:px-3">
              <CopyIcon />
            </Button>
          </div>
          <DialogFooter className="adm:sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog for sharing a link with copy functionality and custom close button.",
      },
    },
  },
};

export const DeleteConfirmation: Story = {
  name: "Delete confirmation",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <TrashIcon />
            Delete Account
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="adm:flex adm:items-center adm:gap-2">
              Delete Account
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove all of your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:my-4">
            <Label className="adm:flex adm:items-center adm:gap-2 adm:text-sm">
              <Checkbox />
              I understand that this action is irreversible
            </Label>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">
              <TrashIcon />
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A destructive confirmation dialog with warning icon and checkbox confirmation.",
      },
    },
  },
};

export const CreateProject: Story = {
  name: "Create project",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusIcon />
            New Project
          </Button>
        </DialogTrigger>
        <DialogContent className="adm:sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a new project to get started. You can always change these settings later.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:grid adm:gap-4 adm:py-4">
            <div className="adm:grid adm:gap-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" placeholder="My Awesome Project" />
            </div>
            <div className="adm:grid adm:gap-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" placeholder="Brief description of your project" />
            </div>
            <div className="adm:grid adm:gap-2">
              <Label htmlFor="repository">Repository URL (optional)</Label>
              <Input id="repository" placeholder="https://github.com/username/repo" />
            </div>
            <div className="adm:flex adm:items-center adm:space-x-2">
              <Checkbox id="public" />
              <Label htmlFor="public" className="adm:text-sm">
                Make this project public
              </Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">
              <PlusIcon />
              Create Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A creation dialog with multiple form fields and options.",
      },
    },
  },
};

export const UserDetails: Story = {
  name: "User details",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <UserIcon />
            View Details
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              View detailed information about this user account.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:space-y-4">
            <div className="adm:grid adm:grid-cols-3 adm:gap-4">
              <div className="adm:font-medium">Name:</div>
              <div className="adm:col-span-2">John Doe</div>
            </div>
            <div className="adm:grid adm:grid-cols-3 adm:gap-4">
              <div className="adm:font-medium">Email:</div>
              <div className="adm:col-span-2">john.doe@example.com</div>
            </div>
            <div className="adm:grid adm:grid-cols-3 adm:gap-4">
              <div className="adm:font-medium">Role:</div>
              <div className="adm:col-span-2">Administrator</div>
            </div>
            <div className="adm:grid adm:grid-cols-3 adm:gap-4">
              <div className="adm:font-medium">Joined:</div>
              <div className="adm:col-span-2">January 15, 2024</div>
            </div>
            <div className="adm:grid adm:grid-cols-3 adm:gap-4">
              <div className="adm:font-medium">Last Active:</div>
              <div className="adm:col-span-2">2 hours ago</div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button>
              <UserIcon />
              Edit User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An informational dialog displaying user details in a structured format.",
      },
    },
  },
};

export const InformationDialog: Story = {
  name: "Information dialog",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <InfoIcon />
            More Info
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="adm:flex adm:items-center adm:gap-2">
              Important Information
            </DialogTitle>
            <DialogDescription>
              Please read the following information carefully before proceeding.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:space-y-4 adm:text-sm">
            <div>
              <h4 className="adm:font-medium adm:mb-2">Data Processing</h4>
              <p className="adm:text-muted-foreground">
                Your data will be processed according to our privacy policy. We ensure
                full compliance with GDPR and other data protection regulations.
              </p>
            </div>
            <div>
              <h4 className="adm:font-medium adm:mb-2">Security</h4>
              <p className="adm:text-muted-foreground">
                All data is encrypted both in transit and at rest using industry-standard
                encryption protocols.
              </p>
            </div>
            <div>
              <h4 className="adm:font-medium adm:mb-2">Support</h4>
              <p className="adm:text-muted-foreground">
                If you have any questions or concerns, please contact our support team
                at support@example.com.
              </p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Got it</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An informational dialog with structured content and no form elements.",
      },
    },
  },
};

export const NoCloseButton: Story = {
  name: "No close button",
  render: function Render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open (No X)</Button>
        </DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>Custom Close Behavior</DialogTitle>
            <DialogDescription>
              This dialog doesn't have the default X close button. You must use the
              action buttons to close it.
            </DialogDescription>
          </DialogHeader>
          <div className="adm:py-4">
            <p className="adm:text-sm adm:text-muted-foreground">
              This pattern is useful when you want to force users to make a deliberate choice
              rather than accidentally closing the dialog.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Confirm</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog without the default close button, requiring deliberate action to close.",
      },
    },
  },
};
