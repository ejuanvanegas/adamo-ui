import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@src/components/ui/button";
import { Label } from "@src/components/ui/label";
import { Badge } from "@src/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@src/components/ui/radio-group";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <RadioGroup defaultValue="option-one">
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const WithDescriptions: Story = {
  name: "With descriptions",
  render: function Render() {
    return (
      <RadioGroup defaultValue="comfortable">
        <div className="adm:flex adm:items-start adm:gap-3">
          <RadioGroupItem value="default" id="default" />
          <div className="adm:grid adm:gap-2">
            <Label htmlFor="default">Default</Label>
            <p className="adm:text-muted-foreground adm:text-sm">
              Recommended for most users. Provides a balanced experience.
            </p>
          </div>
        </div>
        <div className="adm:flex adm:items-start adm:gap-3">
          <RadioGroupItem value="comfortable" id="comfortable" />
          <div className="adm:grid adm:gap-2">
            <Label htmlFor="comfortable">Comfortable</Label>
            <p className="adm:text-muted-foreground adm:text-sm">
              More spacing and larger elements for better accessibility.
            </p>
          </div>
        </div>
        <div className="adm:flex adm:items-start adm:gap-3">
          <RadioGroupItem value="compact" id="compact" />
          <div className="adm:grid adm:gap-2">
            <Label htmlFor="compact">Compact</Label>
            <p className="adm:text-muted-foreground adm:text-sm">
              Minimal spacing to show more content at once.
            </p>
          </div>
        </div>
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [value, setValue] = useState("red");

    return (
      <div className="adm:space-y-4">
        <div>
          <p className="adm:text-sm adm:font-medium">Selected: {value}</p>
        </div>
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="adm:flex adm:items-center adm:gap-3">
            <RadioGroupItem value="red" id="red" />
            <Label htmlFor="red">Red</Label>
          </div>
          <div className="adm:flex adm:items-center adm:gap-3">
            <RadioGroupItem value="green" id="green" />
            <Label htmlFor="green">Green</Label>
          </div>
          <div className="adm:flex adm:items-center adm:gap-3">
            <RadioGroupItem value="blue" id="blue" />
            <Label htmlFor="blue">Blue</Label>
          </div>
        </RadioGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <RadioGroup defaultValue="option-one" disabled>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="option-one" id="disabled-one" />
          <Label htmlFor="disabled-one">Option One</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="option-two" id="disabled-two" />
          <Label htmlFor="disabled-two">Option Two</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="option-three" id="disabled-three" />
          <Label htmlFor="disabled-three">Option Three</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const WithBadges: Story = {
  name: "With badges",
  render: function Render() {
    return (
      <RadioGroup defaultValue="pro">
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="free" id="free" />
          <div className="adm:flex adm:items-center adm:gap-2">
            <Label htmlFor="free">Free Plan</Label>
            <Badge variant="secondary">$0/month</Badge>
          </div>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="pro" id="pro" />
          <div className="adm:flex adm:items-center adm:gap-2">
            <Label htmlFor="pro">Pro Plan</Label>
            <Badge variant="default">$9/month</Badge>
          </div>
        </div>
        <div className="adm:flex adm:items-center adm:gap-3">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <div className="adm:flex adm:items-center adm:gap-2">
            <Label htmlFor="enterprise">Enterprise Plan</Label>
            <Badge variant="destructive">$99/month</Badge>
          </div>
        </div>
      </RadioGroup>
    );
  },
};

export const WithForm: Story = {
  name: "With form",
  render: function Render() {
    const [formData, setFormData] = useState({
      notification: "email",
      frequency: "weekly",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    };

    return (
      <form onSubmit={handleSubmit} className="adm:space-y-6">
        <div className="adm:space-y-4">
          <h3 className="adm:text-lg adm:font-semibold">Notification Preferences</h3>

          <div className="adm:space-y-3">
            <p className="adm:text-sm adm:font-medium">Notification method</p>
            <RadioGroup
              value={formData.notification}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, notification: value }))}
            >
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email">Email notifications</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="sms" id="sms" />
                <Label htmlFor="sms">SMS notifications</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="push" id="push" />
                <Label htmlFor="push">Push notifications</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="adm:space-y-3">
            <p className="adm:text-sm adm:font-medium">Frequency</p>
            <RadioGroup
              value={formData.frequency}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, frequency: value }))}
            >
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="daily" id="daily" />
                <Label htmlFor="daily">Daily</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">Weekly</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">Monthly</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button type="submit">Save preferences</Button>
      </form>
    );
  },
};

