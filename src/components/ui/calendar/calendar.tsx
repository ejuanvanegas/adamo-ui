import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@src/lib/utils";
import { Button, buttonVariants } from "@src/components/ui/button";
import type { Theme } from "@src/types/theme.type";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  theme,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  theme?: Theme
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      data-theme={theme}
      showOutsideDays={showOutsideDays}
      className={cn(
        "adm:bg-background adm:group/calendar adm:p-3 adm:[--cell-size:--spacing(8)] adm:[[data-slot=card-content]_&]:bg-transparent adm:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("adm:w-fit", defaultClassNames.root),
        months: cn(
          "adm:flex adm:gap-4 adm:flex-col adm:md:flex-row adm:relative",
          defaultClassNames.months,
        ),
        month: cn("adm:flex adm:flex-col adm:w-full adm:gap-4", defaultClassNames.month),
        nav: cn(
          "adm:flex adm:items-center adm:gap-1 adm:w-full adm:absolute adm:top-0 adm:inset-x-0 adm:justify-between",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "adm:size-(--cell-size) adm:aria-disabled:opacity-50 adm:p-0 adm:select-none",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "adm:size-(--cell-size) adm:aria-disabled:opacity-50 adm:p-0 adm:select-none",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "adm:flex adm:items-center adm:justify-center adm:h-(--cell-size) adm:w-full adm:px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "adm:w-full adm:flex adm:items-center adm:text-sm adm:font-medium adm:justify-center adm:h-(--cell-size) adm:gap-1.5",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "adm:relative adm:has-focus:border-ring adm:border adm:border-input adm:shadow-xs adm:has-focus:ring-ring/50 adm:has-focus:ring-[3px] adm:rounded-md",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          "adm:absolute adm:bg-popover adm:inset-0 adm:opacity-0",
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          "adm:select-none adm:font-medium",
          captionLayout === "label"
            ? "adm:text-sm"
            : "adm:rounded-md adm:pl-2 adm:pr-1 adm:flex adm:items-center adm:gap-1 adm:text-sm adm:h-8 adm:[&>svg]:text-muted-foreground adm:[&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "adm:w-full adm:border-collapse",
        weekdays: cn("adm:flex", defaultClassNames.weekdays),
        weekday: cn(
          "adm:text-muted-foreground adm:rounded-md adm:flex-1 adm:font-normal adm:text-[0.8rem] adm:select-none",
          defaultClassNames.weekday,
        ),
        week: cn("adm:flex adm:w-full adm:mt-2", defaultClassNames.week),
        week_number_header: cn(
          "adm:select-none adm:w-(--cell-size)",
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          "adm:text-[0.8rem] adm:select-none adm:text-muted-foreground",
          defaultClassNames.week_number,
        ),
        day: cn(
          "adm:relative adm:w-full adm:h-full adm:p-0 adm:text-center adm:[&:first-child[data-selected=true]_button]:rounded-l-md adm:[&:last-child[data-selected=true]_button]:rounded-r-md adm:group/day adm:aspect-square adm:select-none",
          defaultClassNames.day,
        ),
        range_start: cn(
          "adm:rounded-l-md adm:bg-accent",
          defaultClassNames.range_start,
        ),
        range_middle: cn("adm:rounded-none", defaultClassNames.range_middle),
        range_end: cn("adm:rounded-r-md adm:bg-accent", defaultClassNames.range_end),
        today: cn(
          "adm:bg-accent adm:text-accent-foreground adm:rounded-md adm:data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "adm:text-muted-foreground adm:aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "adm:text-muted-foreground adm:opacity-50",
          defaultClassNames.disabled,
        ),
        hidden: cn("adm:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("adm:size-4", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("adm:size-4", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("adm:size-4", className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="adm:flex adm:size-(--cell-size) adm:items-center adm:justify-center adm:text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected
        && !modifiers.range_start
        && !modifiers.range_end
        && !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "adm:data-[selected-single=true]:bg-primary adm:data-[selected-single=true]:text-primary-foreground adm:data-[range-middle=true]:bg-accent adm:data-[range-middle=true]:text-accent-foreground adm:data-[range-start=true]:bg-primary adm:data-[range-start=true]:text-primary-foreground adm:data-[range-end=true]:bg-primary adm:data-[range-end=true]:text-primary-foreground adm:group-data-[focused=true]/day:border-ring adm:group-data-[focused=true]/day:ring-ring/50 adm:dark:hover:text-accent-foreground adm:flex adm:aspect-square adm:size-auto adm:w-full adm:min-w-(--cell-size) adm:flex-col adm:gap-1 adm:leading-none adm:font-normal adm:group-data-[focused=true]/day:relative adm:group-data-[focused=true]/day:z-10 adm:group-data-[focused=true]/day:ring-[3px] adm:data-[range-end=true]:rounded-md adm:data-[range-end=true]:rounded-r-md adm:data-[range-middle=true]:rounded-none adm:data-[range-start=true]:rounded-md adm:data-[range-start=true]:rounded-l-md adm:[&>span]:text-xs adm:[&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
