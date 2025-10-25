import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import { Progress } from "@src/components/ui/progress";
import { Button } from "@src/components/ui/button";
import { Label } from "@src/components/ui/label";
import { Badge } from "@src/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { cn } from "@src/lib/utils";
import { Play, Pause, RotateCcw, Download, Upload, Wifi, Battery } from "lucide-react";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    return <Progress value={33} className={cn("adm:w-[60%]")} />;
  },
  parameters: {
    docs: {
      description: {
        story: "A basic progress bar showing 33% completion.",
      },
    },
  },
};

export const WithDifferentValues: Story = {
  name: "With different values",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-4 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <Label>0% Complete</Label>
          <Progress value={0} />
        </div>
        <div className={cn("adm:space-y-2")}>
          <Label>25% Complete</Label>
          <Progress value={25} />
        </div>
        <div className={cn("adm:space-y-2")}>
          <Label>50% Complete</Label>
          <Progress value={50} />
        </div>
        <div className={cn("adm:space-y-2")}>
          <Label>75% Complete</Label>
          <Progress value={75} />
        </div>
        <div className={cn("adm:space-y-2")}>
          <Label>100% Complete</Label>
          <Progress value={100} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bars showing different completion values from 0% to 100%.",
      },
    },
  },
};

export const Animated: Story = {
  name: "Animated",
  render: function Render() {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className={cn("adm:space-y-4 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:flex adm:items-center adm:justify-between")}>
          <Label>Loading...</Label>
          <span className={cn("adm:text-sm adm:text-muted-foreground")}>{progress}%</span>
        </div>
        <Progress value={progress} className={cn("adm:w-full")} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An animated progress bar that transitions from 13% to 66% on load.",
      },
    },
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:justify-between")}>
            <Label>File Upload</Label>
            <span className={cn("adm:text-sm adm:text-muted-foreground")}>45%</span>
          </div>
          <Progress value={45} />
          <p className={cn("adm:text-xs adm:text-muted-foreground")}>
            Uploading document.pdf (2.3 MB of 5.1 MB)
          </p>
        </div>

        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:justify-between")}>
            <Label>Installation Progress</Label>
            <Badge variant="secondary">Installing</Badge>
          </div>
          <Progress value={78} />
          <p className={cn("adm:text-xs adm:text-muted-foreground")}>
            Installing dependencies... (7 of 9 packages)
          </p>
        </div>

        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:justify-between")}>
            <Label>Download Complete</Label>
            <Badge variant="default">Finished</Badge>
          </div>
          <Progress value={100} />
          <p className={cn("adm:text-xs adm:text-muted-foreground")}>
            Successfully downloaded 127 MB
          </p>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bars with labels, percentages, and descriptive text.",
      },
    },
  },
};

export const WithIcons: Story = {
  name: "With icons",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Download className={cn("adm:h-4 adm:w-4")} />
            <Label>Download</Label>
            <span className={cn("adm:ml-auto adm:text-sm adm:text-muted-foreground")}>65%</span>
          </div>
          <Progress value={65} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Upload className={cn("adm:h-4 adm:w-4")} />
            <Label>Upload</Label>
            <span className={cn("adm:ml-auto adm:text-sm adm:text-muted-foreground")}>32%</span>
          </div>
          <Progress value={32} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Wifi className={cn("adm:h-4 adm:w-4")} />
            <Label>Signal Strength</Label>
            <span className={cn("adm:ml-auto adm:text-sm adm:text-muted-foreground")}>89%</span>
          </div>
          <Progress value={89} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:gap-2")}>
            <Battery className={cn("adm:h-4 adm:w-4")} />
            <Label>Battery Level</Label>
            <span className={cn("adm:ml-auto adm:text-sm adm:text-muted-foreground")}>42%</span>
          </div>
          <Progress value={42} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bars with icons representing different types of progress indicators.",
      },
    },
  },
};

export const CustomSizing: Story = {
  name: "Custom sizing",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <Label>Small (h-1)</Label>
          <Progress value={60} className={cn("adm:h-1")} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Default (h-2)</Label>
          <Progress value={60} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Medium (h-3)</Label>
          <Progress value={60} className={cn("adm:h-3")} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Large (h-4)</Label>
          <Progress value={60} className={cn("adm:h-4")} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Extra Large (h-6)</Label>
          <Progress value={60} className={cn("adm:h-6")} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bars with different heights showing various sizing options.",
      },
    },
  },
};

