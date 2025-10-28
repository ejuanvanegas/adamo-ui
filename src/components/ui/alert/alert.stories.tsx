import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@src/components/ui/alert";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Progress } from "@src/components/ui/progress";
import { Checkbox } from "@src/components/ui/checkbox";
import {
  CheckCircle2Icon,
  InfoIcon,
  AlertTriangleIcon,
  XCircleIcon,
  ShieldCheckIcon,
  WifiOffIcon,
  ServerIcon,
  DatabaseIcon,
  CpuIcon,
  MemoryStickIcon,
  ThermometerIcon,
  ZapIcon,
  RefreshCwIcon,
  DownloadIcon,
  ArchiveIcon,
  MailIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  BellIcon,
  ShoppingCartIcon,
  TruckIcon,
  PercentIcon,
  CreditCardIcon,
} from "lucide-react";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <InfoIcon />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Destructive: Story = {
  name: "Destructive",
  args: { variant: "destructive" },
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <XCircleIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Success: Story = {
  name: "Success",
  args: { variant: "success" },
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <CheckCircle2Icon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Warning: Story = {
  name: "Warning",
  args: { variant: "warning" },
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <AlertTriangleIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your storage is running low. Consider upgrading your plan.
        </AlertDescription>
      </Alert>
    );
  },
};

export const WithoutIcon: Story = {
  name: "Without icon",
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>
          A new software update is available. You can now update your app to get the latest features.
        </AlertDescription>
      </Alert>
    );
  },
};

export const TitleOnly: Story = {
  name: "Title only",
  args: { variant: "success" },
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <CheckCircle2Icon />
        <AlertTitle>Your order has been processed!</AlertTitle>
      </Alert>
    );
  },
};

export const DescriptionOnly: Story = {
  name: "Description only",
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <InfoIcon />
        <AlertDescription>
          This is an alert with only a description. Sometimes you don't need a title to communicate the message effectively.
        </AlertDescription>
      </Alert>
    );
  },
};

