import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "@src/components/ui/calendar";
import { useState } from "react";
import { addDays } from "date-fns";
import { type DateRange as DateRangeType } from "react-day-picker";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A date picker component built on top of react-day-picker with support for ranges, multiple months, and custom styling.",
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const Example = () => {
      const [date, setDate] = useState<Date | undefined>(new Date());
      return (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="adm:rounded-md adm:border"
        />
      );
    };
    return <Example />;
  },
};

export const DateRange: Story = {
  render: () => {
    const Example = () => {
      const [date, setDate] = useState<DateRangeType | undefined>({
        from: new Date(),
        to: addDays(new Date(), 7),
      });
      return (
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
      );
    };
    return <Example />;
  },
};

export const MultipleMonths: Story = {
  render: () => (
    <Calendar
      mode="single"
      selected={new Date()}
      className="adm:rounded-md adm:border"
      numberOfMonths={2}
    />
  ),
};

export const WithWeekNumbers: Story = {
  render: () => (
    <Calendar
      mode="single"
      selected={new Date()}
      className="adm:rounded-md adm:border"
      showWeekNumber
    />
  ),
};

export const WithCustomCaption: Story = {
  render: () => (
    <Calendar
      mode="single"
      selected={new Date()}
      className="adm:rounded-md adm:border"
      captionLayout="dropdown"
    />
  ),
};

export const Disabled: Story = {
  render: () => {
    return (
      <Calendar
        mode="single"
        className="adm:rounded-md adm:border"
        disabled={true}
      />
    );
  },
};
