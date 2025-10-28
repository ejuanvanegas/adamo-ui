import { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/ui/popover";
import { Checkbox } from "@src/components/ui/checkbox";

type ComboboxOption = {
  value: string
  label: string
  disabled?: boolean
};

type ComboboxLabels = {
  placeholder?: string
  searchPlaceholder?: string
  noItemsFound?: string
  multipleSelected?: (count: number) => string
};

type ComboboxClassNames = {
  trigger?: string
  popover?: string
  command?: string
  input?: string
  list?: string
  empty?: string
  group?: string
  item?: string
  checkbox?: string
  check?: string
};

type ComboboxProps = Readonly<{
  searchable?: boolean
  multiple?: boolean
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  labels?: ComboboxLabels
  options: ComboboxOption[]
  classNames?: ComboboxClassNames
  selectedFeedback?: "checkbox" | "check"
}>;

function Combobox({
  searchable,
  multiple,
  value: controlledValue,
  onValueChange,
  labels,
  options,
  classNames,
  selectedFeedback = "checkbox",
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | string[]>(multiple ? [] : "");

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  // Default labels with customizable overrides
  const defaultLabels: ComboboxLabels = {
    placeholder: multiple ? "Select options..." : "Select options...",
    searchPlaceholder: "Search options...",
    noItemsFound: "No options found.",
    multipleSelected: (count: number) => `${count} options selected`,
  };

  const mergedLabels = { ...defaultLabels, ...labels };

  const handleValueChange = (newValue: string | string[]) => {
    if (onValueChange) {
      onValueChange(newValue);
    }
    else {
      setInternalValue(newValue);
    }
  };

  const getDisplayText = () => {
    if (multiple && Array.isArray(value)) {
      if (value.length === 0) return mergedLabels.placeholder;

      if (value.length === 1) {
        return options.find((option) => option.value === value[0])?.label;
      }

      return mergedLabels.multipleSelected?.(value.length) || `${value.length} options selected`;
    }

    if (!multiple && typeof value === "string") {
      return value
        ? options.find((option) => option.value === value)?.label
        : mergedLabels.placeholder;
    }

    return mergedLabels.placeholder;
  };

  const isSelected = (frameworkValue: string) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(frameworkValue);
    }

    return value === frameworkValue;
  };

  const handleSelect = (currentValue: string) => {
    if (multiple) {
      const currentArray = Array.isArray(value) ? value : [];

      const newValue = currentArray.includes(currentValue)
        ? currentArray.filter((v) => v !== currentValue)
        : [...currentArray, currentValue];

      handleValueChange(newValue);
    }
    else {
      const newValue = currentValue === value ? "" : currentValue;

      handleValueChange(newValue);

      setOpen(false);
    }
  };

  const renderSelectedFeedback = (optionValue: string) => {
    const isOptionSelected = isSelected(optionValue);

    if (selectedFeedback === "check") {
      return (
        <span className={cn("adm:absolute adm:right-2 adm:flex adm:size-3.5 adm:items-center adm:justify-center", classNames?.check)}>
          {isOptionSelected && <CheckIcon className="adm:size-4" />}
        </span>
      );
    }

    return (
      <Checkbox
        checked={isOptionSelected}
        className={classNames?.checkbox}
      />
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("adm:justify-between adm:font-normal", classNames?.trigger)}
        >
          {getDisplayText()}
          <ChevronDownIcon className="adm:size-4 adm:opacity-50" />
          {/* <ChevronsUpDownIcon className="adm:ml-2 adm:h-4 adm:w-4 adm:shrink-0 adm:opacity-50" /> */}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className={cn("adm:p-0", classNames?.popover)}>
        <Command className={classNames?.command}>
          {searchable && (
            <CommandInput
              placeholder={mergedLabels.searchPlaceholder}
              className={classNames?.input}
            />
          )}
          <CommandList className={classNames?.list}>
            <CommandEmpty className={classNames?.empty}>{mergedLabels.noItemsFound}</CommandEmpty>
            <CommandGroup className={classNames?.group}>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                  disabled={option.disabled}
                  className={cn(
                    classNames?.item,
                    selectedFeedback === "check" && "adm:pr-8",
                  )}
                >
                  {selectedFeedback === "checkbox" && renderSelectedFeedback(option.value)}
                  {option.label}
                  {selectedFeedback === "check" && renderSelectedFeedback(option.value)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { Combobox };
