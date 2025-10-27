import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@src/components/ui/accordion";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Label } from "@src/components/ui/label";
import { Separator } from "@src/components/ui/separator";
import { Progress } from "@src/components/ui/progress";
import {
  InfoIcon,
  TruckIcon,
  RefreshCwIcon,
  PackageIcon,
  CreditCardIcon,
  ShieldIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  PlayIcon,
  BookOpenIcon,
  GraduationCapIcon,
} from "lucide-react";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  args: { type: "single", collapsible: true },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components' aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const WithDefaultValue: Story = {
  name: "With default value",
  args: { type: "single", defaultValue: "item-2", collapsible: true },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>
            This is the first accordion item content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
          <AccordionContent>
            This item is open by default because it matches the defaultValue prop.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Item</AccordionTrigger>
          <AccordionContent>
            This is the third accordion item content.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const MultipleType: Story = {
  name: "Multiple type",
  args: { type: "multiple" },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Frontend Technologies</AccordionTrigger>
          <AccordionContent>
            <div className="adm:space-y-2">
              <p>Modern frontend development stack includes:</p>
              <ul className="adm:list-disc adm:list-inside adm:space-y-1">
                <li>React for building user interfaces</li>
                <li>TypeScript for type safety</li>
                <li>Tailwind CSS for styling</li>
                <li>Vite for build tooling</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Backend Technologies</AccordionTrigger>
          <AccordionContent>
            <div className="adm:space-y-2">
              <p>Backend development technologies:</p>
              <ul className="adm:list-disc adm:list-inside adm:space-y-1">
                <li>Node.js for server-side JavaScript</li>
                <li>Express.js for web framework</li>
                <li>PostgreSQL for database</li>
                <li>Docker for containerization</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>DevOps & Deployment</AccordionTrigger>
          <AccordionContent>
            <div className="adm:space-y-2">
              <p>Modern deployment and operations:</p>
              <ul className="adm:list-disc adm:list-inside adm:space-y-1">
                <li>AWS for cloud infrastructure</li>
                <li>GitHub Actions for CI/CD</li>
                <li>Kubernetes for orchestration</li>
                <li>Monitoring and logging solutions</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const NonCollapsible: Story = {
  name: "Non-collapsible",
  args: { type: "single", collapsible: false, defaultValue: "item-1" },
  render: function Render(args) {
    return (
      <Accordion {...args} className={cn("adm:w-full")}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Always One Open</AccordionTrigger>
          <AccordionContent>
            In non-collapsible mode, at least one item must always remain open.
            You cannot close this item without opening another one.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Option</AccordionTrigger>
          <AccordionContent>
            Click this to open and automatically close the other item.
            This ensures that exactly one item is always expanded.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Choice</AccordionTrigger>
          <AccordionContent>
            This behavior is useful for navigation or when you want to ensure
            users always see some content.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  },
};

export const ControlledAccordion: Story = {
  name: "Controlled",
  args: { type: "single", collapsible: true },
  render: function Render() {
    const [value, setValue] = useState<string | undefined>("item-1");

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:gap-2">
          <Label>Current value:</Label>
          <Badge variant={value ? "default" : "secondary"}>
            {value || "None"}
          </Badge>
        </div>

        <div className="adm:flex adm:gap-2">
          <Button size="sm" onClick={() => setValue("item-1")}>
            Open Item 1
          </Button>
          <Button size="sm" onClick={() => setValue("item-2")}>
            Open Item 2
          </Button>
          <Button size="sm" onClick={() => setValue("item-3")}>
            Open Item 3
          </Button>
          <Button size="sm" variant="outline" onClick={() => setValue(undefined)}>
            Close All
          </Button>
        </div>

        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={setValue}
          className={cn("adm:w-full")}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Controlled Item 1</AccordionTrigger>
            <AccordionContent>
              This accordion is controlled by external state. Use the buttons above
              to programmatically control which item is open.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Controlled Item 2</AccordionTrigger>
            <AccordionContent>
              The current value is managed by useState and passed as props to the
              Accordion component.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Controlled Item 3</AccordionTrigger>
            <AccordionContent>
              This allows for more complex interactions and state management in
              your application.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  },
};

export const ProductInformation: Story = {
  name: "Product information",
  args: { type: "single", collapsible: true },
  render: function Render() {
    return (
      <Card className="adm:w-full adm:max-w-2xl">
        <CardHeader>
          <CardTitle className="adm:flex adm:items-center adm:gap-2">
            <PackageIcon className="adm:h-5 adm:w-5" />
            Premium Wireless Headphones
          </CardTitle>
          <CardDescription>
            Everything you need to know about our flagship product
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="item-1" className="adm:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="adm:text-left">
                <div className="adm:flex adm:items-center adm:gap-2">
                  <InfoIcon className="adm:h-4 adm:w-4" />
                  Product Information
                </div>
              </AccordionTrigger>
              <AccordionContent className="adm:space-y-4">
                <div className="adm:grid adm:grid-cols-2 adm:gap-4">
                  <div>
                    <h4 className="adm:font-medium adm:mb-2">Specifications</h4>
                    <ul className="adm:text-sm adm:space-y-1">
                      <li>• Frequency Response: 20Hz - 20kHz</li>
                      <li>• Driver Size: 40mm</li>
                      <li>• Impedance: 32Ω</li>
                      <li>• Sensitivity: 110dB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="adm:font-medium adm:mb-2">Features</h4>
                    <ul className="adm:text-sm adm:space-y-1">
                      <li>• Active Noise Cancellation</li>
                      <li>• 30-hour battery life</li>
                      <li>• Quick charge (5min = 3hrs)</li>
                      <li>• Multipoint Bluetooth</li>
                    </ul>
                  </div>
                </div>
                <div className="adm:flex adm:gap-2">
                  <Badge>Premium Quality</Badge>
                  <Badge variant="secondary">Wireless</Badge>
                  <Badge variant="outline">Noise Cancelling</Badge>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="adm:text-left">
                <div className="adm:flex adm:items-center adm:gap-2">
                  <TruckIcon className="adm:h-4 adm:w-4" />
                  Shipping & Delivery
                </div>
              </AccordionTrigger>
              <AccordionContent className="adm:space-y-4">
                <div className="adm:grid adm:grid-cols-2 adm:gap-4">
                  <div className="adm:space-y-2">
                    <div className="adm:flex adm:items-center adm:gap-2">
                      <ClockIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
                      <span className="adm:text-sm adm:font-medium">Standard Delivery</span>
                    </div>
                    <p className="adm:text-sm adm:text-muted-foreground">3-5 business days • Free on orders over $50</p>
                  </div>
                  <div className="adm:space-y-2">
                    <div className="adm:flex adm:items-center adm:gap-2">
                      <ShieldIcon className="adm:h-4 adm:w-4 adm:text-muted-foreground" />
                      <span className="adm:text-sm adm:font-medium">Express Delivery</span>
                    </div>
                    <p className="adm:text-sm adm:text-muted-foreground">1-2 business days • $15.99</p>
                  </div>
                </div>
                <Separator />
                <div className="adm:space-y-2">
                  <h4 className="adm:font-medium">Tracking & Insurance</h4>
                  <p className="adm:text-sm adm:text-muted-foreground">
                    All orders include full tracking and insurance. You'll receive tracking
                    information via email once your order ships.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="adm:text-left">
                <div className="adm:flex adm:items-center adm:gap-2">
                  <RefreshCwIcon className="adm:h-4 adm:w-4" />
                  Returns & Warranty
                </div>
              </AccordionTrigger>
              <AccordionContent className="adm:space-y-4">
                <div className="adm:space-y-3">
                  <div>
                    <h4 className="adm:font-medium adm:flex adm:items-center adm:gap-2">
                      <CheckCircleIcon className="adm:h-4 adm:w-4 adm:text-green-500" />
                      30-Day Return Policy
                    </h4>
                    <p className="adm:text-sm adm:text-muted-foreground adm:mt-1">
                      Not satisfied? Return your item within 30 days for a full refund.
                      Item must be in original condition.
                    </p>
                  </div>
                  <div>
                    <h4 className="adm:font-medium adm:flex adm:items-center adm:gap-2">
                      <ShieldIcon className="adm:h-4 adm:w-4 adm:text-blue-500" />
                      2-Year Warranty
                    </h4>
                    <p className="adm:text-sm adm:text-muted-foreground adm:mt-1">
                      Comprehensive warranty covering manufacturing defects and normal wear.
                      Accidental damage protection available.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="adm:text-left">
                <div className="adm:flex adm:items-center adm:gap-2">
                  <CreditCardIcon className="adm:h-4 adm:w-4" />
                  Payment Options
                </div>
              </AccordionTrigger>
              <AccordionContent className="adm:space-y-4">
                <div className="adm:grid adm:grid-cols-2 adm:gap-4">
                  <div className="adm:space-y-2">
                    <h4 className="adm:font-medium">Accepted Cards</h4>
                    <div className="adm:flex adm:gap-2">
                      <Badge variant="outline">Visa</Badge>
                      <Badge variant="outline">Mastercard</Badge>
                      <Badge variant="outline">Amex</Badge>
                    </div>
                  </div>
                  <div className="adm:space-y-2">
                    <h4 className="adm:font-medium">Digital Wallets</h4>
                    <div className="adm:flex adm:gap-2">
                      <Badge variant="outline">PayPal</Badge>
                      <Badge variant="outline">Apple Pay</Badge>
                      <Badge variant="outline">Google Pay</Badge>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="adm:space-y-2">
                  <h4 className="adm:font-medium">Buy Now, Pay Later</h4>
                  <p className="adm:text-sm adm:text-muted-foreground">
                    Split your purchase into 4 interest-free payments with Klarna or Afterpay.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    );
  },
};

export const ProjectTimeline: Story = {
  name: "Project timeline",
  args: { type: "single", collapsible: true },
  render: function Render() {
    const phases = [
      {
        id: "phase-1",
        title: "Discovery & Planning",
        status: "completed",
        duration: "2 weeks",
        progress: 100,
        tasks: [
          { name: "Stakeholder interviews", completed: true },
          { name: "Requirements gathering", completed: true },
          { name: "Technical specification", completed: true },
          { name: "Project roadmap", completed: true },
        ],
      },
      {
        id: "phase-2",
        title: "Design & Prototyping",
        status: "completed",
        duration: "3 weeks",
        progress: 100,
        tasks: [
          { name: "User research", completed: true },
          { name: "Wireframes", completed: true },
          { name: "Visual design", completed: true },
          { name: "Interactive prototype", completed: true },
        ],
      },
      {
        id: "phase-3",
        title: "Development",
        status: "in-progress",
        duration: "8 weeks",
        progress: 65,
        tasks: [
          { name: "Frontend development", completed: true },
          { name: "Backend API", completed: true },
          { name: "Database design", completed: false },
          { name: "Integration testing", completed: false },
        ],
      },
      {
        id: "phase-4",
        title: "Testing & Launch",
        status: "pending",
        duration: "2 weeks",
        progress: 0,
        tasks: [
          { name: "Quality assurance", completed: false },
          { name: "Performance testing", completed: false },
          { name: "User acceptance testing", completed: false },
          { name: "Production deployment", completed: false },
        ],
      },
    ];

    const getStatusIcon = (status: string) => {
      switch (status) {
        case "completed":
          return <CheckCircleIcon className="adm:h-4 adm:w-4 adm:text-green-500" />;
        case "in-progress":
          return <ClockIcon className="adm:h-4 adm:w-4 adm:text-blue-500" />;
        default:
          return <AlertTriangleIcon className="adm:h-4 adm:w-4 adm:text-gray-400" />;
      }
    };

    const getStatusBadge = (status: string) => {
      switch (status) {
        case "completed":
          return <Badge className="adm:bg-green-100 adm:text-green-800">Completed</Badge>;
        case "in-progress":
          return <Badge className="adm:bg-blue-100 adm:text-blue-800">In Progress</Badge>;
        default:
          return <Badge variant="secondary">Pending</Badge>;
      }
    };

    return (
      <Card className="adm:w-full adm:max-w-2xl">
        <CardHeader>
          <CardTitle className="adm:flex adm:items-center adm:gap-2">
            <CalendarIcon className="adm:h-5 adm:w-5" />
            Project Timeline
          </CardTitle>
          <CardDescription>
            Track progress across all project phases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="phase-3" className="adm:w-full">
            {phases.map((phase) => (
              <AccordionItem key={phase.id} value={phase.id}>
                <AccordionTrigger className="adm:text-left">
                  <div className="adm:flex adm:items-center adm:justify-between adm:w-full adm:pr-4">
                    <div className="adm:flex adm:items-center adm:gap-3">
                      {getStatusIcon(phase.status)}
                      <div>
                        <p className="adm:font-medium">{phase.title}</p>
                        <p className="adm:text-sm adm:text-muted-foreground">{phase.duration}</p>
                      </div>
                    </div>
                    <div className="adm:flex adm:items-center adm:gap-2">
                      {getStatusBadge(phase.status)}
                      <span className="adm:text-sm adm:text-muted-foreground">
                        {phase.progress}%
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="adm:space-y-4">
                  <div className="adm:space-y-2">
                    <div className="adm:flex adm:items-center adm:justify-between">
                      <span className="adm:text-sm adm:font-medium">Progress</span>
                      <span className="adm:text-sm adm:text-muted-foreground">{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="adm:h-2" />
                  </div>

                  <div className="adm:space-y-2">
                    <h4 className="adm:font-medium">Tasks</h4>
                    <div className="adm:space-y-2">
                      {phase.tasks.map((task, index) => (
                        <div key={index} className="adm:flex adm:items-center adm:gap-2">
                          {task.completed
                            ? (
                              <CheckCircleIcon className="adm:h-4 adm:w-4 adm:text-green-500" />
                            )
                            : (
                              <div className="adm:h-4 adm:w-4 adm:border-2 adm:border-gray-300 adm:rounded-full" />
                            )}
                          <span className={`adm:text-sm ${task.completed ? "adm:text-muted-foreground adm:line-through" : ""}`}>
                            {task.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    );
  },
};

export const LearningCourse: Story = {
  name: "Learning course",
  args: { type: "single", collapsible: true },
  render: function Render() {
    const modules = [
      {
        id: "module-1",
        title: "Introduction to React",
        lessons: 8,
        duration: "2 hours",
        completed: true,
        description: "Learn the fundamentals of React including components, props, and state management.",
        topics: ["Components", "JSX", "Props", "State", "Event Handling"],
      },
      {
        id: "module-2",
        title: "Advanced React Patterns",
        lessons: 12,
        duration: "3.5 hours",
        completed: true,
        description: "Dive deep into advanced React patterns and optimization techniques.",
        topics: ["Context API", "Custom Hooks", "Performance", "Error Boundaries", "Portals"],
      },
      {
        id: "module-3",
        title: "State Management",
        lessons: 10,
        duration: "2.8 hours",
        completed: false,
        description: "Master state management with Redux, Zustand, and other popular libraries.",
        topics: ["Redux Toolkit", "Zustand", "React Query", "Global State", "Middleware"],
      },
      {
        id: "module-4",
        title: "Testing React Applications",
        lessons: 15,
        duration: "4 hours",
        completed: false,
        description: "Learn comprehensive testing strategies for React applications.",
        topics: ["Jest", "React Testing Library", "E2E Testing", "Mocking", "Coverage"],
      },
    ];

    return (
      <Card className="adm:w-full adm:max-w-2xl">
        <CardHeader>
          <CardTitle className="adm:flex adm:items-center adm:gap-2">
            <GraduationCapIcon className="adm:h-5 adm:w-5" />
            React Mastery Course
          </CardTitle>
          <CardDescription>
            Complete React development course with hands-on projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="adm:mb-6 adm:p-4 adm:bg-muted adm:rounded-lg">
            <div className="adm:flex adm:items-center adm:justify-between adm:mb-2">
              <span className="adm:text-sm adm:font-medium">Course Progress</span>
              <span className="adm:text-sm adm:text-muted-foreground">2 of 4 modules completed</span>
            </div>
            <Progress value={50} className="adm:h-2" />
          </div>

          <Accordion type="single" collapsible className="adm:w-full">
            {modules.map((module, index) => (
              <AccordionItem key={module.id} value={module.id}>
                <AccordionTrigger className="adm:text-left">
                  <div className="adm:flex adm:items-center adm:justify-between adm:w-full adm:pr-4">
                    <div className="adm:flex adm:items-center adm:gap-3">
                      <div className="adm:flex adm:items-center adm:justify-center adm:w-8 adm:h-8 adm:rounded-full adm:bg-muted">
                        <span className="adm:text-sm adm:font-medium">{index + 1}</span>
                      </div>
                      <div>
                        <p className="adm:font-medium">{module.title}</p>
                        <p className="adm:text-sm adm:text-muted-foreground">
                          {module.lessons} lessons • {module.duration}
                        </p>
                      </div>
                    </div>
                    <div className="adm:flex adm:items-center adm:gap-2">
                      {module.completed
                        ? (
                          <Badge className="adm:bg-green-100 adm:text-green-800">
                            <CheckCircleIcon className="adm:h-3 adm:w-3 adm:mr-1" />
                            Completed
                          </Badge>
                        )
                        : (
                          <Badge variant="secondary">
                            <PlayIcon className="adm:h-3 adm:w-3 adm:mr-1" />
                            Start
                          </Badge>
                        )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="adm:space-y-4">
                  <p className="adm:text-sm adm:text-muted-foreground">
                    {module.description}
                  </p>

                  <div className="adm:space-y-2">
                    <h4 className="adm:font-medium adm:flex adm:items-center adm:gap-2">
                      <BookOpenIcon className="adm:h-4 adm:w-4" />
                      Topics Covered
                    </h4>
                    <div className="adm:flex adm:flex-wrap adm:gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="adm:text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="adm:flex adm:gap-2">
                    {module.completed
                      ? (
                        <Button size="sm" variant="outline">
                          Review Module
                        </Button>
                      )
                      : (
                        <Button size="sm">
                          {index === 2 ? "Continue Learning" : "Start Module"}
                        </Button>
                      )}
                    <Button size="sm" variant="ghost">
                      View Syllabus
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    );
  },
};
