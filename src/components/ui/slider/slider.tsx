import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@src/lib/utils";

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "adm:relative adm:flex adm:w-full adm:touch-none adm:items-center adm:select-none adm:data-[disabled]:opacity-50 adm:data-[orientation=vertical]:h-full adm:data-[orientation=vertical]:min-h-44 adm:data-[orientation=vertical]:w-auto adm:data-[orientation=vertical]:flex-col",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "adm:bg-muted adm:relative adm:grow adm:overflow-hidden adm:rounded-full adm:data-[orientation=horizontal]:h-1.5 adm:data-[orientation=horizontal]:w-full adm:data-[orientation=vertical]:h-full adm:data-[orientation=vertical]:w-1.5",
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "adm:bg-primary adm:absolute adm:data-[orientation=horizontal]:h-full adm:data-[orientation=vertical]:w-full",
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="adm:border-primary adm:ring-ring/50 adm:block adm:size-4 adm:shrink-0 adm:rounded-full adm:border adm:bg-white adm:shadow-sm adm:transition-[color,box-shadow] adm:hover:ring-4 adm:focus-visible:ring-4 adm:focus-visible:outline-hidden adm:disabled:pointer-events-none adm:disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
