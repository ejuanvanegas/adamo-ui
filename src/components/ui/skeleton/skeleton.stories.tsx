import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@src/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@src/components/ui/card";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:space-x-4">
        <Skeleton className="adm:h-12 adm:w-12 adm:rounded-full" />
        <div className="adm:space-y-2">
          <Skeleton className="adm:h-4 adm:w-[250px]" />
          <Skeleton className="adm:h-4 adm:w-[200px]" />
        </div>
      </div>
    );
  },
};

export const CardSkeleton: Story = {
  name: "Card",
  render: function Render() {
    return (
      <div className="adm:flex adm:flex-col adm:space-y-3">
        <Skeleton className="adm:h-[125px] adm:w-[250px] adm:rounded-xl" />
        <div className="adm:space-y-2">
          <Skeleton className="adm:h-4 adm:w-[250px]" />
          <Skeleton className="adm:h-4 adm:w-[200px]" />
        </div>
      </div>
    );
  },
};

export const Text: Story = {
  name: "Text",
  render: function Render() {
    return (
      <div className="adm:space-y-2">
        <Skeleton className="adm:h-4 adm:w-full" />
        <Skeleton className="adm:h-4 adm:w-[90%]" />
        <Skeleton className="adm:h-4 adm:w-[80%]" />
        <Skeleton className="adm:h-4 adm:w-[70%]" />
        <Skeleton className="adm:h-4 adm:w-[60%]" />
      </div>
    );
  },
};

export const AvatarSkeleton: Story = {
  name: "Avatar",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:space-x-4">
        <Skeleton className="adm:h-10 adm:w-10 adm:rounded-full" />
        <Skeleton className="adm:h-12 adm:w-12 adm:rounded-full" />
        <Skeleton className="adm:h-14 adm:w-14 adm:rounded-full" />
        <Skeleton className="adm:h-16 adm:w-16 adm:rounded-full" />
      </div>
    );
  },
};

export const ButtonSkeleton: Story = {
  name: "Button",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:space-x-4">
        <Skeleton className="adm:h-9 adm:w-20 adm:rounded-md" />
        <Skeleton className="adm:h-9 adm:w-24 adm:rounded-md" />
        <Skeleton className="adm:h-10 adm:w-32 adm:rounded-md" />
        <Skeleton className="adm:h-11 adm:w-28 adm:rounded-md" />
      </div>
    );
  },
};

export const Form: Story = {
  name: "Form",
  render: function Render() {
    return (
      <div className="adm:space-y-4 adm:max-w-md">
        <div className="adm:space-y-2">
          <Skeleton className="adm:h-4 adm:w-16" />
          <Skeleton className="adm:h-10 adm:w-full adm:rounded-md" />
        </div>
        <div className="adm:space-y-2">
          <Skeleton className="adm:h-4 adm:w-20" />
          <Skeleton className="adm:h-10 adm:w-full adm:rounded-md" />
        </div>
        <div className="adm:space-y-2">
          <Skeleton className="adm:h-4 adm:w-24" />
          <Skeleton className="adm:h-20 adm:w-full adm:rounded-md" />
        </div>
        <Skeleton className="adm:h-10 adm:w-24 adm:rounded-md" />
      </div>
    );
  },
};

export const Table: Story = {
  name: "Table",
  render: function Render() {
    return (
      <div className="adm:space-y-3">
        <div className="adm:flex adm:space-x-4">
          <Skeleton className="adm:h-4 adm:w-24" />
          <Skeleton className="adm:h-4 adm:w-32" />
          <Skeleton className="adm:h-4 adm:w-20" />
          <Skeleton className="adm:h-4 adm:w-16" />
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="adm:flex adm:space-x-4">
            <Skeleton className="adm:h-4 adm:w-24" />
            <Skeleton className="adm:h-4 adm:w-32" />
            <Skeleton className="adm:h-4 adm:w-20" />
            <Skeleton className="adm:h-4 adm:w-16" />
          </div>
        ))}
      </div>
    );
  },
};

export const List: Story = {
  name: "List",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="adm:flex adm:items-center adm:space-x-4">
            <Skeleton className="adm:h-10 adm:w-10 adm:rounded-full" />
            <div className="adm:space-y-2 adm:flex-1">
              <Skeleton className="adm:h-4 adm:w-[200px]" />
              <Skeleton className="adm:h-3 adm:w-[150px]" />
            </div>
            <Skeleton className="adm:h-8 adm:w-16 adm:rounded-md" />
          </div>
        ))}
      </div>
    );
  },
};

