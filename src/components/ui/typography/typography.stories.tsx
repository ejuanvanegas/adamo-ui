import { Typography } from "@src/components/ui/typography/typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible typography component that can render different HTML elements with consistent text styling variants.",
      },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return <Typography>Default paragraph text with no variant specified.</Typography>;
  },
  parameters: {
    docs: {
      description: {
        story: "The default typography component rendered as a paragraph element.",
      },
    },
  },
};

export const Large: Story = {
  render: function Render() {
    return <Typography variant="lg">Large text for important content and headings.</Typography>;
  },
  parameters: {
    docs: {
      description: {
        story: "Large variant for emphasized text and secondary headings.",
      },
    },
  },
};

export const Medium: Story = {
  render: function Render() {
    return <Typography variant="md">Medium text for standard body content.</Typography>;
  },
  parameters: {
    docs: {
      description: {
        story: "Medium variant for regular body text and content.",
      },
    },
  },
};

export const Small: Story = {
  render: function Render() {
    return <Typography variant="sm">Small text for secondary information.</Typography>;
  },
  parameters: {
    docs: {
      description: {
        story: "Small variant for secondary information and labels.",
      },
    },
  },
};

export const ExtraSmall: Story = {
  name: "Extra small",
  render: function Render() {
    return <Typography variant="xs">Extra small text for fine print and details.</Typography>;
  },
  parameters: {
    docs: {
      description: {
        story: "Extra small variant for fine print and detailed information.",
      },
    },
  },
};

export const Caption: Story = {
  render: function Render() {
    return <Typography variant="caption">Caption text for image descriptions and metadata.</Typography>;
  },
  parameters: {
    docs: {
      description: {
        story: "Caption variant for image captions and metadata.",
      },
    },
  },
};

export const AsHeading1: Story = {
  name: "As heading 1",
  render: function Render() {
    return (
      <Typography asChild variant="lg">
        <h1 className="adm:scroll-m-20 adm:text-4xl adm:font-extrabold adm:tracking-tight">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as an h1 element with custom styling for main page headings.",
      },
    },
  },
};

export const AsHeading2: Story = {
  name: "As heading 2",
  render: function Render() {
    return (
      <Typography asChild variant="lg">
        <h2 className="adm:scroll-m-20 adm:border-b adm:pb-2 adm:text-3xl adm:font-semibold adm:tracking-tight adm:first:mt-0">
          The People of the Kingdom
        </h2>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as an h2 element with border and section heading styling.",
      },
    },
  },
};

export const AsHeading3: Story = {
  name: "As heading 3",
  render: function Render() {
    return (
      <Typography asChild variant="md">
        <h3 className="adm:scroll-m-20 adm:text-2xl adm:font-semibold adm:tracking-tight">
          The Joke Tax
        </h3>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as an h3 element for subsection headings.",
      },
    },
  },
};

export const AsHeading4: Story = {
  name: "As heading 4",
  render: function Render() {
    return (
      <Typography asChild variant="md">
        <h4 className="adm:scroll-m-20 adm:text-xl adm:font-semibold adm:tracking-tight">
          People stopped telling jokes
        </h4>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as an h4 element for smaller section headings.",
      },
    },
  },
};

export const AsParagraph: Story = {
  name: "As paragraph",
  render: function Render() {
    return (
      <Typography asChild variant="md">
        <p className="adm:leading-7 [&:not(:first-child)]:adm:mt-6">
          The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
        </p>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as a paragraph with proper spacing and line height.",
      },
    },
  },
};

export const AsBlockquote: Story = {
  name: "As blockquote",
  render: function Render() {
    return (
      <Typography asChild variant="md">
        <blockquote className="adm:mt-6 adm:border-l-2 adm:pl-6 adm:italic">
          "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
        </blockquote>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as a blockquote with left border and italic styling.",
      },
    },
  },
};

export const AsInlineCode: Story = {
  name: "As inline code",
  render: function Render() {
    return (
      <Typography asChild variant="sm">
        <code className="adm:bg-muted adm:relative adm:rounded adm:px-[0.3rem] adm:py-[0.2rem] adm:font-mono adm:text-sm adm:font-semibold">
          @radix-ui/react-alert-dialog
        </code>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as inline code with monospace font and background.",
      },
    },
  },
};

export const AsLead: Story = {
  name: "As lead",
  render: function Render() {
    return (
      <Typography asChild variant="lg">
        <p className="adm:text-xl adm:text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as lead text for introductory paragraphs.",
      },
    },
  },
};

export const AsLarge: Story = {
  name: "As large",
  render: function Render() {
    return (
      <Typography asChild variant="lg">
        <div className="adm:text-lg adm:font-semibold">Are you absolutely sure?</div>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered with large, semibold styling for emphasis.",
      },
    },
  },
};

export const AsSmall: Story = {
  name: "As small",
  render: function Render() {
    return (
      <Typography asChild variant="sm">
        <small className="adm:text-sm adm:font-medium adm:leading-none">Email address</small>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered as small element for labels and fine print.",
      },
    },
  },
};

export const AsMuted: Story = {
  name: "As muted",
  render: function Render() {
    return (
      <Typography asChild variant="sm">
        <p className="adm:text-sm adm:text-muted-foreground">Enter your email address.</p>
      </Typography>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Typography component rendered with muted color for secondary information.",
      },
    },
  },
};
