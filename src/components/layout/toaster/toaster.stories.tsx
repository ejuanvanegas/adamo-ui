import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, ToastProvider } from "./toaster";
import { useToast } from "./use-toast";
import type { VariantProps } from "class-variance-authority";
import { Button } from "../../ui/button";
import { useState } from "react";

type ToasterVariant = NonNullable<VariantProps<typeof Toaster>["variant"]>;

const meta: Meta<typeof Toaster> = {
  title: "Components/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive"],
    },
    message: {
      control: "text",
      description: "Message to display in the toast",
    },
    autoClose: {
      control: "number",
      description: "Time in milliseconds before auto-closing",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

const VARIANT_LABELS: Record<ToasterVariant, string> = {
  default: "Default",
  success: "Success",
  warning: "Warning",
  destructive: "Destructive",
};

// ========== INTERACTIVE PLAYGROUND ==========
function ToasterPlaygroundStory() {
  const { showToast, closeToast } = useToast();

  const handleShow = (v: ToasterVariant) => {
    const msg = v === "success"
      ? "Operation successful!"
      : v === "warning"
        ? "Warning: something requires your attention."
        : v === "destructive"
          ? "A critical error has occurred."
          : "This is a sample message.";
    showToast({ message: msg, variant: v });
  };

  return (
    <div style={{ minHeight: 300 }}>
      <div className="adm:flex adm:gap-2 adm:mb-4 adm:flex-wrap">
        {(Object.keys(VARIANT_LABELS) as ToasterVariant[]).map((v) => (
          <Button
            key={v}
            variant="outline"
            onClick={() => handleShow(v)}
            type="button"
          >
            {VARIANT_LABELS[v]}
          </Button>
        ))}
        <Button onClick={closeToast} type="button">
          Close Toast
        </Button>
      </div>
      <div className="adm:mt-8 adm:text-xs adm:text-muted-foreground">
        Click the buttons to show the toast in different variants.
        The toast closes automatically after 3 seconds or you can close it manually.
      </div>
    </div>
  );
}

export const Playground: Story = {
  name: "Interactive Playground",
  render: () => (
    <ToastProvider>
      <ToasterPlaygroundStory />
    </ToastProvider>
  ),
};

// ========== INDIVIDUAL VARIANTS ==========
function VariantShowcase({ variant, message }: { variant: ToasterVariant, message: string }) {
  const { showToast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => showToast({ message, variant })}
      type="button"
      className="adm:w-full"
    >
      Show {VARIANT_LABELS[variant]} Toast
    </Button>
  );
}

export const DefaultVariant: Story = {
  name: "Default Variant",
  render: () => (
    <ToastProvider>
      <VariantShowcase
        variant="default"
        message="This is a general informational message"
      />
    </ToastProvider>
  ),
};

export const SuccessVariant: Story = {
  name: "Success Variant",
  render: () => (
    <ToastProvider>
      <VariantShowcase
        variant="success"
        message="Changes saved successfully!"
      />
    </ToastProvider>
  ),
};

export const WarningVariant: Story = {
  name: "Warning Variant",
  render: () => (
    <ToastProvider>
      <VariantShowcase
        variant="warning"
        message="Your session will expire in 5 minutes"
      />
    </ToastProvider>
  ),
};

export const DestructiveVariant: Story = {
  name: "Destructive Variant",
  render: () => (
    <ToastProvider>
      <VariantShowcase
        variant="destructive"
        message="Error: Unable to complete the operation"
      />
    </ToastProvider>
  ),
};

// ========== CUSTOM DURATION ==========
function CustomDurationStory() {
  const { showToast } = useToast();

  return (
    <div className="adm:space-y-4">
      <div className="adm:flex adm:gap-2 adm:flex-wrap">
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "Quick toast (1 second)",
            variant: "default",
            autoClose: 1000,
          })}
        >
          1 second
        </Button>
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "Normal toast (3 seconds)",
            variant: "success",
            autoClose: 3000,
          })}
        >
          3 seconds
        </Button>
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "Slow toast (5 seconds)",
            variant: "warning",
            autoClose: 5000,
          })}
        >
          5 seconds
        </Button>
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "Persistent toast (no autoClose)",
            variant: "destructive",
            autoClose: undefined,
          })}
        >
          No auto-close
        </Button>
      </div>
      <p className="adm:text-xs adm:text-muted-foreground">
        Try different auto-close durations. The last toast won't close automatically.
      </p>
    </div>
  );
}

export const CustomDuration: Story = {
  name: "Custom Durations",
  render: () => (
    <ToastProvider>
      <CustomDurationStory />
    </ToastProvider>
  ),
};

// ========== QUEUED TOASTS ==========
function QueuedToastsStory() {
  const { showToast } = useToast();

  const showMultiple = () => {
    showToast({ message: "First message", variant: "default" });
    setTimeout(() => {
      showToast({ message: "Second message", variant: "success" });
    }, 100);
    setTimeout(() => {
      showToast({ message: "Third message", variant: "warning" });
    }, 200);
  };

  return (
    <div className="adm:space-y-4">
      <Button onClick={showMultiple} variant="outline">
        Show 3 Toasts in Sequence
      </Button>
      <p className="adm:text-xs adm:text-muted-foreground">
        Toasts will be displayed one after another automatically.
        The system handles an internal queue to prevent overlapping.
      </p>
    </div>
  );
}

