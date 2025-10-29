import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@src/components/ui/accordionV2/accordionV2";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { Badge } from "@src/components/ui/badge";

const meta = {
  title: "Components/AccordionV2",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description: "Determines whether one or multiple items can be opened at the same time",
    },
    collapsible: {
      control: "boolean",
      description: "When type is 'single', allows closing the open item",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger title="Basic Accordion Item" />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  This is a simple accordion with just a title and content. Click the plus/minus icon to expand or collapse.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const WithWarningBadge: Story = {
  name: "With Warning Badge",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Name Matches"
              badge={(
                <Badge variant="warning-medium" size="lg">
                  <AlertCircle />
                  2 matches found
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Content showing the warning badge with icon and custom text.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const WithSuccessBadge: Story = {
  name: "With Success Badge",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Verification Completed"
              badge={(
                <Badge variant="success-medium" size="lg">
                  <CheckCircle />
                  All fields validated
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Example of accordion with a success badge showing completed status.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const WithErrorBadge: Story = {
  name: "With Error Badge",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Failed Validation"
              badge={(
                <Badge variant="destructive-medium" size="lg">
                  <XCircle />
                  3 errors detected
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Example showing an error state with destructive badge.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const WithInfoBadge: Story = {
  name: "With Info Badge",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Additional Information"
              badge={(
                <Badge variant="default-medium" size="lg">
                  <Info />
                  Read more
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Info badge variant for informational content.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const WithTextOnlyBadge: Story = {
  name: "With Text-Only Badge",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Custom Badge"
              badge={(
                <Badge variant="muted" size="lg">
                  NEW
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Example with a text-only badge without an icon.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const MultipleItems: Story = {
  name: "Multiple Items (Single Type)",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Personal Information"
              badge={(
                <Badge variant="warning-medium" size="lg">
                  <AlertCircle />
                  3 required fields
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4 adm:space-y-3">
                <div className="adm:rounded-lg adm:border adm:border-neutrals-200 adm:p-3">
                  <h4 className="adm:text-sm adm:font-semibold adm:text-neutrals-700">Full Name</h4>
                  <p className="adm:text-sm adm:text-neutrals-600 adm:mt-1">Required field - Please enter your full name</p>
                </div>
                <div className="adm:rounded-lg adm:border adm:border-neutrals-200 adm:p-3">
                  <h4 className="adm:text-sm adm:font-semibold adm:text-neutrals-700">Email Address</h4>
                  <p className="adm:text-sm adm:text-neutrals-600 adm:mt-1">Required field - Valid email format needed</p>
                </div>
                <div className="adm:rounded-lg adm:border adm:border-neutrals-200 adm:p-3">
                  <h4 className="adm:text-sm adm:font-semibold adm:text-neutrals-700">Phone Number</h4>
                  <p className="adm:text-sm adm:text-neutrals-600 adm:mt-1">Required field - Include country code</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              title="Address Details"
              badge={(
                <Badge variant="success-medium" size="lg">
                  <CheckCircle />
                  Complete
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  All address information has been verified and validated.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger title="Additional Notes" />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Optional section without any badge indicator.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const MultipleType: Story = {
  name: "Multiple Open Items",
  args: { type: "multiple" },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Account Settings"
              badge={(
                <Badge variant="default-medium" size="lg">
                  <Info />
                  Updated
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Configure your account preferences and security settings. Multiple sections can be opened simultaneously.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              title="Notification Preferences"
              badge={(
                <Badge variant="warning-medium" size="lg">
                  <AlertCircle />
                  Action required
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Manage how and when you receive notifications from the system.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger title="Privacy & Security" />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Control your privacy settings and manage data sharing preferences.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  name: "Default Open State",
  args: { type: "single", collapsible: true, defaultValue: "item-1" },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Important Notice"
              badge={(
                <Badge variant="destructive-medium" size="lg">
                  <AlertCircle />
                  Attention required
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  This accordion is open by default using the defaultValue prop. Perfect for highlighting important information.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const RichContent: Story = {
  name: "Rich Content Example",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Payment Methods"
              badge={(
                <Badge variant="success-medium" size="lg">
                  <CheckCircle />
                  3 active
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4 adm:space-y-4">
                <div className="adm:flex adm:items-center adm:justify-between adm:p-3 adm:bg-neutrals-50 adm:rounded-lg">
                  <div>
                    <p className="adm:text-sm adm:font-semibold adm:text-neutrals-700">Credit Card</p>
                    <p className="adm:text-xs adm:text-neutrals-500">•••• 4242</p>
                  </div>
                  <span className="adm:text-xs adm:text-success-600 adm:font-medium">Active</span>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between adm:p-3 adm:bg-neutrals-50 adm:rounded-lg">
                  <div>
                    <p className="adm:text-sm adm:font-semibold adm:text-neutrals-700">PayPal</p>
                    <p className="adm:text-xs adm:text-neutrals-500">user@example.com</p>
                  </div>
                  <span className="adm:text-xs adm:text-success-600 adm:font-medium">Active</span>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between adm:p-3 adm:bg-neutrals-50 adm:rounded-lg">
                  <div>
                    <p className="adm:text-sm adm:font-semibold adm:text-neutrals-700">Bank Transfer</p>
                    <p className="adm:text-xs adm:text-neutrals-500">•••• 8976</p>
                  </div>
                  <span className="adm:text-xs adm:text-success-600 adm:font-medium">Active</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const MixedStates: Story = {
  name: "Mixed Badge States",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-4xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger
              title="Step 1: Documentation"
              badge={(
                <Badge variant="success-medium" size="lg">
                  <CheckCircle />
                  Completed
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  All required documents have been submitted and verified.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger
              title="Step 2: Review Process"
              badge={(
                <Badge variant="warning-medium" size="lg">
                  <AlertCircle />
                  In progress
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Your application is currently under review. Expected completion in 2-3 business days.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger
              title="Step 3: Final Approval"
              badge={(
                <Badge variant="muted" size="lg">
                  Pending
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  This step will become available once the review process is completed.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger
              title="Step 4: Activation"
              badge={(
                <Badge variant="muted" size="lg">
                  Pending
                </Badge>
              )}
            />
            <AccordionContent>
              <div className="adm:p-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Final step - account activation will be processed automatically.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const CompactVersion: Story = {
  name: "Compact Layout",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <div className="adm:w-full adm:max-w-2xl">
        <Accordion {...args}>
          <AccordionItem value="item-1">
            <AccordionTrigger title="FAQ #1" />
            <AccordionContent>
              <div className="adm:px-4 adm:pb-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Simple FAQ layout without badges for cleaner appearance.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger title="FAQ #2" />
            <AccordionContent>
              <div className="adm:px-4 adm:pb-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Perfect for documentation or help sections.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger title="FAQ #3" />
            <AccordionContent>
              <div className="adm:px-4 adm:pb-4">
                <p className="adm:text-sm adm:text-neutrals-600">
                  Minimalist design for better readability.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};