export const Interactive: Story = {
  name: "Interactive",
  render: function Render() {
    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
      let interval: NodeJS.Timeout;

      if (isPlaying && progress < 100) {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              setIsPlaying(false);
              return 100;
            }
            return prev + 1;
          });
        }, 50);
      }

      return () => clearInterval(interval);
    }, [isPlaying, progress]);

    const handlePlay = () => {
      if (progress >= 100) {
        setProgress(0);
      }
      setIsPlaying(!isPlaying);
    };

    const handleReset = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    return (
      <div className={cn("adm:space-y-4 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:justify-between")}>
            <Label>Simulation Progress</Label>
            <span className={cn("adm:text-sm adm:text-muted-foreground")}>{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>

        <div className={cn("adm:flex adm:gap-2")}>
          <Button
            variant="outline"
            size="sm"
            onClick={handlePlay}
            disabled={progress >= 100 && isPlaying}
          >
            {isPlaying ? <Pause className={cn("adm:h-4 adm:w-4")} /> : <Play className={cn("adm:h-4 adm:w-4")} />}
            {isPlaying ? "Pause" : progress >= 100 ? "Restart" : "Start"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleReset}>
            <RotateCcw className={cn("adm:h-4 adm:w-4")} />
            Reset
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "An interactive progress bar with play, pause, and reset controls.",
      },
    },
  },
};

export const InCard: Story = {
  name: "In card",
  render: function Render() {
    return (
      <div className={cn("adm:grid adm:gap-4 adm:max-w-2xl")}>
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>
              Current progress of ongoing projects
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("adm:space-y-4")}>
            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>Design Phase</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>Completed</span>
              </div>
              <Progress value={100} />
            </div>

            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>Development</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>In Progress</span>
              </div>
              <Progress value={67} />
            </div>

            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>Testing</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>Pending</span>
              </div>
              <Progress value={0} />
            </div>

            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>Deployment</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>Pending</span>
              </div>
              <Progress value={0} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Resources</CardTitle>
            <CardDescription>
              Current usage of system resources
            </CardDescription>
          </CardHeader>
          <CardContent className={cn("adm:space-y-4")}>
            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>CPU Usage</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>45%</span>
              </div>
              <Progress value={45} />
            </div>

            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>Memory Usage</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>72%</span>
              </div>
              <Progress value={72} />
            </div>

            <div className={cn("adm:space-y-2")}>
              <div className={cn("adm:flex adm:items-center adm:justify-between")}>
                <span className={cn("adm:text-sm adm:font-medium")}>Disk Usage</span>
                <span className={cn("adm:text-sm adm:text-muted-foreground")}>28%</span>
              </div>
              <Progress value={28} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bars displayed within card components for organized layouts.",
      },
    },
  },
};

export const MultiStep: Story = {
  name: "Multi step",
  render: function Render() {
    const [currentStep, setCurrentStep] = useState(2);
    const totalSteps = 5;
    const progress = (currentStep / totalSteps) * 100;

    const steps = [
      "Account Setup",
      "Personal Information",
      "Preferences",
      "Review",
      "Complete",
    ];

    return (
      <div className={cn("adm:space-y-6 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <div className={cn("adm:flex adm:items-center adm:justify-between")}>
            <Label>Setup Progress</Label>
            <span className={cn("adm:text-sm adm:text-muted-foreground")}>
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} />
          <p className={cn("adm:text-sm adm:text-muted-foreground")}>
            Current: {steps[currentStep - 1]}
          </p>
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Steps</Label>
          <div className={cn("adm:space-y-1")}>
            {steps.map((step, index) => (
              <div key={index} className={cn("adm:flex adm:items-center adm:gap-2")}>
                <div
                  className={cn(
                    "adm:w-2 adm:h-2 adm:rounded-full",
                    index < currentStep
                      ? "adm:bg-primary"
                      : index === currentStep
                        ? "adm:bg-primary/50"
                        : "adm:bg-muted",
                  )}
                />
                <span
                  className={cn(
                    "adm:text-sm",
                    index < currentStep
                      ? "adm:text-foreground adm:line-through"
                      : index === currentStep
                        ? "adm:text-foreground adm:font-medium"
                        : "adm:text-muted-foreground",
                  )}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={cn("adm:flex adm:gap-2")}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            size="sm"
            onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
            disabled={currentStep === totalSteps}
          >
            Next
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A multi-step progress indicator with step navigation and visual feedback.",
      },
    },
  },
};

export const ColorVariants: Story = {
  name: "Color variants",
  render: function Render() {
    return (
      <div className={cn("adm:space-y-6 adm:w-full adm:max-w-md")}>
        <div className={cn("adm:space-y-2")}>
          <Label>Default</Label>
          <Progress value={70} />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Success</Label>
          <Progress
            value={100}
            className={cn("adm:[&>div]:bg-green-600")}
          />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Warning</Label>
          <Progress
            value={45}
            className={cn("adm:[&>div]:bg-yellow-600")}
          />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Danger</Label>
          <Progress
            value={15}
            className={cn("adm:[&>div]:bg-red-600")}
          />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Info</Label>
          <Progress
            value={60}
            className={cn("adm:[&>div]:bg-blue-600")}
          />
        </div>

        <div className={cn("adm:space-y-2")}>
          <Label>Purple</Label>
          <Progress
            value={80}
            className={cn("adm:[&>div]:bg-purple-600")}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bars with different color variants for various states and meanings.",
      },
    },
  },
};
