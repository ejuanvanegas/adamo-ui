import type { Meta, StoryObj } from "@storybook/react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@src/components/ui/field";
import { Input } from "@src/components/ui/input";
import { Button } from "@src/components/ui/button";
import { Textarea } from "@src/components/ui/textarea";
import { Switch } from "@src/components/ui/switch";
import { Checkbox } from "@src/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@src/components/ui/radio-group";
import { Slider } from "@src/components/ui/slider";
import { useState } from "react";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>This appears on invoices and emails.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
            <FieldDescription>This appears on invoices and emails.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" autoComplete="off" aria-invalid />
            <FieldError>Choose another username.</FieldError>
          </Field>
          <Field orientation="horizontal">
            <Switch id="newsletter" />
            <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A basic field group with various input types, labels, descriptions, and error states.",
      },
    },
  },
};

export const InputField: Story = {
  name: "Input field",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input id="password" type="password" placeholder="********" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Input fields with labels and helpful descriptions for user guidance.",
      },
    },
  },
};

export const TextareaField: Story = {
  name: "Textarea field",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
              <Textarea
                id="feedback"
                placeholder="Your feedback helps us improve..."
                rows={4}
              />
              <FieldDescription>
                Share your thoughts about our service.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A textarea field for longer text input with helpful description.",
      },
    },
  },
};

export const SelectField: Story = {
  name: "Select field",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <Field>
          <FieldLabel>Department</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="support">Customer Support</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
          <FieldDescription>
            Select your department or area of work.
          </FieldDescription>
        </Field>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A select dropdown field with multiple options and description.",
      },
    },
  },
};

export const SliderField: Story = {
  name: "Slider field",
  render: function Render() {
    const [value, setValue] = useState([200, 800]);

    return (
      <div className="adm:w-full adm:max-w-md">
        <Field>
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($
            <span className="adm:font-medium adm:tabular-nums">{value[0]}</span> -{" "}
            <span className="adm:font-medium adm:tabular-nums">{value[1]}</span>).
          </FieldDescription>
          <Slider
            value={value}
            onValueChange={setValue}
            max={1000}
            min={0}
            step={10}
            className="adm:mt-2 adm:w-full"
            aria-label="Price Range"
          />
        </Field>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A slider field with dynamic value display in the description.",
      },
    },
  },
};

export const FieldsetGroup: Story = {
  name: "Fieldset group",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md adm:space-y-6">
        <FieldSet>
          <FieldLegend>Address Information</FieldLegend>
          <FieldDescription>
            We need your address to deliver your order.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="street">Street Address</FieldLabel>
              <Input id="street" type="text" placeholder="123 Main St" />
            </Field>
            <div className="adm:grid adm:grid-cols-2 adm:gap-4">
              <Field>
                <FieldLabel htmlFor="city">City</FieldLabel>
                <Input id="city" type="text" placeholder="New York" />
              </Field>
              <Field>
                <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
                <Input id="zip" type="text" placeholder="90502" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A fieldset with grouped address fields in a responsive layout.",
      },
    },
  },
};

export const CheckboxFields: Story = {
  name: "Checkbox fields",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <FieldGroup>
          <FieldSet>
            <FieldLegend variant="label">
              Show these items on the desktop
            </FieldLegend>
            <FieldDescription>
              Select the items you want to show on the desktop.
            </FieldDescription>
            <FieldGroup className="adm:gap-3">
              <Field orientation="horizontal">
                <Checkbox id="hard-disks" />
                <FieldLabel
                  htmlFor="hard-disks"
                  className="adm:font-normal"
                  defaultChecked
                >
                  Hard disks
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="external-disks" />
                <FieldLabel
                  htmlFor="external-disks"
                  className="adm:font-normal"
                >
                  External disks
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="cds-dvds" />
                <FieldLabel
                  htmlFor="cds-dvds"
                  className="adm:font-normal"
                >
                  CDs, DVDs, and iPods
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="connected-servers" />
                <FieldLabel
                  htmlFor="connected-servers"
                  className="adm:font-normal"
                >
                  Connected servers
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <Checkbox id="sync-folders" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="sync-folders">
                Sync Desktop & Documents folders
              </FieldLabel>
              <FieldDescription>
                Your Desktop & Documents folders are being synced with iCloud
                Drive. You can access them from other devices.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox fields in both simple and complex layouts with descriptions.",
      },
    },
  },
};

export const RadioFields: Story = {
  name: "Radio fields",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <FieldSet>
          <FieldLabel>Subscription Plan</FieldLabel>
          <FieldDescription>
            Yearly and lifetime plans offer significant savings.
          </FieldDescription>
          <RadioGroup defaultValue="monthly">
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="plan-monthly" />
              <FieldLabel htmlFor="plan-monthly" className="adm:font-normal">
                Monthly ($9.99/month)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="plan-yearly" />
              <FieldLabel htmlFor="plan-yearly" className="adm:font-normal">
                Yearly ($99.99/year)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="lifetime" id="plan-lifetime" />
              <FieldLabel htmlFor="plan-lifetime" className="adm:font-normal">
                Lifetime ($299.99)
              </FieldLabel>
            </Field>
          </RadioGroup>
        </FieldSet>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button fields for selecting one option from multiple choices.",
      },
    },
  },
};

