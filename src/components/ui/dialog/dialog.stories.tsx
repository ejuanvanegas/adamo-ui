import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@src/components/ui/dialog";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
      description: "The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the dialog. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      description: "Event handler called when the open state of the dialog changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    modal: {
      control: "boolean",
      description: "The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[425px]")}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:grid adm:gap-4 adm:py-4")}>
            <div className={cn("adm:grid adm:grid-cols-4 adm:items-center adm:gap-4")}>
              <Label htmlFor="name" className={cn("adm:text-right")}>
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className={cn("adm:col-span-3")}
              />
            </div>
            <div className={cn("adm:grid adm:grid-cols-4 adm:items-center adm:gap-4")}>
              <Label htmlFor="username" className={cn("adm:text-right")}>
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className={cn("adm:col-span-3")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The default dialog for editing a user profile with form inputs.",
      },
    },
  },
};

export const CustomCloseButton: Story = {
  name: "Custom close button",
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-md")}>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <div className={cn("adm:grid adm:flex-1 adm:gap-2")}>
              <Label htmlFor="link" className={cn("adm:sr-only")}>
                Link
              </Label>
              <Input
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
          </div>
          <DialogFooter className={cn("adm:sm:justify-start")}>
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
        story: "A dialog with a custom close button using DialogClose component.",
      },
    },
  },
};

export const DestructiveAction: Story = {
  name: "Destructive action",
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[425px]")}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A confirmation dialog for destructive actions with warning message.",
      },
    },
  },
};

export const WithForm: Story = {
  name: "With form",
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Payment Method</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[425px]")}>
          <DialogHeader>
            <DialogTitle>Add Payment Method</DialogTitle>
            <DialogDescription>
              Enter your payment details below. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:grid adm:gap-4 adm:py-4")}>
            <div className={cn("adm:grid adm:gap-2")}>
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="1234 5678 9012 3456"
                type="text"
              />
            </div>
            <div className={cn("adm:grid adm:grid-cols-2 adm:gap-4")}>
              <div className={cn("adm:grid adm:gap-2")}>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" type="text" />
              </div>
              <div className={cn("adm:grid adm:gap-2")}>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" type="text" />
              </div>
            </div>
            <div className={cn("adm:grid adm:gap-2")}>
              <Label htmlFor="name-on-card">Name on Card</Label>
              <Input id="name-on-card" placeholder="John Doe" type="text" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Save Payment Method</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog containing a payment form with multiple input fields.",
      },
    },
  },
};

export const ScrollableContent: Story = {
  name: "Scrollable content",
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">View Terms</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[425px] adm:max-h-[600px]")}>
          <DialogHeader>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogDescription>
              Please read our terms and conditions carefully.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:overflow-y-auto adm:py-4 adm:pr-4")}>
            <div className={cn("adm:space-y-4 adm:text-sm")}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
                vitae aliquam nisl nunc vitae nisl.
              </p>
              <p>
                Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
                vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl eget
                aliquam ultricies, nunc nisl aliquet nunc.
              </p>
              <p>
                Vivamus euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc.
              </p>
              <p>
                Pellentesque euismod, nisl eget aliquam ultricies, nunc nisl
                aliquet nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod,
                nisl eget aliquam ultricies, nunc nisl aliquet nunc.
              </p>
              <p>
                Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc.
              </p>
              <p>
                Mauris euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, vitae aliquam nisl nunc vitae nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc.
              </p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Decline</Button>
            </DialogClose>
            <Button>Accept</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog with scrollable content for long text or forms.",
      },
    },
  },
};

export const CustomWidth: Story = {
  name: "Custom width",
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Wide Dialog</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[625px]")}>
          <DialogHeader>
            <DialogTitle>Wide Dialog</DialogTitle>
            <DialogDescription>
              This dialog has a custom width for displaying more content.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:py-4")}>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              This dialog uses a custom max-width class to display wider content.
              You can adjust the width by changing the className on DialogContent.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog with a custom width for displaying more content.",
      },
    },
  },
};

export const WithoutCloseButton: Story = {
  name: "Without close button",
  args: {},
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[425px]")} showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>No Close Button</DialogTitle>
            <DialogDescription>
              This dialog doesn&apos;t show the close button in the corner.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:py-4")}>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              Users must interact with the dialog actions to close it.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close Dialog</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog without the default close button, requiring users to interact with dialog actions.",
      },
    },
  },
};

export const Controlled: Story = {
  args: {},
  render: function Render(args) {
    const [open, setOpen] = useState(false);

    return (
      <div className={cn("adm:space-y-4")}>
        <div className={cn("adm:flex adm:items-center adm:gap-4")}>
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
          <span className={cn("adm:text-sm adm:text-muted-foreground")}>
            Dialog is: {open ? "Open" : "Closed"}
          </span>
        </div>
        <Dialog {...args} open={open} onOpenChange={setOpen}>
          <DialogContent className={cn("adm:sm:max-w-[425px]")}>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog&apos;s open state is controlled by React state.
              </DialogDescription>
            </DialogHeader>
            <div className={cn("adm:py-4")}>
              <p className={cn("adm:text-sm adm:text-muted-foreground")}>
                You can control the dialog&apos;s open state using the open and
                onOpenChange props.
              </p>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled dialog where the open state is managed by React state.",
      },
    },
  },
};

export const NonModal: Story = {
  name: "Non-modal",
  args: { modal: false },
  render: function Render(args) {
    return (
      <Dialog {...args}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Non-Modal Dialog</Button>
        </DialogTrigger>
        <DialogContent className={cn("adm:sm:max-w-[425px]")}>
          <DialogHeader>
            <DialogTitle>Non-Modal Dialog</DialogTitle>
            <DialogDescription>
              This dialog allows interaction with elements outside of it.
            </DialogDescription>
          </DialogHeader>
          <div className={cn("adm:py-4")}>
            <p className={cn("adm:text-sm adm:text-muted-foreground")}>
              When modal is set to false, users can interact with content outside
              the dialog while it&apos;s open.
            </p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A non-modal dialog that allows interaction with outside elements.",
      },
    },
  },
};
