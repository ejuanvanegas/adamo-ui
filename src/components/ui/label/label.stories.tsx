import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "@src/components/ui/label";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Checkbox } from "@src/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@src/components/ui/radio-group";
import { Switch } from "@src/components/ui/switch/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@src/components/ui/select/select";
import { cn } from "@src/lib/utils";
import { Mail, User, Lock, Calendar } from "lucide-react";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Renders an accessible label associated with controls.",
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return (
      <div className={cn("adm:space-y-2")}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic label associated with an input using htmlFor attribute.",
      },
    },
  },
};

export const WithCheckbox: Story = {
  name: "With checkbox",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4")}>
        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>

        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <Checkbox id="newsletter" />
          <Label htmlFor="newsletter">Subscribe to our newsletter</Label>
        </div>

        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <Checkbox id="marketing" />
          <Label htmlFor="marketing">
            I agree to receive marketing communications
          </Label>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels used with checkboxes for form controls.",
      },
    },
  },
};

export const WithRadioGroup: Story = {
  name: "With radio group",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4")}>
        <Label>Choose your preferred theme</Label>
        <RadioGroup defaultValue="light" className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <RadioGroupItem value="light" id="light" />
            <Label htmlFor="light">Light</Label>
          </div>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <RadioGroupItem value="dark" id="dark" />
            <Label htmlFor="dark">Dark</Label>
          </div>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <RadioGroupItem value="system" id="system" />
            <Label htmlFor="system">System</Label>
          </div>
        </RadioGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels used with radio buttons for single-choice selections.",
      },
    },
  },
};

export const WithSwitch: Story = {
  name: "With switch",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4")}>
        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>

        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <Switch id="analytics" />
          <Label htmlFor="analytics">Allow analytics tracking</Label>
        </div>

        <div className={cn("adm:flex adm:items-center adm:gap-2")}>
          <Switch id="auto-save" />
          <Label htmlFor="auto-save">Enable auto-save</Label>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels used with switches for toggle controls.",
      },
    },
  },
};

export const WithIcons: Story = {
  name: "With icons",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6")}>
        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="username" className={cn("adm:flex adm:items-center adm:gap-2")}>
            <User className={cn("adm:size-4")} />
            Username
          </Label>
          <Input id="username" placeholder="Enter your username" />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="email-icon" className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Mail className={cn("adm:size-4")} />
            Email Address
          </Label>
          <Input id="email-icon" type="email" placeholder="Enter your email" />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="password" className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Lock className={cn("adm:size-4")} />
            Password
          </Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="birthday" className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Calendar className={cn("adm:size-4")} />
            Date of Birth
          </Label>
          <Input id="birthday" type="date" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels with icons for enhanced visual hierarchy and meaning.",
      },
    },
  },
};

export const WithTextarea: Story = {
  name: "With textarea",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6")}>
        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Type your message here." />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea
            id="feedback"
            placeholder="Please share your feedback..."
            className={cn("adm:min-h-[100px]")}
          />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Provide a detailed description..."
            className={cn("adm:resize-none")}
            rows={4}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels used with textarea elements for multi-line input.",
      },
    },
  },
};

export const WithSelect: Story = {
  name: "With select",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6")}>
        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="country">Country</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="timezone">Timezone</Label>
          <Select>
            <SelectTrigger id="timezone">
              <SelectValue placeholder="Select your timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-8">UTC-8 (Pacific)</SelectItem>
              <SelectItem value="utc-5">UTC-5 (Eastern)</SelectItem>
              <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
              <SelectItem value="utc+1">UTC+1 (CET)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels used with select dropdowns for single-choice selections.",
      },
    },
  },
};

export const Required: Story = {
  name: "Required",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6")}>
        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="required-email">
            Email Address <span className={cn("adm:text-destructive")}>*</span>
          </Label>
          <Input id="required-email" type="email" placeholder="Enter your email" required />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="required-name">
            Full Name <span className={cn("adm:text-destructive")}>*</span>
          </Label>
          <Input id="required-name" placeholder="Enter your full name" required />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label htmlFor="optional-phone">
            Phone Number <span className={cn("adm:text-muted-foreground adm:text-xs")}>(optional)</span>
          </Label>
          <Input id="optional-phone" type="tel" placeholder="Enter your phone number" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Labels indicating required and optional fields with visual indicators.",
      },
    },
  },
};