export const Dashboard: Story = {
  name: "Dashboard",
  render: function Render() {
    return (
      <div className="adm:space-y-6">
        <div className="adm:flex adm:items-center adm:justify-between">
          <Skeleton className="adm:h-8 adm:w-48" />
          <Skeleton className="adm:h-9 adm:w-24 adm:rounded-md" />
        </div>

        <div className="adm:grid adm:gap-4 adm:md:grid-cols-2 adm:lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="adm:space-y-3 adm:p-4 adm:border adm:rounded-lg">
              <Skeleton className="adm:h-4 adm:w-20" />
              <Skeleton className="adm:h-8 adm:w-16" />
              <Skeleton className="adm:h-3 adm:w-24" />
            </div>
          ))}
        </div>

        <div className="adm:grid adm:gap-6 adm:md:grid-cols-2">
          <div className="adm:space-y-4 adm:p-6 adm:border adm:rounded-lg">
            <Skeleton className="adm:h-6 adm:w-32" />
            <Skeleton className="adm:h-40 adm:w-full adm:rounded-md" />
          </div>
          <div className="adm:space-y-4 adm:p-6 adm:border adm:rounded-lg">
            <Skeleton className="adm:h-6 adm:w-28" />
            <div className="adm:space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="adm:flex adm:items-center adm:space-x-3">
                  <Skeleton className="adm:h-8 adm:w-8 adm:rounded-full" />
                  <div className="adm:flex-1 adm:space-y-1">
                    <Skeleton className="adm:h-3 adm:w-full" />
                    <Skeleton className="adm:h-3 adm:w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const Loading: Story = {
  name: "Loading",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Card className="adm:w-full adm:max-w-md">
          <CardHeader>
            <div className="adm:flex adm:items-center adm:space-x-4">
              <Skeleton className="adm:h-12 adm:w-12 adm:rounded-full" />
              <div className="adm:space-y-2">
                <Skeleton className="adm:h-4 adm:w-[200px]" />
                <Skeleton className="adm:h-4 adm:w-[150px]" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="adm:space-y-2">
              <Skeleton className="adm:h-4 adm:w-full" />
              <Skeleton className="adm:h-4 adm:w-[90%]" />
              <Skeleton className="adm:h-4 adm:w-[80%]" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const ProductCard: Story = {
  name: "Product card",
  render: function Render() {
    return (
      <div className="adm:w-64 adm:space-y-3 adm:p-4 adm:border adm:rounded-lg">
        <Skeleton className="adm:h-48 adm:w-full adm:rounded-md" />
        <div className="adm:space-y-2">
          <Skeleton className="adm:h-5 adm:w-full" />
          <Skeleton className="adm:h-4 adm:w-3/4" />
          <div className="adm:flex adm:items-center adm:justify-between adm:mt-4">
            <Skeleton className="adm:h-6 adm:w-16" />
            <Skeleton className="adm:h-9 adm:w-20 adm:rounded-md" />
          </div>
        </div>
      </div>
    );
  },
};

export const Comment: Story = {
  name: "Comment",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="adm:space-y-3">
            <div className="adm:flex adm:items-start adm:space-x-3">
              <Skeleton className="adm:h-8 adm:w-8 adm:rounded-full" />
              <div className="adm:flex-1 adm:space-y-2">
                <div className="adm:flex adm:items-center adm:space-x-2">
                  <Skeleton className="adm:h-4 adm:w-20" />
                  <Skeleton className="adm:h-3 adm:w-16" />
                </div>
                <div className="adm:space-y-1">
                  <Skeleton className="adm:h-4 adm:w-full" />
                  <Skeleton className="adm:h-4 adm:w-5/6" />
                  <Skeleton className="adm:h-4 adm:w-3/4" />
                </div>
                <div className="adm:flex adm:items-center adm:space-x-4 adm:mt-2">
                  <Skeleton className="adm:h-3 adm:w-12" />
                  <Skeleton className="adm:h-3 adm:w-12" />
                  <Skeleton className="adm:h-3 adm:w-12" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Article: Story = {
  name: "Article",
  render: function Render() {
    return (
      <div className="adm:max-w-2xl adm:space-y-6">
        <div className="adm:space-y-4">
          <Skeleton className="adm:h-8 adm:w-3/4" />
          <div className="adm:flex adm:items-center adm:space-x-4">
            <Skeleton className="adm:h-8 adm:w-8 adm:rounded-full" />
            <div className="adm:space-y-1">
              <Skeleton className="adm:h-4 adm:w-24" />
              <Skeleton className="adm:h-3 adm:w-20" />
            </div>
          </div>
        </div>

        <Skeleton className="adm:h-64 adm:w-full adm:rounded-lg" />

        <div className="adm:space-y-4">
          <div className="adm:space-y-2">
            <Skeleton className="adm:h-4 adm:w-full" />
            <Skeleton className="adm:h-4 adm:w-full" />
            <Skeleton className="adm:h-4 adm:w-3/4" />
          </div>

          <div className="adm:space-y-2">
            <Skeleton className="adm:h-4 adm:w-full" />
            <Skeleton className="adm:h-4 adm:w-full" />
            <Skeleton className="adm:h-4 adm:w-5/6" />
          </div>

          <div className="adm:space-y-2">
            <Skeleton className="adm:h-4 adm:w-full" />
            <Skeleton className="adm:h-4 adm:w-4/5" />
          </div>
        </div>

        <div className="adm:flex adm:items-center adm:space-x-4 adm:pt-4 adm:border-t">
          <Skeleton className="adm:h-8 adm:w-16 adm:rounded-full" />
          <Skeleton className="adm:h-8 adm:w-16 adm:rounded-full" />
          <Skeleton className="adm:h-8 adm:w-16 adm:rounded-full" />
        </div>
      </div>
    );
  },
};
