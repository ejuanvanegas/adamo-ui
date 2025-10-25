import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Spinner } from "@src/components/ui/spinner";
import { Button } from "@src/components/ui/button";
import { Badge } from "@src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { Progress } from "@src/components/ui/progress";
import { DownloadIcon, RefreshCwIcon, CheckIcon } from "lucide-react";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return <Spinner />;
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-6">
        <Spinner className="adm:size-3" />
        <Spinner className="adm:size-4" />
        <Spinner className="adm:size-6" />
        <Spinner className="adm:size-8" />
        <Spinner className="adm:size-12" />
      </div>
    );
  },
};

export const Colors: Story = {
  name: "Colors",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-6">
        <Spinner className="adm:size-6 adm:text-red-500" />
        <Spinner className="adm:size-6 adm:text-green-500" />
        <Spinner className="adm:size-6 adm:text-blue-500" />
        <Spinner className="adm:size-6 adm:text-yellow-500" />
        <Spinner className="adm:size-6 adm:text-purple-500" />
      </div>
    );
  },
};

export const InButton: Story = {
  name: "In button",
  render: function Render() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <div className="adm:flex adm:flex-col adm:items-center adm:gap-4">
        <Button disabled size="sm">
          <Spinner />
          Loading...
        </Button>
        <Button variant="outline" disabled size="sm">
          <Spinner />
          Please wait
        </Button>
        <Button variant="secondary" disabled size="sm">
          <Spinner />
          Processing
        </Button>
        <Button
          onClick={handleClick}
          disabled={isLoading}
          className="adm:min-w-[120px]"
        >
          {isLoading
            ? (
              <>
                <Spinner />
                Submitting...
              </>
            )
            : (
              "Submit Form"
            )}
        </Button>
      </div>
    );
  },
};

export const InBadge: Story = {
  name: "In badge",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-4">
        <Badge>
          <Spinner />
          Syncing
        </Badge>
        <Badge variant="secondary">
          <Spinner />
          Updating
        </Badge>
        <Badge variant="outline">
          <Spinner />
          Processing
        </Badge>
        <Badge variant="destructive">
          <Spinner />
          Failed
        </Badge>
      </div>
    );
  },
};

export const LoadingStates: Story = {
  name: "Loading states",
  render: function Render() {
    const [loadingStates, setLoadingStates] = useState({
      save: false,
      delete: false,
      refresh: false,
    });

    const handleAction = (action: keyof typeof loadingStates) => {
      setLoadingStates((prev) => ({ ...prev, [action]: true }));
      setTimeout(() => {
        setLoadingStates((prev) => ({ ...prev, [action]: false }));
      }, 2000);
    };

    return (
      <div className="adm:flex adm:gap-4">
        <Button
          onClick={() => handleAction("save")}
          disabled={loadingStates.save}
          variant="default"
        >
          {loadingStates.save
            ? (
              <>
                <Spinner />
                Saving...
              </>
            )
            : (
              "Save Changes"
            )}
        </Button>

        <Button
          onClick={() => handleAction("delete")}
          disabled={loadingStates.delete}
          variant="destructive"
        >
          {loadingStates.delete
            ? (
              <>
                <Spinner />
                Deleting...
              </>
            )
            : (
              "Delete Item"
            )}
        </Button>

        <Button
          onClick={() => handleAction("refresh")}
          disabled={loadingStates.refresh}
          variant="outline"
        >
          {loadingStates.refresh
            ? (
              <>
                <Spinner />
                Refreshing...
              </>
            )
            : (
              <>
                <RefreshCwIcon />
                Refresh
              </>
            )}
        </Button>
      </div>
    );
  },
};

export const ProcessingCard: Story = {
  name: "Processing card",
  render: function Render() {
    const [isProcessing, setIsProcessing] = useState(true);

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Payment Processing</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:items-center adm:space-x-3">
            {isProcessing
              ? (
                <>
                  <Spinner className="adm:size-5" />
                  <span>Processing your payment...</span>
                </>
              )
              : (
                <>
                  <CheckIcon className="adm:size-5 adm:text-green-500" />
                  <span>Payment completed successfully</span>
                </>
              )}
          </div>

          <div className="adm:space-y-2">
            <div className="adm:flex adm:justify-between adm:text-sm">
              <span>Amount</span>
              <span className="adm:font-semibold">$129.99</span>
            </div>
            <div className="adm:flex adm:justify-between adm:text-sm">
              <span>Transaction ID</span>
              <span className="adm:font-mono adm:text-xs">#TXN-123456</span>
            </div>
          </div>

          <Button
            onClick={() => setIsProcessing(!isProcessing)}
            variant="outline"
            className="adm:w-full"
          >
            {isProcessing ? "Cancel" : "Retry Payment"}
          </Button>
        </CardContent>
      </Card>
    );
  },
};

