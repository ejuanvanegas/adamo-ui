import type { Meta, StoryObj } from "@storybook/react";
import type { VariantProps } from "class-variance-authority";
import { Toast, ToasterProvider } from "@src/components/layout/toaster";
import { useToast } from "@src/components/layout/toaster/use-toast";
import { Button } from "@src/components/ui/button";
import { FileWarningIcon, GlobeIcon, SaveIcon, TrashIcon, UploadIcon } from "lucide-react";

type ToasterVariant = NonNullable<VariantProps<typeof Toast>["variant"]>;

const meta: Meta<typeof Toast> = {
  title: "Components/Toaster",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays toast notifications to provide feedback to users about the outcome of their actions.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const VARIANT_LABELS: Record<ToasterVariant, string> = {
  default: "Default",
  success: "Success",
  warning: "Warning",
  destructive: "Destructive",
};

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
      <div className="adm:flex adm:gap-4 adm:mb-4 adm:flex-wrap">
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
    </div>
  );
}

export const Playground: Story = {
  name: "Interactive Playground",
  render: () => (
    <ToasterProvider>
      <ToasterPlaygroundStory />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Interactive playground to test all toast variants. Click buttons to show toasts which auto-close after 3 seconds or can be manually closed.",
      },
    },
  },
};

function VariantShowcase({ variant, message }: { variant: ToasterVariant, message: string }) {
  const { showToast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => showToast({ message, variant })}
      type="button"
    >
      Show {VARIANT_LABELS[variant]} Toast
    </Button>
  );
}

export const Default: Story = {
  name: "Default",
  render: () => (
    <ToasterProvider>
      <VariantShowcase
        variant="default"
        message="This is a general informational message"
      />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "The default toast variant for general informational messages.",
      },
    },
  },
};

export const Success: Story = {
  name: "Success",
  render: () => (
    <ToasterProvider>
      <VariantShowcase
        variant="success"
        message="Changes saved successfully!"
      />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "A toast with success styling for positive actions or confirmations.",
      },
    },
  },
};

export const Warning: Story = {
  name: "Warning",
  render: () => (
    <ToasterProvider>
      <VariantShowcase
        variant="warning"
        message="Your session will expire in 5 minutes"
      />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "A toast with warning styling for cautionary messages that require attention.",
      },
    },
  },
};

export const Destructive: Story = {
  name: "Destructive",
  render: () => (
    <ToasterProvider>
      <VariantShowcase
        variant="destructive"
        message="Error: Unable to complete the operation"
      />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "A toast with destructive styling for errors or critical messages.",
      },
    },
  },
};

function CustomDurationStory() {
  const { showToast } = useToast();

  return (
    <div className="adm:space-y-4">
      <div className="adm:flex adm:gap-4 adm:flex-wrap">
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
    </div>
  );
}

export const CustomDuration: Story = {
  name: "Custom duration",
  render: () => (
    <ToasterProvider>
      <CustomDurationStory />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates toasts with different auto-close durations. The last toast requires manual dismissal.",
      },
    },
  },
};

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
    </div>
  );
}

export const QueuedToasts: Story = {
  name: "Queued toasts",
  render: () => (
    <ToasterProvider>
      <QueuedToastsStory />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the internal queue system that displays multiple toasts sequentially to prevent overlapping.",
      },
    },
  },
};

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
      <div className="adm:flex adm:gap-4">
        <Button variant="outline" onClick={simulateFormSubmit}>
          <SaveIcon /> Save Form
        </Button>
        <Button variant="outline" onClick={simulateDelete}>
          <TrashIcon /> Delete Item
        </Button>
        <Button variant="outline" onClick={simulateUpload}>
          <UploadIcon /> Upload File
        </Button>
        <Button variant="outline" onClick={simulateConnection}>
          <GlobeIcon /> Connection Error
        </Button>
        <Button variant="outline" onClick={simulateValidation}>
          <FileWarningIcon /> Validation Error
        </Button>
      </div>
    </div>
  );
}

export const RealWorldExamples: Story = {
  name: "Real world use cases",
  render: () => (
    <ToasterProvider>
      <RealWorldExamplesStory />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of toast usage in real-world application scenarios like form submissions, file operations, and error handling.",
      },
    },
  },
};

function LongMessagesStory() {
  const { showToast } = useToast();

  return (
    <div className="adm:space-y-4">
      <div className="adm:flex adm:gap-4">
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
    </div>
  );
}

export const LongMessages: Story = {
  name: "Different message lengths",
  render: () => (
    <ToasterProvider>
      <LongMessagesStory />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tests how the toast component handles messages of different lengths, from short to very long text content.",
      },
    },
  },
};

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
      <div className="adm:flex adm:gap-4">
        <Button variant="outline" onClick={showPersistent}>
          Show Persistent Toast
        </Button>
        <Button onClick={closeToast}>
          Close Toast
        </Button>
      </div>
    </div>
  );
}

export const ManualClose: Story = {
  name: "Manual close",
  render: () => (
    <ToasterProvider>
      <ManualCloseStory />
    </ToasterProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates persistent toasts that remain visible until manually closed, useful for important messages requiring user acknowledgment.",
      },
    },
  },
};
