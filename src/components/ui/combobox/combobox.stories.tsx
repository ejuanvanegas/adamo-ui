import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Combobox } from "@src/components/ui/combobox/combobox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@src/components/ui/field";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A searchable combobox component that supports both single and multiple selection with customizable feedback options.",
      },
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
];

const countries = [
  {
    value: "us",
    label: "United States",
  },
  {
    value: "ca",
    label: "Canada",
  },
  {
    value: "mx",
    label: "Mexico",
  },
  {
    value: "uk",
    label: "United Kingdom",
  },
  {
    value: "de",
    label: "Germany",
  },
  {
    value: "fr",
    label: "France",
  },
  {
    value: "jp",
    label: "Japan",
  },
  {
    value: "au",
    label: "Australia",
    disabled: true,
  },
];

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Combobox
        options={frameworks}
        labels={{
          placeholder: "Select framework...",
          searchPlaceholder: "Search framework...",
          noItemsFound: "No framework found.",
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "The default combobox with basic options and search functionality.",
      },
    },
  },
};

export const Searchable: Story = {
  name: "Searchable",
  render: function Render() {
    return (
      <Combobox
        searchable
        options={frameworks}
        labels={{
          placeholder: "Select framework...",
          searchPlaceholder: "Search frameworks...",
          noItemsFound: "No framework found.",
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A combobox with search functionality enabled for filtering options.",
      },
    },
  },
};

export const Multiple: Story = {
  name: "Multiple",
  render: function Render() {
    return (
      <Combobox
        searchable
        multiple
        options={frameworks}
        labels={{
          placeholder: "Select frameworks...",
          searchPlaceholder: "Search frameworks...",
          noItemsFound: "No frameworks found.",
          multipleSelected: (count) => `${count} frameworks selected`,
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A combobox that allows multiple selection with checkboxes for visual feedback.",
      },
    },
  },
};

export const WithCheckFeedback: Story = {
  name: "With check feedback",
  render: function Render() {
    return (
      <Combobox
        searchable
        options={frameworks}
        selectedFeedback="check"
        labels={{
          placeholder: "Select framework...",
          searchPlaceholder: "Search frameworks...",
          noItemsFound: "No framework found.",
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A combobox using check icons for selected feedback instead of checkboxes.",
      },
    },
  },
};

export const MultipleWithCheckFeedback: Story = {
  name: "Multiple with check feedback",
  render: function Render() {
    return (
      <Combobox
        searchable
        multiple
        options={frameworks}
        selectedFeedback="check"
        labels={{
          placeholder: "Select frameworks...",
          searchPlaceholder: "Search frameworks...",
          noItemsFound: "No frameworks found.",
          multipleSelected: (count) => `${count} frameworks selected`,
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A multiple selection combobox using check icons for feedback instead of checkboxes.",
      },
    },
  },
};

export const WithDisabledOptions: Story = {
  name: "With disabled options",
  render: function Render() {
    return (
      <Combobox
        searchable
        options={countries}
        labels={{
          placeholder: "Select country...",
          searchPlaceholder: "Search countries...",
          noItemsFound: "No country found.",
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A combobox with some disabled options that cannot be selected.",
      },
    },
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [value, setValue] = useState<string>("");

    return (
      <div className="adm:space-y-4">
        <Combobox
          searchable
          options={frameworks}
          value={value}
          onValueChange={(newValue) => setValue(newValue as string)}
          labels={{
            placeholder: "Select framework...",
            searchPlaceholder: "Search frameworks...",
            noItemsFound: "No framework found.",
          }}
        />
        <p className="adm:text-sm adm:text-muted-foreground">
          Selected: {value || "None"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled combobox where the selected value is managed by external state.",
      },
    },
  },
};

export const ControlledMultiple: Story = {
  name: "Controlled multiple",
  render: function Render() {
    const [values, setValues] = useState<string[]>([]);

    return (
      <div className="adm:space-y-4">
        <Combobox
          searchable
          multiple
          options={frameworks}
          value={values}
          onValueChange={(newValues) => setValues(newValues as string[])}
          labels={{
            placeholder: "Select frameworks...",
            searchPlaceholder: "Search frameworks...",
            noItemsFound: "No frameworks found.",
            multipleSelected: (count) => `${count} frameworks selected`,
          }}
        />
        <div className="adm:space-y-2">
          <p className="adm:text-sm adm:text-muted-foreground">
            Selected: {values.length > 0 ? values.join(", ") : "None"}
          </p>
          {values.length > 0 && (
            <button
              type="button"
              onClick={() => setValues([])}
              className="adm:text-xs adm:text-blue-600 hover:adm:text-blue-800 adm:underline"
            >
              Clear all
            </button>
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A controlled multiple selection combobox with external state management and clear functionality.",
      },
    },
  },
};

export const CustomLabels: Story = {
  name: "Custom labels",
  render: function Render() {
    return (
      <Combobox
        searchable
        multiple
        options={frameworks}
        labels={{
          placeholder: "Choose your tech stack...",
          searchPlaceholder: "Type to filter technologies...",
          noItemsFound: "No matching technologies found.",
          multipleSelected: (count) => `${count} ${count === 1 ? "technology" : "technologies"} chosen`,
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A combobox with custom labels for all text elements including dynamic pluralization.",
      },
    },
  },
};

export const CustomStyling: Story = {
  name: "Custom styling",
  render: function Render() {
    return (
      <Combobox
        searchable
        multiple
        options={frameworks}
        selectedFeedback="check"
        classNames={{
          trigger: "adm:border-2 adm:border-blue-500 adm:rounded-lg adm:w-64",
          popover: "adm:border adm:border-blue-200 adm:shadow-xs",
          command: "adm:rounded-lg",
          input: "adm:border-none adm:focus:ring-0 adm:placeholder:text-blue-400",
          item: "adm:rounded adm:px-3 adm:py-2 hover:adm:bg-blue-50 adm:text-sm",
          check: "adm:text-blue-600",
        }}
        labels={{
          placeholder: "Choose frameworks...",
          searchPlaceholder: "Search technologies...",
          noItemsFound: "No technologies found.",
          multipleSelected: (count) => `${count} selected`,
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A combobox with extensive custom styling applied to all internal components.",
      },
    },
  },
};

export const InForm: Story = {
  name: "In form",
  render: function Render() {
    const [framework, setFramework] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    return (
      <Card className="adm:w-96">
        <CardHeader>
          <CardTitle>Project Setup</CardTitle>
          <CardDescription>
            Configure your project preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="framework">Framework</FieldLabel>
              <Combobox
                searchable
                options={frameworks}
                value={framework}
                onValueChange={(value) => setFramework(value as string)}
                labels={{
                  placeholder: "Select framework...",
                  searchPlaceholder: "Search frameworks...",
                  noItemsFound: "No framework found.",
                }}
              />
            </Field>
          </FieldGroup>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="country">Country</FieldLabel>
              <Combobox
                searchable
                options={countries}
                value={country}
                onValueChange={(value) => setCountry(value as string)}
                selectedFeedback="check"
                labels={{
                  placeholder: "Select country...",
                  searchPlaceholder: "Search countries...",
                  noItemsFound: "No country found.",
                }}
              />
            </Field>
          </FieldGroup>

          <div className="adm:pt-4 adm:border-t">
            <h4 className="adm:text-sm adm:font-medium adm:mb-2">Selected Values:</h4>
            <p className="adm:text-xs adm:text-muted-foreground">
              Framework: {framework || "None"}
            </p>
            <p className="adm:text-xs adm:text-muted-foreground">
              Country: {country || "None"}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Comboboxes integrated within a form with labels and proper form structure.",
      },
    },
  },
};
