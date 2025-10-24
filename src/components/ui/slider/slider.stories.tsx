import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@src/components/ui/slider";
import { cn } from "@src/lib/utils";
import { useState } from "react";
import { THEMES } from "@src/types/theme.type";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An input where the user selects a value from within a given range. Built on top of Radix UI Slider primitive.",
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: "The value(s) of the slider when initially rendered. Use when you do not need to control the state. For a range slider, provide an array with two values.",
      control: "object",
      table: {
        type: { summary: "number[]" },
      },
    },
    value: {
      description: "The controlled value(s) of the slider. Must be used with onValueChange.",
      control: "object",
      table: {
        type: { summary: "number[]" },
      },
    },
    onValueChange: {
      description: "Event handler called when the slider value changes.",
      control: false,
      table: {
        type: { summary: "(value: number[]) => void" },
      },
    },
    onValueCommit: {
      description: "Event handler called when the value changes at the end of an interaction. Useful for expensive operations.",
      control: false,
      table: {
        type: { summary: "(value: number[]) => void" },
      },
    },
    min: {
      description: "The minimum value for the slider range.",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      description: "The maximum value for the slider range.",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    step: {
      description: "The stepping interval. The slider value will always be a multiple of this number.",
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    orientation: {
      description: "The orientation of the slider.",
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
    disabled: {
      description: "When true, prevents the user from interacting with the slider.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    dir: {
      control: "radio",
      options: ["ltr", "rtl"],
      description: "The reading direction of the slider. If omitted, inherits from DirectionProvider or defaults to LTR.",
      table: {
        type: { summary: "ltr | rtl" },
      },
    },
    inverted: {
      control: "boolean",
      description: "Whether the slider should be visually inverted.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    minStepsBetweenThumbs: {
      control: { type: "number" },
      description: "The minimum permitted steps between multiple thumbs in a range slider.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    theme: {
      control: { type: "select" },
      options: THEMES,
      description: "The theme variant to use.",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic slider with default min (0) and max (100) values.",
      },
    },
  },
};

export const CustomRange: Story = {
  name: "Custom range",
  args: {
    defaultValue: [20],
    min: 0,
    max: 200,
    step: 10,
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A slider with custom min, max, and step values.",
      },
    },
  },
};

export const Steps: Story = {
  args: {
    defaultValue: [40],
    step: 20,
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The slider can be configured with a custom step value to enforce specific value increments.",
      },
    },
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The slider can be used to select a range of values by providing an array with two values.",
      },
    },
  },
};

export const MinStepsBetweenThumbs: Story = {
  name: "Min steps between thumbs",
  args: {
    defaultValue: [25, 75],
    minStepsBetweenThumbs: 10,
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Enforce a minimum distance between thumbs in a range slider using minStepsBetweenThumbs.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "When disabled, the slider cannot be interacted with and displays reduced opacity.",
      },
    },
  },
};

export const Vertical: Story = {
  args: {
    defaultValue: [50],
    orientation: "vertical",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:h-[200px]")}>
        <Slider
          {...args}
          className={cn("adm:h-full")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The slider can be displayed vertically by setting the orientation prop to 'vertical'.",
      },
    },
  },
};

export const VerticalRange: Story = {
  name: "Vertical range",
  args: {
    defaultValue: [25, 75],
    orientation: "vertical",
  },
  render: function Render(args) {
    return (
      <div className={cn("adm:h-[200px]")}>
        <Slider
          {...args}
          className={cn("adm:h-full")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A vertical range slider with two thumbs.",
      },
    },
  },
};

export const Inverted: Story = {
  args: {
    defaultValue: [50],
    inverted: true,
  },
  render: function Render(args) {
    return (
      <Slider
        {...args}
        className={cn("adm:w-96")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An inverted slider where the range fills from the opposite direction.",
      },
    },
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [value, setValue] = useState([50]);

    return (
      <div className={cn("adm:space-y-4")}>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          className={cn("adm:w-96")}
        />
        <div className={cn("adm:text-sm adm:text-muted-foreground")}>
          Value: {value[0]}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled slider where the value is managed externally using the value and onValueChange props.",
      },
    },
  },
};

export const ControlledRange: Story = {
  name: "Controlled range",
  render: function Render() {
    const [value, setValue] = useState([25, 75]);

    return (
      <div className={cn("adm:space-y-4")}>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          className={cn("adm:w-96")}
        />
        <div className={cn("adm:text-sm adm:text-muted-foreground")}>
          Range: {value[0]} - {value[1]}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled range slider with externally managed state showing the current range values.",
      },
    },
  },
};

export const OnValueCommit: Story = {
  name: "On value commit",
  render: function Render() {
    const [value, setValue] = useState([50]);
    const [committedValue, setCommittedValue] = useState([50]);

    return (
      <div className={cn("adm:space-y-4")}>
        <Slider
          value={value}
          onValueChange={setValue}
          onValueCommit={setCommittedValue}
          max={100}
          step={1}
          className={cn("adm:w-96")}
        />
        <div className={cn("adm:flex adm:gap-4 adm:text-sm")}>
          <div className={cn("adm:text-muted-foreground")}>
            Current: {value[0]}
          </div>
          <div className={cn("adm:text-muted-foreground")}>
            Committed: {committedValue[0]}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The onValueCommit handler is called when the user stops dragging, useful for expensive operations that should only run when the value is finalized.",
      },
    },
  },
};
