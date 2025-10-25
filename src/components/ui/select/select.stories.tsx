import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { Label } from "@src/components/ui/label";
import { Button } from "@src/components/ui/button";
import { Card } from "@src/components/ui/card";
import { Apple, Banana, Cherry, Grape } from "lucide-react";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Select>
        <SelectTrigger className="adm:w-[180px]">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};

export const WithGroups: Story = {
  name: "With groups",
  render: function Render() {
    return (
      <Select>
        <SelectTrigger className="adm:w-[200px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2">
        <Label htmlFor="email-provider">Email provider</Label>
        <Select>
          <SelectTrigger id="email-provider">
            <SelectValue placeholder="Select a provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gmail">Gmail</SelectItem>
            <SelectItem value="outlook">Outlook</SelectItem>
            <SelectItem value="yahoo">Yahoo</SelectItem>
            <SelectItem value="apple">Apple Mail</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [value, setValue] = useState("");

    return (
      <div className="adm:space-y-4">
        <div>
          <p className="adm:text-sm adm:font-medium">Selected: {value || "None"}</p>
        </div>
        <Select value={value} onValueChange={setValue}>
          <SelectTrigger className="adm:w-[180px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">JavaScript</SelectItem>
            <SelectItem value="typescript">TypeScript</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="rust">Rust</SelectItem>
            <SelectItem value="go">Go</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <Select disabled>
        <SelectTrigger className="adm:w-[180px]">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};

export const WithIcons: Story = {
  name: "With icons",
  render: function Render() {
    return (
      <Select>
        <SelectTrigger className="adm:w-[200px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">
            <Apple className="adm:mr-2 adm:h-4 adm:w-4" />
            Apple
          </SelectItem>
          <SelectItem value="banana">
            <Banana className="adm:mr-2 adm:h-4 adm:w-4" />
            Banana
          </SelectItem>
          <SelectItem value="cherry">
            <Cherry className="adm:mr-2 adm:h-4 adm:w-4" />
            Cherry
          </SelectItem>
          <SelectItem value="grape">
            <Grape className="adm:mr-2 adm:h-4 adm:w-4" />
            Grape
          </SelectItem>
          <SelectItem value="lemon">
            <Cherry className="adm:mr-2 adm:h-4 adm:w-4" />
            Lemon
          </SelectItem>
        </SelectContent>
      </Select>
    );
  },
};

export const SmallSize: Story = {
  name: "Small size",
  render: function Render() {
    return (
      <Select>
        <SelectTrigger size="sm" className="adm:w-[160px]">
          <SelectValue placeholder="Small select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="xs">Extra Small</SelectItem>
          <SelectItem value="sm">Small</SelectItem>
          <SelectItem value="md">Medium</SelectItem>
          <SelectItem value="lg">Large</SelectItem>
          <SelectItem value="xl">Extra Large</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};

export const Scrollable: Story = {
  name: "Scrollable",
  render: function Render() {
    return (
      <Select>
        <SelectTrigger className="adm:w-[280px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe & Africa</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Australia & Pacific</SelectLabel>
            <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
            <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
            <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
            <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>South America</SelectLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
};

export const WithValidation: Story = {
  name: "With validation",
  render: function Render() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      if (error) setError("");
    };

    const handleValidate = () => {
      if (!value) {
        setError("Please select a priority level");
      }
      else {
        setError("");
      }
    };

    return (
      <div className="adm:space-y-4">
        <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2">
          <Label htmlFor="priority">
            Priority level <span className="adm:text-destructive">*</span>
          </Label>
          <Select value={value} onValueChange={handleValueChange}>
            <SelectTrigger id="priority" className={error ? "adm:border-destructive" : ""}>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
          {error && (
            <p className="adm:text-destructive adm:text-sm">{error}</p>
          )}
        </div>
        <Button onClick={handleValidate} variant="outline">
          Validate Selection
        </Button>
      </div>
    );
  },
};

export const InCards: Story = {
  name: "In cards",
  render: function Render() {
    const [selectedOptions, setSelectedOptions] = useState({
      theme: "",
      size: "",
      language: "",
    });

    return (
      <div className="adm:grid adm:gap-6 adm:md:grid-cols-2 adm:lg:grid-cols-3">
        <Card className="adm:p-6">
          <div className="adm:space-y-4">
            <h3 className="adm:text-lg adm:font-semibold">Theme</h3>
            <p className="adm:text-muted-foreground adm:text-sm">Choose your preferred theme</p>
            <Select value={selectedOptions.theme} onValueChange={(value) => setSelectedOptions((prev) => ({ ...prev, theme: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <Card className="adm:p-6">
          <div className="adm:space-y-4">
            <h3 className="adm:text-lg adm:font-semibold">Text Size</h3>
            <p className="adm:text-muted-foreground adm:text-sm">Adjust text size for better readability</p>
            <Select value={selectedOptions.size} onValueChange={(value) => setSelectedOptions((prev) => ({ ...prev, size: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <Card className="adm:p-6">
          <div className="adm:space-y-4">
            <h3 className="adm:text-lg adm:font-semibold">Language</h3>
            <p className="adm:text-muted-foreground adm:text-sm">Select your preferred language</p>
            <Select value={selectedOptions.language} onValueChange={(value) => setSelectedOptions((prev) => ({ ...prev, language: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      </div>
    );
  },
};

export const WithDescriptions: Story = {
  name: "With descriptions",
  render: function Render() {
    return (
      <div className="adm:grid adm:w-full adm:max-w-md adm:items-center adm:gap-2">
        <Label htmlFor="notification-frequency">Notification frequency</Label>
        <Select>
          <SelectTrigger id="notification-frequency">
            <SelectValue placeholder="How often should we notify you?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="realtime">
              <div className="adm:space-y-1">
                <div className="adm:font-medium">Real-time</div>
                <div className="adm:text-muted-foreground adm:text-xs">Get notified instantly</div>
              </div>
            </SelectItem>
            <SelectItem value="hourly">
              <div className="adm:space-y-1">
                <div className="adm:font-medium">Hourly</div>
                <div className="adm:text-muted-foreground adm:text-xs">Digest every hour</div>
              </div>
            </SelectItem>
            <SelectItem value="daily">
              <div className="adm:space-y-1">
                <div className="adm:font-medium">Daily</div>
                <div className="adm:text-muted-foreground adm:text-xs">Summary once per day</div>
              </div>
            </SelectItem>
            <SelectItem value="weekly">
              <div className="adm:space-y-1">
                <div className="adm:font-medium">Weekly</div>
                <div className="adm:text-muted-foreground adm:text-xs">Weekly summary report</div>
              </div>
            </SelectItem>
            <SelectItem value="never">
              <div className="adm:space-y-1">
                <div className="adm:font-medium">Never</div>
                <div className="adm:text-muted-foreground adm:text-xs">No notifications</div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
};