export const DownloadProgress: Story = {
  name: "Download progress",
  render: function Render() {
    const [progress, setProgress] = useState(42);
    const [isDownloading, setIsDownloading] = useState(true);

    const toggleDownload = () => {
      if (isDownloading) {
        setIsDownloading(false);
      }
      else {
        setIsDownloading(true);
        setProgress(0);
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setIsDownloading(false);
              return 100;
            }
            return prev + 10;
          });
        }, 500);
      }
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardContent className="adm:p-6">
          <div className="adm:flex adm:items-center adm:space-x-3 adm:mb-4">
            {isDownloading
              ? (
                <Spinner className="adm:size-5" />
              )
              : (
                <DownloadIcon className="adm:size-5" />
              )}
            <div className="adm:flex-1">
              <h3 className="adm:font-semibold">
                {isDownloading ? "Downloading..." : progress === 100 ? "Download Complete" : "Download Paused"}
              </h3>
              <p className="adm:text-sm adm:text-muted-foreground">
                {Math.round((progress / 100) * 250)} MB / 250 MB
              </p>
            </div>
          </div>

          <Progress value={progress} className="adm:mb-4" />

          <div className="adm:flex adm:justify-between adm:items-center">
            <span className="adm:text-sm adm:text-muted-foreground">
              {progress}% complete
            </span>
            <Button
              onClick={toggleDownload}
              variant="outline"
              size="sm"
            >
              {isDownloading ? "Pause" : progress === 100 ? "Download Again" : "Resume"}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const StatusIndicators: Story = {
  name: "Status indicators",
  render: function Render() {
    const statuses = {
      sync: "loading",
      backup: "loading",
      upload: "success",
      process: "loading",
    };

    const getStatusIcon = (status: string) => {
      switch (status) {
        case "loading":
          return <Spinner className="adm:size-4" />;
        case "success":
          return <CheckIcon className="adm:size-4 adm:text-green-500" />;
        default:
          return <Spinner className="adm:size-4" />;
      }
    };

    const getStatusText = (status: string, action: string) => {
      switch (status) {
        case "loading":
          return `${action}...`;
        case "success":
          return `${action} complete`;
        default:
          return action;
      }
    };

    return (
      <Card className="adm:w-full adm:max-w-sm">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:items-center adm:space-x-2">
              {getStatusIcon(statuses.sync)}
              <span>Data Sync</span>
            </div>
            <Badge variant={statuses.sync === "success" ? "default" : "secondary"}>
              {getStatusText(statuses.sync, "Syncing")}
            </Badge>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:items-center adm:space-x-2">
              {getStatusIcon(statuses.backup)}
              <span>Backup</span>
            </div>
            <Badge variant={statuses.backup === "success" ? "default" : "secondary"}>
              {getStatusText(statuses.backup, "Backing up")}
            </Badge>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:items-center adm:space-x-2">
              {getStatusIcon(statuses.upload)}
              <span>File Upload</span>
            </div>
            <Badge variant={statuses.upload === "success" ? "default" : "secondary"}>
              {getStatusText(statuses.upload, "Uploading")}
            </Badge>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:items-center adm:space-x-2">
              {getStatusIcon(statuses.process)}
              <span>Processing</span>
            </div>
            <Badge variant={statuses.process === "success" ? "default" : "secondary"}>
              {getStatusText(statuses.process, "Processing")}
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const InlineLoading: Story = {
  name: "Inline loading",
  render: function Render() {
    const [loadingItems, setLoadingItems] = useState(new Set<number>());

    const toggleLoading = (index: number) => {
      setLoadingItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        }
        else {
          newSet.add(index);
          setTimeout(() => {
            setLoadingItems((current) => {
              const updated = new Set(current);
              updated.delete(index);
              return updated;
            });
          }, 2000);
        }
        return newSet;
      });
    };

    const items = [
      { id: 1, name: "Update profile", description: "Sync user information" },
      { id: 2, name: "Process payment", description: "Charge credit card" },
      { id: 3, name: "Send notification", description: "Email confirmation" },
      { id: 4, name: "Generate report", description: "Monthly analytics" },
    ];

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-3">
          {items.map((item, index) => (
            <div key={item.id} className="adm:flex adm:items-center adm:justify-between adm:p-3 adm:border adm:rounded-lg">
              <div className="adm:flex-1">
                <h4 className="adm:font-medium">{item.name}</h4>
                <p className="adm:text-sm adm:text-muted-foreground">{item.description}</p>
              </div>
              <Button
                onClick={() => toggleLoading(index)}
                disabled={loadingItems.has(index)}
                size="sm"
                variant="outline"
              >
                {loadingItems.has(index)
                  ? (
                    <>
                      <Spinner />
                      Running...
                    </>
                  )
                  : (
                    "Run"
                  )}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  },
};

export const CustomSpinner: Story = {
  name: "Custom spinner",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-8">
        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <Spinner className="adm:size-8 adm:text-blue-500" />
          <span className="adm:text-sm adm:text-muted-foreground">Default</span>
        </div>

        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <div className="adm:relative">
            <div className="adm:w-8 adm:h-8 adm:border-4 adm:border-gray-200 adm:border-t-blue-500 adm:rounded-full adm:animate-spin" />
          </div>
          <span className="adm:text-sm adm:text-muted-foreground">Custom border</span>
        </div>

        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <div className="adm:relative">
            <div className="adm:w-8 adm:h-8 adm:border-2 adm:border-dashed adm:border-purple-500 adm:rounded-full adm:animate-spin" />
          </div>
          <span className="adm:text-sm adm:text-muted-foreground">Dashed border</span>
        </div>

        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <div className="adm:flex adm:space-x-1">
            <div className="adm:w-2 adm:h-2 adm:bg-green-500 adm:rounded-full adm:animate-bounce" />
            <div className="adm:w-2 adm:h-2 adm:bg-green-500 adm:rounded-full adm:animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="adm:w-2 adm:h-2 adm:bg-green-500 adm:rounded-full adm:animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
          <span className="adm:text-sm adm:text-muted-foreground">Dots</span>
        </div>
      </div>
    );
  },
};
