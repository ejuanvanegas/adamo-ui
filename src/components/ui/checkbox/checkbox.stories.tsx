import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@src/components/ui/checkbox";
import { Label } from "@src/components/ui/label";
import { Button } from "@src/components/ui/button";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return <Checkbox />;
  },
  parameters: {
    docs: {
      description: {
        story: "A basic checkbox in its default state.",
      },
    },
  },
};

export const Checked: Story = {
  name: "Checked",
  render: function Render() {
    return <Checkbox defaultChecked />;
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox in its checked state by default.",
      },
    },
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:flex adm:gap-4">
        <Checkbox disabled />
        <Checkbox disabled defaultChecked />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled checkboxes in both unchecked and checked states.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox with an associated label for better accessibility.",
      },
    },
  },
};

export const WithDescription: Story = {
  name: "With description",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-start adm:gap-3">
        <Checkbox id="terms-desc" defaultChecked />
        <div className="adm:grid adm:gap-2">
          <Label htmlFor="terms-desc">Accept terms and conditions</Label>
          <p className="adm:text-muted-foreground adm:text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox with a label and descriptive text providing additional context.",
      },
    },
  },
};

export const Interactive: Story = {
  name: "Interactive",
  render: function Render() {
    const [checked, setChecked] = useState(false);

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:gap-3">
          <Checkbox
            id="interactive"
            checked={checked}
            onCheckedChange={(value) => setChecked(value as boolean)}
          />
          <Label htmlFor="interactive">Enable notifications</Label>
        </div>
        <p className="adm:text-sm adm:text-muted-foreground">
          Checkbox is {checked ? "checked" : "unchecked"}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An interactive checkbox with controlled state showing the current value.",
      },
    },
  },
};

export const MultipleOptions: Story = {
  name: "Multiple options",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:gap-3">
          <Checkbox id="option1" />
          <Label htmlFor="option1">Email notifications</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <Checkbox id="option2" defaultChecked />
          <Label htmlFor="option2">SMS notifications</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <Checkbox id="option3" />
          <Label htmlFor="option3">Push notifications</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <Checkbox id="option4" disabled />
          <Label htmlFor="option4">Newsletter (coming soon)</Label>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple checkbox options in a group with different states.",
      },
    },
  },
};

export const FormField: Story = {
  name: "Form field",
  render: function Render() {
    const [preferences, setPreferences] = useState({
      marketing: false,
      analytics: true,
      social: false,
    });

    const handlePreferenceChange = (key: keyof typeof preferences, checked: boolean) => {
      setPreferences((prev) => ({
        ...prev,
        [key]: checked,
      }));
    };

    return (
      <div className="adm:space-y-6 adm:max-w-md">
        <div>
          <h3 className="adm:text-lg adm:font-semibold">Privacy Preferences</h3>
          <p className="adm:text-sm adm:text-muted-foreground">
            Choose which data you'd like to share with us.
          </p>
        </div>

        <div className="adm:space-y-4">
          <div className="adm:flex adm:items-start adm:gap-3">
            <Checkbox
              id="marketing"
              checked={preferences.marketing}
              onCheckedChange={(checked) => handlePreferenceChange("marketing", checked as boolean)}
            />
            <div className="adm:grid adm:gap-1">
              <Label htmlFor="marketing">Marketing communications</Label>
              <p className="adm:text-sm adm:text-muted-foreground">
                Receive emails about new products and features.
              </p>
            </div>
          </div>

          <div className="adm:flex adm:items-start adm:gap-3">
            <Checkbox
              id="analytics"
              checked={preferences.analytics}
              onCheckedChange={(checked) => handlePreferenceChange("analytics", checked as boolean)}
            />
            <div className="adm:grid adm:gap-1">
              <Label htmlFor="analytics">Analytics</Label>
              <p className="adm:text-sm adm:text-muted-foreground">
                Help us improve our service with usage analytics.
              </p>
            </div>
          </div>

          <div className="adm:flex adm:items-start adm:gap-3">
            <Checkbox
              id="social"
              checked={preferences.social}
              onCheckedChange={(checked) => handlePreferenceChange("social", checked as boolean)}
            />
            <div className="adm:grid adm:gap-1">
              <Label htmlFor="social">Social media integration</Label>
              <p className="adm:text-sm adm:text-muted-foreground">
                Connect with your social media accounts.
              </p>
            </div>
          </div>
        </div>

        <Button className="adm:w-full">
          Save Preferences
        </Button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A complete form using checkboxes for user preferences with controlled state.",
      },
    },
  },
};

export const CardLayout: Story = {
  name: "Card layout",
  render: function Render() {
    return (
      <Label className="adm:hover:bg-accent/50 adm:flex adm:items-start adm:gap-3 adm:rounded-lg adm:border adm:p-4 adm:has-aria-checked:border-primary adm:has-aria-checked:bg-primary/5 adm:cursor-pointer adm:transition-colors">
        <Checkbox
          id="card-checkbox"
          defaultChecked
          className="adm:data-[state=checked]:border-primary adm:data-[state=checked]:bg-primary adm:data-[state=checked]:text-primary-foreground"
        />
        <div className="adm:grid adm:gap-1.5 adm:font-normal">
          <p className="adm:text-sm adm:leading-none adm:font-medium">
            Enable notifications
          </p>
          <p className="adm:text-muted-foreground adm:text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A checkbox presented in a card-like layout with hover and checked states.",
      },
    },
  },
};

export const Indeterminate: Story = {
  name: "Indeterminate",
  render: function Render() {
    const [checkedItems, setCheckedItems] = useState([false, true, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    const handleParentChange = (checked: boolean) => {
      setCheckedItems([checked, checked, checked]);
    };

    const handleChildChange = (index: number, checked: boolean) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = checked;
      setCheckedItems(newCheckedItems);
    };

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:gap-3">
          <Checkbox
            id="parent"
            checked={allChecked ? true : isIndeterminate ? "indeterminate" : false}
            onCheckedChange={handleParentChange}
          />
          <Label htmlFor="parent" className="adm:font-medium">
            Select all items
          </Label>
        </div>

        <div className="adm:ml-6 adm:space-y-3">
          <div className="adm:flex adm:items-center adm:gap-3">
            <Checkbox
              id="item1"
              checked={checkedItems[0]}
              onCheckedChange={(checked) => handleChildChange(0, checked as boolean)}
            />
            <Label htmlFor="item1">Item 1</Label>
          </div>

          <div className="adm:flex adm:items-center adm:gap-3">
            <Checkbox
              id="item2"
              checked={checkedItems[1]}
              onCheckedChange={(checked) => handleChildChange(1, checked as boolean)}
            />
            <Label htmlFor="item2">Item 2</Label>
          </div>

          <div className="adm:flex adm:items-center adm:gap-3">
            <Checkbox
              id="item3"
              checked={checkedItems[2]}
              onCheckedChange={(checked) => handleChildChange(2, checked as boolean)}
            />
            <Label htmlFor="item3">Item 3</Label>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A parent checkbox with indeterminate state when some but not all children are selected.",
      },
    },
  },
};
