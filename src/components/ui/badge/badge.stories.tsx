import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@src/components/ui/badge";
import { CheckCircle } from "lucide-react";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { children: "Badge" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "primary", children: "Placeholder" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Placeholder" },
};

export const Success: Story = {
  args: { variant: "success", children: "Placeholder" },
};

export const LG: Story = {
  args: { size: "lg", children: "Placeholder" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Placeholder" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Placeholder" },
};

export const Outline: Story = {
  args: { variant: "outline", children: "Placeholder" },
};

export const WithIcon: Story = {
  args: {
    variant: "success",
    children: (
      <>
        <CheckCircle />
        Approved
      </>
    ),
  },
};

export const LGWithIcon: Story = {
  args: {
    variant: "success",
    size: "lg",
    children: (
      <>
        <CheckCircle />
        Approved
      </>
    ),
  },
};

export const PrimaryLG: Story = {
  args: { variant: "primary", size: "lg", children: "Primary" },
};

export const Muted: Story = {
  args: { variant: "muted", children: "Muted" },
};

export const MutedLG: Story = {
  args: { variant: "muted", size: "lg", children: "Muted" },
};

export const SuccessMedium: Story = {
  args: { variant: "success-medium", children: "Approved" },
};

export const SuccessMediumLG: Story = {
  args: { variant: "success-medium", size: "lg", children: "Approved" },
};