export const QueuedToasts: Story = {
  name: "Queued Toasts",
  render: () => (
    <ToastProvider>
      <QueuedToastsStory />
    </ToastProvider>
  ),
};

// ========== REAL WORLD EXAMPLES ==========
function RealWorldExamplesStory() {
  const { showToast } = useToast();

  const simulateFormSubmit = () => {
    showToast({
      message: "Form submitted successfully",
      variant: "success",
      autoClose: 2000,
    });
  };

  const simulateDelete = () => {
    showToast({
      message: "Item deleted permanently",
      variant: "destructive",
      autoClose: 4000,
    });
  };

  const simulateUpload = () => {
    showToast({
      message: "File uploaded: document.pdf",
      variant: "success",
      autoClose: 3000,
    });
  };

  const simulateConnection = () => {
    showToast({
      message: "Connection lost. Retrying...",
      variant: "warning",
      autoClose: 5000,
    });
  };

  const simulateValidation = () => {
    showToast({
      message: "Please complete all required fields",
      variant: "warning",
      autoClose: 4000,
    });
  };

  return (
    <div className="adm:space-y-4">
      <div className="adm:grid adm:grid-cols-2 adm:gap-2">
        <Button variant="outline" onClick={simulateFormSubmit}>
          💾 Save Form
        </Button>
        <Button variant="outline" onClick={simulateDelete}>
          🗑️ Delete Item
        </Button>
        <Button variant="outline" onClick={simulateUpload}>
          📤 Upload File
        </Button>
        <Button variant="outline" onClick={simulateConnection}>
          🌐 Connection Error
        </Button>
        <Button variant="outline" onClick={simulateValidation}>
          ⚠️ Validation Error
        </Button>
      </div>
      <p className="adm:text-xs adm:text-muted-foreground">
        Examples of usage in real-world application scenarios.
      </p>
    </div>
  );
}

export const RealWorldExamples: Story = {
  name: "Real World Use Cases",
  render: () => (
    <ToastProvider>
      <RealWorldExamplesStory />
    </ToastProvider>
  ),
};

// ========== LONG MESSAGES ==========
function LongMessagesStory() {
  const { showToast } = useToast();

  return (
    <div className="adm:space-y-4">
      <div className="adm:flex adm:flex-col adm:gap-2">
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "Short message",
            variant: "default",
          })}
        >
          Short Message
        </Button>
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "This is a medium-length message that contains additional information",
            variant: "success",
          })}
        >
          Medium Message
        </Button>
        <Button
          variant="outline"
          onClick={() => showToast({
            message: "This is a considerably long message that might appear when you need to communicate detailed information to the user about a complex operation",
            variant: "warning",
            autoClose: 5000,
          })}
        >
          Long Message
        </Button>
      </div>
      <p className="adm:text-xs adm:text-muted-foreground">
        Test how the toast behaves with different message lengths.
      </p>
    </div>
  );
}

export const LongMessages: Story = {
  name: "Different Message Lengths",
  render: () => (
    <ToastProvider>
      <LongMessagesStory />
    </ToastProvider>
  ),
};

// ========== MANUAL CLOSE ==========
function ManualCloseStory() {
  const { showToast, closeToast } = useToast();

  const showPersistent = () => {
    showToast({
      message: "This toast won't close automatically. Use the button to close it.",
      variant: "default",
      autoClose: undefined,
    });
  };

  return (
    <div className="adm:space-y-4">
      <div className="adm:flex adm:gap-2">
        <Button variant="outline" onClick={showPersistent}>
          Show Persistent Toast
        </Button>
        <Button onClick={closeToast}>
          Close Toast
        </Button>
      </div>
      <p className="adm:text-xs adm:text-muted-foreground">
        This toast will remain visible until manually closed.
        Useful for important messages that require user acknowledgment.
      </p>
    </div>
  );
}

export const ManualClose: Story = {
  name: "Manual Close",
  render: () => (
    <ToastProvider>
      <ManualCloseStory />
    </ToastProvider>
  ),
};

// ========== VARIANT COMPARISON ==========
function VariantComparisonStory() {
  const { showToast } = useToast();
  const [currentVariant, setCurrentVariant] = useState<ToasterVariant>("default");

  const showCurrent = () => {
    showToast({
      message: `Toast variant: ${VARIANT_LABELS[currentVariant]}`,
      variant: currentVariant,
    });
  };

  return (
    <div className="adm:space-y-4">
      <div className="adm:flex adm:gap-2 adm:items-center adm:flex-wrap">
        <span className="adm:text-sm">Select variant:</span>
        {(Object.keys(VARIANT_LABELS) as ToasterVariant[]).map((v) => (
          <Button
            key={v}
            variant={currentVariant === v ? "default" : "outline"}
            onClick={() => setCurrentVariant(v)}
            size="sm"
          >
            {VARIANT_LABELS[v]}
          </Button>
        ))}
      </div>
      <Button onClick={showCurrent} className="adm:w-full">
        Show Selected Toast
      </Button>
      <p className="adm:text-xs adm:text-muted-foreground">
        Select a variant and show the toast to compare styles.
      </p>
    </div>
  );
}

export const VariantComparison: Story = {
  name: "Variant Comparison",
  render: () => (
    <ToastProvider>
      <VariantComparisonStory />
    </ToastProvider>
  ),
};