export const AllVariants: Story = {
  name: "All variants",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert variant="default">
          <InfoIcon />
          <AlertTitle>Default variant</AlertTitle>
          <AlertDescription>
            This is the default alert variant for general information.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <CheckCircle2Icon />
          <AlertTitle>Success variant</AlertTitle>
          <AlertDescription>
            This variant is used for successful operations and positive feedback.
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <AlertTriangleIcon />
          <AlertTitle>Warning variant</AlertTitle>
          <AlertDescription>
            This variant is used for warnings and cautionary messages.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <XCircleIcon />
          <AlertTitle>Destructive variant</AlertTitle>
          <AlertDescription>
            This variant is used for errors and critical messages.
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const SecurityAlert: Story = {
  name: "Security alert",
  args: { variant: "destructive" },
  render: (args) => {
    return (
      <Alert variant={args.variant}>
        <ShieldCheckIcon />
        <AlertTitle>Security Notice: Suspicious Login Attempt</AlertTitle>
        <AlertDescription>
          <p>We detected a login attempt from an unrecognized device:</p>
          <div className="adm:mt-3 adm:space-y-2 adm:text-sm">
            <div className="adm:grid adm:grid-cols-2 adm:gap-2">
              <span className="adm:font-medium">Location:</span>
              <span>San Francisco, CA</span>
              <span className="adm:font-medium">Device:</span>
              <span>Chrome on Windows</span>
              <span className="adm:font-medium">Time:</span>
              <span>2 minutes ago</span>
            </div>
          </div>
          <div className="adm:mt-4 adm:flex adm:gap-2">
            <Button size="sm" variant="destructive">
              Secure Account
            </Button>
            <Button size="sm" variant="outline">
              This was me
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  },
};

export const SystemStatusAlerts: Story = {
  name: "System status alerts",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert variant="success">
          <ServerIcon />
          <AlertTitle>All systems operational</AlertTitle>
          <AlertDescription>
            All services are running normally. No issues detected.
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <AlertTriangleIcon />
          <AlertTitle>Planned maintenance scheduled</AlertTitle>
          <AlertDescription>
            <p>System maintenance is scheduled for tonight from 2:00 AM to 4:00 AM PST.</p>
            <p className="adm:mt-2">Expected impact: Brief service interruptions</p>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <WifiOffIcon />
          <AlertTitle>Service outage detected</AlertTitle>
          <AlertDescription>
            <p>We're experiencing connectivity issues with our primary data center.</p>
            <div className="adm:mt-3">
              <div className="adm:flex adm:gap-2 adm:items-center adm:justify-between adm:mb-2">
                <span className="adm:text-sm">Recovery Progress</span>
                <span className="adm:text-sm">75%</span>
              </div>
              <Progress value={75} variant="destructive" className="adm:h-2" />
            </div>
            <p className="adm:mt-2 adm:text-sm">Estimated resolution: 15 minutes</p>
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const NotificationAlerts: Story = {
  name: "Notification alerts",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert>
          <MailIcon />
          <AlertTitle>New message received</AlertTitle>
          <AlertDescription>
            You have 3 new messages from your team members. Check your inbox for important updates.
          </AlertDescription>
        </Alert>

        <Alert>
          <CalendarIcon />
          <AlertTitle>Meeting reminder</AlertTitle>
          <AlertDescription>
            <p>Your meeting with the design team starts in 15 minutes.</p>
            <div className="adm:mt-3 adm:space-y-1 adm:text-sm">
              <div className="adm:flex adm:items-center adm:gap-2">
                <ClockIcon className="adm:h-3 adm:w-3" />
                <span>3:00 PM - 4:00 PM</span>
              </div>
              <div className="adm:flex adm:items-center adm:gap-2">
                <MapPinIcon className="adm:h-3 adm:w-3" />
                <span>Conference Room B</span>
              </div>
              <div className="adm:flex adm:items-center adm:gap-2">
                <UsersIcon className="adm:h-3 adm:w-3" />
                <span>5 attendees</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <BellIcon />
          <AlertTitle>Daily backup completed</AlertTitle>
          <AlertDescription>
            Your daily backup has been completed successfully. All 1,247 files backed up to cloud storage.
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const PerformanceAlerts: Story = {
  name: "Performance alerts",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert variant="success">
          <ZapIcon />
          <AlertTitle>Performance optimized</AlertTitle>
          <AlertDescription>
            <p>Your application performance has been automatically optimized.</p>
            <div className="adm:mt-3 adm:grid adm:grid-cols-2 adm:gap-2 adm:text-sm">
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Load time:</span>
                <span className="adm:text-green-600">-45%</span>
              </div>
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Memory usage:</span>
                <span className="adm:text-green-600">-23%</span>
              </div>
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>CPU usage:</span>
                <span className="adm:text-green-600">-31%</span>
              </div>
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Battery life:</span>
                <span className="adm:text-green-600">+18%</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <AlertTriangleIcon />
          <AlertTitle>High resource usage detected</AlertTitle>
          <AlertDescription>
            <p>Some applications are using more resources than usual.</p>
            <div className="adm:mt-3 adm:space-y-2">
              <div className="adm:flex adm:gap-4 adm:items-center adm:justify-between">
                <div className="adm:flex adm:items-center adm:gap-2">
                  <CpuIcon className="adm:h-4 adm:w-4" />
                  <span className="adm:text-sm">CPU Usage</span>
                </div>
                <div className="adm:flex adm:items-center adm:gap-2">
                  <Progress value={87} variant="warning" className="adm:w-16 adm:h-2" />
                  <span className="adm:text-sm adm:text-orange-600">87%</span>
                </div>
              </div>
              <div className="adm:flex adm:gap-4 adm:items-center adm:justify-between">
                <div className="adm:flex adm:items-center adm:gap-2">
                  <MemoryStickIcon className="adm:h-4 adm:w-4" />
                  <span className="adm:text-sm">Memory Usage</span>
                </div>
                <div className="adm:flex adm:items-center adm:gap-2">
                  <Progress value={94} variant="warning" className="adm:w-16 adm:h-2" />
                  <span className="adm:text-sm adm:text-red-600">94%</span>
                </div>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <ThermometerIcon />
          <AlertTitle>Temperature warning</AlertTitle>
          <AlertDescription>
            <p>System temperature is running high. Performance may be affected.</p>
            <div className="adm:mt-3 adm:text-sm">
              <div className="adm:flex adm:gap-4 adm:justify-between adm:mb-1">
                <span>Current temperature:</span>
                <span className="adm:font-medium">82°C</span>
              </div>
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Safe operating range:</span>
                <span>0°C - 70°C</span>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const DataAndStorageAlerts: Story = {
  name: "Data and storage alerts",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert variant="success">
          <DownloadIcon />
          <AlertTitle>Download completed</AlertTitle>
          <AlertDescription>
            Your file "Project_Report_2024.pdf" (2.4 MB) has been downloaded successfully.
          </AlertDescription>
        </Alert>

        <Alert>
          <ArchiveIcon />
          <AlertTitle>Backup in progress</AlertTitle>
          <AlertDescription>
            <p>Creating backup of your data to secure cloud storage.</p>
            <div className="adm:mt-3">
              <div className="adm:flex adm:gap-4 adm:items-center adm:justify-between adm:mb-2">
                <span className="adm:text-sm">Progress</span>
                <span className="adm:text-sm">1,247 / 1,850 files</span>
              </div>
              <Progress value={67} className="adm:h-2" />
            </div>
            <p className="adm:mt-2 adm:text-sm">Estimated time remaining: 8 minutes</p>
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <AlertTriangleIcon />
          <AlertTitle>Storage almost full</AlertTitle>
          <AlertDescription>
            <p>Your storage is 89% full. Consider cleaning up files or upgrading your plan.</p>
            <div className="adm:mt-3 adm:space-y-2 adm:text-sm">
              <div className="adm:flex adm:justify-between">
                <span>Used space:</span>
                <span>89.2 GB of 100 GB</span>
              </div>
              <Progress value={89} variant="warning" className="adm:h-2" />
              <div className="adm:grid adm:grid-cols-2 adm:gap-4 adm:mt-3">
                <div>
                  <p className="adm:font-medium">Largest folders:</p>
                  <ul className="adm:mt-1 adm:space-y-1">
                    <li>Photos: 45.2 GB</li>
                    <li>Videos: 23.8 GB</li>
                    <li>Documents: 12.1 GB</li>
                  </ul>
                </div>
                <div className="adm:space-y-2">
                  <Button size="sm" className="adm:w-full">
                    Upgrade Storage
                  </Button>
                  <Button size="sm" variant="outline" className="adm:w-full">
                    Clean Up Files
                  </Button>
                </div>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <DatabaseIcon />
          <AlertTitle>Database connection lost</AlertTitle>
          <AlertDescription>
            <p>Unable to connect to the database. Some features may not work properly.</p>
            <div className="adm:mt-3 adm:flex adm:gap-2">
              <Button size="sm" variant="destructive">
                <RefreshCwIcon className="adm:h-3 adm:w-3 adm:mr-1" />
                Retry Connection
              </Button>
              <Button size="sm" variant="outline">
                Work Offline
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const EcommerceAlerts: Story = {
  name: "E-commerce alerts",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert variant="success">
          <ShoppingCartIcon />
          <AlertTitle>Item added to cart</AlertTitle>
          <AlertDescription>
            "Wireless Bluetooth Headphones" has been added to your cart. You have 2 items ready for checkout.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <TruckIcon />
          <AlertTitle>Order shipped!</AlertTitle>
          <AlertDescription>
            <p>Your order #12345 has been shipped and is on its way to you.</p>
            <div className="adm:mt-3 adm:space-y-1 adm:text-sm">
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Tracking number:</span>
                <span className="adm:font-mono">1Z999AA1234567890</span>
              </div>
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Estimated delivery:</span>
                <span>Tomorrow, Oct 26</span>
              </div>
              <div className="adm:flex adm:gap-4 adm:justify-between">
                <span>Carrier:</span>
                <span>UPS</span>
              </div>
            </div>
            <Button size="sm" className="adm:mt-3">
              Track Package
            </Button>
          </AlertDescription>
        </Alert>

        <Alert variant="warning">
          <PercentIcon />
          <AlertTitle>Limited time offer!</AlertTitle>
          <AlertDescription>
            <p>Get 25% off on all electronics. Use code TECH25 at checkout.</p>
            <div className="adm:mt-3 adm:flex adm:items-center adm:gap-4">
              <div className="adm:flex adm:items-center adm:gap-2">
                <ClockIcon className="adm:h-4 adm:w-4" />
                <span className="adm:text-sm">Expires in 2 days</span>
              </div>
              <Button size="sm">
                Shop Now
              </Button>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <CreditCardIcon />
          <AlertTitle>Payment method expired</AlertTitle>
          <AlertDescription>
            <p>Your saved payment method ending in 4242 has expired.</p>
            <p className="adm:mt-2">Update your payment information to continue making purchases.</p>
            <Button size="sm" variant="destructive" className="adm:mt-3">
              Update Payment Method
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};

export const InteractiveAlerts: Story = {
  name: "Interactive alerts",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Alert>
          <DownloadIcon />
          <AlertTitle>App update available</AlertTitle>
          <AlertDescription>
            <p>Version 2.1.0 is now available with bug fixes and performance improvements.</p>
            <div className="adm:mt-3 adm:space-y-2">
              <div className="adm:text-sm">
                <p className="adm:font-medium">What's new:</p>
                <ul className="adm:list-disc adm:list-inside adm:mt-1 adm:space-y-1">
                  <li>Improved loading times</li>
                  <li>Fixed dark mode issues</li>
                  <li>Enhanced security</li>
                </ul>
              </div>
              <div className="adm:flex adm:gap-2">
                <Button size="sm">
                  Update Now
                </Button>
                <Button size="sm" variant="outline">
                  Remind Me Later
                </Button>
                <Button size="sm" variant="ghost">
                  Skip This Version
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Alert>
          <ShieldCheckIcon />
          <AlertTitle>Cookie preferences</AlertTitle>
          <AlertDescription>
            <p>We use cookies to improve your experience and analyze site usage.</p>
            <div className="adm:mt-3 adm:space-y-3">
              <div className="adm:space-y-2">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span className="adm:text-sm">Essential cookies</span>
                  <Badge variant="secondary">Required</Badge>
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span className="adm:text-sm">Analytics cookies</span>
                  <Checkbox defaultChecked className="adm:rounded" />
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <span className="adm:text-sm">Marketing cookies</span>
                  <Checkbox className="adm:rounded" />
                </div>
              </div>
              <div className="adm:flex adm:gap-2">
                <Button size="sm">
                  Accept All
                </Button>
                <Button size="sm" variant="outline">
                  Save Preferences
                </Button>
                <Button size="sm" variant="ghost">
                  Reject All
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        <Alert>
          <MapPinIcon />
          <AlertTitle>Location access requested</AlertTitle>
          <AlertDescription>
            <p>This app would like to access your location to provide personalized recommendations.</p>
            <div className="adm:mt-3 adm:space-y-2">
              <div className="adm:text-sm adm:space-y-1">
                <p className="adm:font-medium">This will help us:</p>
                <ul className="adm:list-disc adm:list-inside adm:space-y-1">
                  <li>Show nearby stores and services</li>
                  <li>Provide accurate delivery estimates</li>
                  <li>Suggest relevant local content</li>
                </ul>
              </div>
              <div className="adm:flex adm:gap-2">
                <Button size="sm">
                  Allow Location
                </Button>
                <Button size="sm" variant="outline">
                  Not Now
                </Button>
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    );
  },
};