export const HorizontalLayout: Story = {
  name: "Horizontal layout",
  render: function Render() {
    return (
      <RadioGroup defaultValue="medium" className="adm:flex adm:gap-6">
        <div className="adm:flex adm:items-center adm:gap-2">
          <RadioGroupItem value="small" id="small" />
          <Label htmlFor="small">Small</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-2">
          <RadioGroupItem value="medium" id="medium" />
          <Label htmlFor="medium">Medium</Label>
        </div>
        <div className="adm:flex adm:items-center adm:gap-2">
          <RadioGroupItem value="large" id="large" />
          <Label htmlFor="large">Large</Label>
        </div>
      </RadioGroup>
    );
  },
};

export const NestedRadioGroups: Story = {
  name: "Nested radio groups",
  render: function Render() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [cardType, setCardType] = useState("visa");
    const [bankType, setBankType] = useState("checking");

    return (
      <div className="adm:space-y-6">
        <div className="adm:space-y-3">
          <p className="adm:text-sm adm:font-medium">Payment method</p>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="adm:flex adm:items-center adm:gap-3">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Credit/Debit Card</Label>
            </div>
            <div className="adm:flex adm:items-center adm:gap-3">
              <RadioGroupItem value="bank" id="bank" />
              <Label htmlFor="bank">Bank Transfer</Label>
            </div>
            <div className="adm:flex adm:items-center adm:gap-3">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal">PayPal</Label>
            </div>
          </RadioGroup>
        </div>

        {paymentMethod === "card" && (
          <div className="adm:ml-6 adm:space-y-3">
            <p className="adm:text-sm adm:font-medium">Card type</p>
            <RadioGroup value={cardType} onValueChange={setCardType}>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="visa" id="visa" />
                <Label htmlFor="visa">Visa</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="mastercard" id="mastercard" />
                <Label htmlFor="mastercard">Mastercard</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="amex" id="amex" />
                <Label htmlFor="amex">American Express</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="adm:ml-6 adm:space-y-3">
            <p className="adm:text-sm adm:font-medium">Account type</p>
            <RadioGroup value={bankType} onValueChange={setBankType}>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="checking" id="checking" />
                <Label htmlFor="checking">Checking Account</Label>
              </div>
              <div className="adm:flex adm:items-center adm:gap-3">
                <RadioGroupItem value="savings" id="savings" />
                <Label htmlFor="savings">Savings Account</Label>
              </div>
            </RadioGroup>
          </div>
        )}
      </div>
    );
  },
};

export const WithCustomStyling: Story = {
  name: "With custom styling",
  render: function Render() {
    return (
      <RadioGroup defaultValue="theme-1" className="adm:grid adm:grid-cols-2 adm:gap-4">
        <div className="adm:space-y-2">
          <div className="adm:flex adm:items-center adm:gap-3">
            <RadioGroupItem value="theme-1" id="theme-1" />
            <Label htmlFor="theme-1">Light Theme</Label>
          </div>
          <div className="adm:ml-7 adm:p-3 adm:border adm:rounded-lg adm:bg-background">
            <div className="adm:h-8 adm:w-full adm:bg-muted adm:rounded adm:mb-2" />
            <div className="adm:space-y-1">
              <div className="adm:h-2 adm:w-3/4 adm:bg-muted adm:rounded" />
              <div className="adm:h-2 adm:w-1/2 adm:bg-muted adm:rounded" />
            </div>
          </div>
        </div>

        <div className="adm:space-y-2">
          <div className="adm:flex adm:items-center adm:gap-3">
            <RadioGroupItem value="theme-2" id="theme-2" />
            <Label htmlFor="theme-2">Dark Theme</Label>
          </div>
          <div className="adm:ml-7 adm:p-3 adm:border adm:rounded-lg adm:bg-slate-900">
            <div className="adm:h-8 adm:w-full adm:bg-slate-700 adm:rounded adm:mb-2" />
            <div className="adm:space-y-1">
              <div className="adm:h-2 adm:w-3/4 adm:bg-slate-700 adm:rounded" />
              <div className="adm:h-2 adm:w-1/2 adm:bg-slate-700 adm:rounded" />
            </div>
          </div>
        </div>
      </RadioGroup>
    );
  },
};
