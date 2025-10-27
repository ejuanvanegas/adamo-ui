import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "@src/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Label } from "@src/components/ui/label";
import type { DateRange } from "react-day-picker";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A date field component that allows users to enter and edit date.",
      },
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic calendar with single date selection mode.",
      },
    },
  },
};

export const WithDropdownNavigation: Story = {
  name: "With dropdown navigation",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12));

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with dropdown navigation for easy month and year selection.",
      },
    },
  },
};

export const RangeSelection: Story = {
  name: "Range selection",
  render: function Render() {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(2025, 5, 12),
      to: new Date(2025, 5, 18),
    });

    return (
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with range selection mode allowing users to select date ranges.",
      },
    },
  },
};

export const MultipleMonths: Story = {
  name: "Multiple months",
  render: function Render() {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
      from: new Date(2025, 5, 12),
      to: new Date(2025, 6, 15),
    });

    return (
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar displaying multiple months side by side for easier range selection.",
      },
    },
  },
};

export const MultipleSelection: Story = {
  name: "Multiple selection",
  render: function Render() {
    const [dates, setDates] = useState<Date[] | undefined>([
      new Date(2025, 5, 12),
      new Date(2025, 5, 15),
      new Date(2025, 5, 20),
    ]);

    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar allowing selection of multiple individual dates.",
      },
    },
  },
};

export const WithoutOutsideDays: Story = {
  name: "Without outside days",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays={false}
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar without showing days from adjacent months.",
      },
    },
  },
};

export const WithWeekNumbers: Story = {
  name: "With week numbers",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showWeekNumber
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar displaying week numbers for better date reference.",
      },
    },
  },
};

export const DisabledDates: Story = {
  name: "Disabled dates",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>();

    const disabledDays = [
      new Date(2025, 9, 15),
      new Date(2025, 9, 16),
      new Date(2025, 9, 17),
      { from: new Date(2025, 9, 20), to: new Date(2025, 9, 25) },
    ];

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledDays}
        className={cn("adm:rounded-md adm:border adm:shadow-sm")}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with specific dates and date ranges disabled.",
      },
    },
  },
};

export const InCard: Story = {
  name: "In card",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Card className={cn("adm:w-fit")}>
        <CardHeader>
          <CardTitle>Select Date</CardTitle>
          <CardDescription>
            Choose a date for your appointment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            captionLayout="dropdown"
          />
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar component displayed within a card container.",
      },
    },
  },
};

export const WithTimezone: Story = {
  name: "With timezone",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>();
    const [timeZone, setTimeZone] = useState<string | undefined>();

    // Simulate timezone detection
    useState(() => {
      setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
    });

    return (
      <div className={cn("adm:space-y-2")}>
        <Label className={cn("adm:text-sm adm:font-medium")}>
          Timezone: {timeZone || "Detecting..."}
        </Label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          timeZone={timeZone}
          className={cn("adm:rounded-md adm:border adm:shadow-sm")}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with timezone awareness for accurate date selection.",
      },
    },
  },
};

export const DifferentButtonVariants: Story = {
  name: "Different button variants",
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className={cn("adm:space-y-4")}>
        <div>
          <Label className={cn("adm:text-sm adm:font-medium adm:mb-2 adm:block")}>
            Ghost buttons (default)
          </Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            buttonVariant="ghost"
            className={cn("adm:rounded-md adm:border adm:shadow-sm")}
          />
        </div>
        <div>
          <Label className={cn("adm:text-sm adm:font-medium adm:mb-2 adm:block")}>
            Outline buttons
          </Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            buttonVariant="outline"
            className={cn("adm:rounded-md adm:border adm:shadow-sm")}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Calendar with different button variants for navigation controls.",
      },
    },
  },
};