export const SwitchField: Story = {
  name: "Switch field",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
            <FieldDescription>
              Enable multi-factor authentication. If you do not have a two-factor
              device, you can use a one-time code sent to your email.
            </FieldDescription>
          </FieldContent>
          <Switch id="2fa" />
        </Field>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A switch field with detailed description in horizontal layout.",
      },
    },
  },
};

export const ChoiceCard: Story = {
  name: "Choice card",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <FieldGroup>
          <FieldSet>
            <FieldLabel htmlFor="compute-environment">
              Compute Environment
            </FieldLabel>
            <FieldDescription>
              Select the compute environment for your cluster.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes">
              <FieldLabel htmlFor="kubernetes">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      Run GPU workloads on a K8s configured cluster.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="kubernetes" id="kubernetes" />
                </Field>
              </FieldLabel>
              <FieldLabel htmlFor="vm">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Virtual Machine</FieldTitle>
                    <FieldDescription>
                      Access a VM configured cluster to run GPU workloads.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="vm" id="vm" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Choice cards with radio buttons wrapped in field labels for enhanced selection areas.",
      },
    },
  },
};

export const WithValidation: Story = {
  name: "With validation",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email-valid">Email</FieldLabel>
            <Input id="email-valid" type="email" defaultValue="user@example.com" />
            <FieldDescription>We'll never share your email with anyone.</FieldDescription>
          </Field>
          <Field data-invalid>
            <FieldLabel htmlFor="email-invalid">Email</FieldLabel>
            <Input id="email-invalid" type="email" aria-invalid />
            <FieldError>Enter a valid email address.</FieldError>
          </Field>
          <Field data-invalid>
            <FieldLabel htmlFor="password-invalid">Password</FieldLabel>
            <Input id="password-invalid" type="password" aria-invalid />
            <FieldError
              errors={[
                { message: "Password must be at least 8 characters long" },
                { message: "Password must contain at least one number" },
                { message: "Password must contain at least one special character" },
              ]}
            />
          </Field>
        </FieldGroup>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Fields with validation states showing both valid and invalid examples with error messages.",
      },
    },
  },
};

export const ResponsiveLayout: Story = {
  name: "Responsive layout",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <form>
          <FieldSet>
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>Fill in your profile information.</FieldDescription>
            <FieldSeparator />
            <FieldGroup>
              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <FieldDescription>
                    Provide your full name for identification
                  </FieldDescription>
                </FieldContent>
                <Input id="name" placeholder="Evil Rabbit" required />
              </Field>
              <FieldSeparator />
              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="message">Message</FieldLabel>
                  <FieldDescription>
                    You can write your message here. Keep it short, preferably
                    under 100 characters.
                  </FieldDescription>
                </FieldContent>
                <Textarea
                  id="message"
                  placeholder="Hello, world!"
                  required
                  className="adm:min-h-[100px] adm:resize-none adm:min-w-[300px]"
                />
              </Field>
              <FieldSeparator />
              <Field orientation="responsive">
                <Button type="submit">Submit</Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Responsive field layout that adapts from vertical to horizontal based on container size.",
      },
    },
  },
};

export const CompleteForm: Story = {
  name: "Complete form",
  render: function Render() {
    return (
      <div className="adm:w-full adm:max-w-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Payment Method</FieldLegend>
              <FieldDescription>
                All transactions are secure and encrypted
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
                  <Input id="card-name" placeholder="Evil Rabbit" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <FieldDescription>
                    Enter your 16-digit card number
                  </FieldDescription>
                </Field>
                <div className="adm:grid adm:grid-cols-3 adm:gap-4">
                  <Field>
                    <FieldLabel htmlFor="exp-month">Month</FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="exp-month">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="exp-year">Year</FieldLabel>
                    <Select defaultValue="">
                      <SelectTrigger id="exp-year">
                        <SelectValue placeholder="YYYY" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="cvv">CVV</FieldLabel>
                    <Input id="cvv" placeholder="123" required />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <FieldSet>
              <FieldLegend>Billing Address</FieldLegend>
              <FieldDescription>
                The billing address associated with your payment method
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox id="same-as-shipping" defaultChecked />
                  <FieldLabel
                    htmlFor="same-as-shipping"
                    className="adm:font-normal"
                  >
                    Same as shipping address
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="comments">Comments</FieldLabel>
                  <Textarea
                    id="comments"
                    placeholder="Add any additional comments"
                    className="adm:resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A complete payment form demonstrating complex field grouping, validation, and layout patterns.",
      },
    },
  },
};
