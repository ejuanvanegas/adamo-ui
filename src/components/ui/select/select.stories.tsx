import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectValue,
} from "@src/components/ui/select";
import { Label } from "@src/components/ui/label";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays a list of options for the user to pick from—triggered by a button. Built on top of Radix UI Select primitive.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The value of the select when initially rendered. Use when you do not need to control the state.",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the select. Must be used with onValueChange.",
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
    open: {
      control: "boolean",
      description: "The controlled open state of the select. Must be used with onOpenChange.",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "The open state of the select when initially rendered. Use when you do not need to control the open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onOpenChange: {
      description: "Event handler called when the open state changes.",
      control: false,
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      description: "The reading direction of the select. If omitted, inherits from DirectionProvider or defaults to LTR.",
      table: {
        type: { summary: "ltr | rtl" },
      },
    },
    name: {
      control: "text",
      description: "The name of the select. Submitted with its owning form as part of a name/value pair.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the select.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "solid", label: "Solid" },
  { value: "angular", label: "Angular" },
  { value: "ember", label: "Ember" },
] as const;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Select {...args}>
        <SelectTrigger className={cn("adm:w-[180px]")}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic select component with a group of options.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-1.5")}>
        <Label htmlFor="framework">Framework</Label>
        <Select {...args}>
          <SelectTrigger className={cn("adm:w-[180px]")} id="framework">
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((framework) => (
              <SelectItem key={framework.value} value={framework.value}>
                {framework.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A select component with an associated label for better accessibility.",
      },
    },
  },
};

export const Scrollable: Story = {
  render: function Render(args) {
    return (
      <Select {...args}>
        <SelectTrigger className={cn("adm:w-[280px]")}>
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="wita">Indonesia Central Standard Time (WITA)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
            <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
            <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A scrollable select with multiple groups and separators, showcasing the component's ability to handle large lists of options.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <SelectTrigger className={cn("adm:w-[180px]")}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled select that cannot be interacted with.",
      },
    },
  },
};

export const DisabledItems: Story = {
  name: "Disabled items",
  render: function Render(args) {
    return (
      <Select {...args}>
        <SelectTrigger className={cn("adm:w-[180px]")}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="svelte" disabled>
            Svelte (Disabled)
          </SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="solid" disabled>
            Solid (Disabled)
          </SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
        </SelectContent>
      </Select>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A select with specific items disabled while keeping the select itself interactive.",
      },
    },
  },
};

export const SmallSize: Story = {
  name: "Small size",
  render: function Render(args) {
    return (
      <Select {...args}>
        <SelectTrigger className={cn("adm:w-[180px]")} size="sm">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A compact select with the 'sm' size variant for space-constrained layouts.",
      },
    },
  },
};

export const WithError: Story = {
  name: "With error",
  render: function Render(args) {
    return (
      <div className={cn("adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-1.5")}>
        <Label htmlFor="framework-error">Framework</Label>
        <Select {...args}>
          <SelectTrigger
            className={cn("adm:w-[180px]")}
            id="framework-error"
            aria-invalid="true"
          >
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((framework) => (
              <SelectItem key={framework.value} value={framework.value}>
                {framework.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className={cn("adm:text-sm adm:font-medium adm:text-destructive")}>
          Please select a framework
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A select in an error state with validation message. Use aria-invalid to indicate the error state.",
      },
    },
  },
};

export const DefaultValue: Story = {
  name: "Default value",
  args: {
    defaultValue: "react",
  },
  render: function Render(args) {
    return (
      <Select {...args}>
        <SelectTrigger className={cn("adm:w-[180px]")}>
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          {frameworks.map((framework) => (
            <SelectItem key={framework.value} value={framework.value}>
              {framework.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A select with a default value set when initially rendered.",
      },
    },
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className={cn("adm:space-y-4")}>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className={cn("adm:w-[180px]")}>
            <SelectValue placeholder="Select framework" />
          </SelectTrigger>
          <SelectContent>
            {frameworks.map((framework) => (
              <SelectItem key={framework.value} value={framework.value}>
                {framework.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className={cn("adm:text-sm adm:text-muted-foreground")}>
          Selected value: {value || "None"}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled select where the value is managed externally using the value and onValueChange props.",
      },
    },
  },
};
