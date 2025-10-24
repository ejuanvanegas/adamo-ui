import { ThemableSection } from "@app/contexts/themable-section";
import { Calendar } from "@src/components/ui/calendar";

import { cn } from "@src/lib/utils";
import { useState, type ComponentProps } from "react";
import type { DateRange } from "react-day-picker";

export type CalendarSectionProps = Readonly<ComponentProps<typeof ThemableSection>>;

export function CalendarSection({ className, ...props }: Omit<CalendarSectionProps, "title">) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <ThemableSection title="Calendar" className={cn(className)} {...props}>
      <div className="adm:space-y-4">
        <div>
          <h3 className="adm:font-medium adm:mb-2">Single</h3>
          <div className="adm:flex adm:gap-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
              captionLayout="dropdown"
            />
          </div>
        </div>
        <div>
          <h3 className="adm:font-medium adm:mb-2">Range</h3>
          <div className="adm:flex adm:gap-4">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              className="rounded-md border shadow-sm"
              captionLayout="dropdown"
            />
          </div>
        </div>
      </div>
    </ThemableSection>
  );
}
