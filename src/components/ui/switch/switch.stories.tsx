import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Switch } from "@src/components/ui/switch";
import { Label } from "@src/components/ui/label";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Separator } from "@src/components/ui/separator";
import { BellIcon, MoonIcon, WifiIcon, BluetoothIcon, AirplayIcon, VolumeXIcon, EyeOffIcon, ShieldIcon } from "lucide-react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return <Switch />;
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    );
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:space-x-2">
          <Switch
            id="controlled-switch"
            checked={isChecked}
            onCheckedChange={setIsChecked}
          />
          <Label htmlFor="controlled-switch">
            Notifications {isChecked ? "enabled" : "disabled"}
          </Label>
        </div>
        <div className="adm:flex adm:gap-2">
          <Button
            onClick={() => setIsChecked(true)}
            size="sm"
            variant="outline"
          >
            Enable
          </Button>
          <Button
            onClick={() => setIsChecked(false)}
            size="sm"
            variant="outline"
          >
            Disable
          </Button>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:space-x-2">
          <Switch id="disabled-off" disabled />
          <Label htmlFor="disabled-off" className="adm:text-muted-foreground">
            Disabled (off)
          </Label>
        </div>
        <div className="adm:flex adm:items-center adm:space-x-2">
          <Switch id="disabled-on" disabled checked />
          <Label htmlFor="disabled-on" className="adm:text-muted-foreground">
            Disabled (on)
          </Label>
        </div>
      </div>
    );
  },
};

export const WithIcons: Story = {
  name: "With icons",
  render: function Render() {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      wifi: true,
      bluetooth: false,
    });

    const updateSetting = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:space-x-3">
          <BellIcon className="adm:size-4 adm:text-muted-foreground" />
          <Switch
            id="notifications"
            checked={settings.notifications}
            onCheckedChange={() => updateSetting("notifications")}
          />
          <Label htmlFor="notifications">Notifications</Label>
          <Badge variant={settings.notifications ? "default" : "secondary"}>
            {settings.notifications ? "On" : "Off"}
          </Badge>
        </div>

        <div className="adm:flex adm:items-center adm:space-x-3">
          <MoonIcon className="adm:size-4 adm:text-muted-foreground" />
          <Switch
            id="dark-mode"
            checked={settings.darkMode}
            onCheckedChange={() => updateSetting("darkMode")}
          />
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Badge variant={settings.darkMode ? "default" : "secondary"}>
            {settings.darkMode ? "On" : "Off"}
          </Badge>
        </div>

        <div className="adm:flex adm:items-center adm:space-x-3">
          <WifiIcon className="adm:size-4 adm:text-muted-foreground" />
          <Switch
            id="wifi"
            checked={settings.wifi}
            onCheckedChange={() => updateSetting("wifi")}
          />
          <Label htmlFor="wifi">Wi-Fi</Label>
          <Badge variant={settings.wifi ? "default" : "secondary"}>
            {settings.wifi ? "Connected" : "Disconnected"}
          </Badge>
        </div>

        <div className="adm:flex adm:items-center adm:space-x-3">
          <BluetoothIcon className="adm:size-4 adm:text-muted-foreground" />
          <Switch
            id="bluetooth"
            checked={settings.bluetooth}
            onCheckedChange={() => updateSetting("bluetooth")}
          />
          <Label htmlFor="bluetooth">Bluetooth</Label>
          <Badge variant={settings.bluetooth ? "default" : "secondary"}>
            {settings.bluetooth ? "On" : "Off"}
          </Badge>
        </div>
      </div>
    );
  },
};

export const DeviceControls: Story = {
  name: "Device controls",
  render: function Render() {
    const [deviceSettings, setDeviceSettings] = useState({
      airplaneMode: false,
      wifi: true,
      bluetooth: false,
      airdrop: true,
      doNotDisturb: false,
      lowPowerMode: false,
    });

    const updateSetting = (key: keyof typeof deviceSettings) => {
      setDeviceSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-sm">
        <CardHeader>
          <CardTitle>Control Center</CardTitle>
          <CardDescription>
            Quick access to device settings
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:grid adm:grid-cols-2 adm:gap-4">
            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2 adm:p-3 adm:border adm:rounded-lg">
              <AirplayIcon className="adm:size-6 adm:text-muted-foreground" />
              <span className="adm:text-sm adm:font-medium">Airplane</span>
              <Switch
                checked={deviceSettings.airplaneMode}
                onCheckedChange={() => updateSetting("airplaneMode")}
                className="adm:scale-75"
              />
            </div>

            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2 adm:p-3 adm:border adm:rounded-lg">
              <WifiIcon className="adm:size-6 adm:text-muted-foreground" />
              <span className="adm:text-sm adm:font-medium">Wi-Fi</span>
              <Switch
                checked={deviceSettings.wifi}
                onCheckedChange={() => updateSetting("wifi")}
                className="adm:scale-75"
              />
            </div>

            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2 adm:p-3 adm:border adm:rounded-lg">
              <BluetoothIcon className="adm:size-6 adm:text-muted-foreground" />
              <span className="adm:text-sm adm:font-medium">Bluetooth</span>
              <Switch
                checked={deviceSettings.bluetooth}
                onCheckedChange={() => updateSetting("bluetooth")}
                className="adm:scale-75"
              />
            </div>

            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2 adm:p-3 adm:border adm:rounded-lg">
              <AirplayIcon className="adm:size-6 adm:text-muted-foreground" />
              <span className="adm:text-sm adm:font-medium">AirDrop</span>
              <Switch
                checked={deviceSettings.airdrop}
                onCheckedChange={() => updateSetting("airdrop")}
                className="adm:scale-75"
              />
            </div>
          </div>

          <Separator />

          <div className="adm:space-y-3">
            <div className="adm:flex adm:items-center adm:justify-between">
              <div className="adm:flex adm:items-center adm:space-x-2">
                <VolumeXIcon className="adm:size-4 adm:text-muted-foreground" />
                <span className="adm:text-sm adm:font-medium">Do Not Disturb</span>
              </div>
              <Switch
                checked={deviceSettings.doNotDisturb}
                onCheckedChange={() => updateSetting("doNotDisturb")}
              />
            </div>

            <div className="adm:flex adm:items-center adm:justify-between">
              <div className="adm:flex adm:items-center adm:space-x-2">
                <EyeOffIcon className="adm:size-4 adm:text-muted-foreground" />
                <span className="adm:text-sm adm:font-medium">Low Power Mode</span>
              </div>
              <Switch
                checked={deviceSettings.lowPowerMode}
                onCheckedChange={() => updateSetting("lowPowerMode")}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const PrivacySettings: Story = {
  name: "Privacy settings",
  render: function Render() {
    const [privacySettings, setPrivacySettings] = useState({
      locationServices: true,
      analyticsData: false,
      crashReports: true,
      personalizedAds: false,
      dataSharing: false,
      cookieConsent: true,
    });

    const updateSetting = (key: keyof typeof privacySettings) => {
      setPrivacySettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-lg">
        <CardHeader>
          <CardTitle className="adm:flex adm:items-center adm:space-x-2">
            <ShieldIcon className="adm:size-5" />
            <span>Privacy & Security</span>
          </CardTitle>
          <CardDescription>
            Control how your data is collected and used
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-6">
          <div className="adm:space-y-4">
            <div className="adm:flex adm:items-start adm:justify-between adm:space-x-4">
              <div className="adm:flex-1">
                <Label htmlFor="location-services" className="adm:text-sm adm:font-medium">
                  Location Services
                </Label>
                <p className="adm:text-xs adm:text-muted-foreground adm:mt-1">
                  Allow apps to access your location for personalized experiences
                </p>
              </div>
              <Switch
                id="location-services"
                checked={privacySettings.locationServices}
                onCheckedChange={() => updateSetting("locationServices")}
              />
            </div>

            <div className="adm:flex adm:items-start adm:justify-between adm:space-x-4">
              <div className="adm:flex-1">
                <Label htmlFor="analytics-data" className="adm:text-sm adm:font-medium">
                  Analytics & Diagnostics
                </Label>
                <p className="adm:text-xs adm:text-muted-foreground adm:mt-1">
                  Share analytics data to help improve our products
                </p>
              </div>
              <Switch
                id="analytics-data"
                checked={privacySettings.analyticsData}
                onCheckedChange={() => updateSetting("analyticsData")}
              />
            </div>

            <div className="adm:flex adm:items-start adm:justify-between adm:space-x-4">
              <div className="adm:flex-1">
                <Label htmlFor="crash-reports" className="adm:text-sm adm:font-medium">
                  Crash Reports
                </Label>
                <p className="adm:text-xs adm:text-muted-foreground adm:mt-1">
                  Automatically send crash reports to help us fix issues
                </p>
              </div>
              <Switch
                id="crash-reports"
                checked={privacySettings.crashReports}
                onCheckedChange={() => updateSetting("crashReports")}
              />
            </div>

            <div className="adm:flex adm:items-start adm:justify-between adm:space-x-4">
              <div className="adm:flex-1">
                <Label htmlFor="personalized-ads" className="adm:text-sm adm:font-medium">
                  Personalized Advertising
                </Label>
                <p className="adm:text-xs adm:text-muted-foreground adm:mt-1">
                  Receive ads tailored to your interests and behavior
                </p>
              </div>
              <Switch
                id="personalized-ads"
                checked={privacySettings.personalizedAds}
                onCheckedChange={() => updateSetting("personalizedAds")}
              />
            </div>

            <div className="adm:flex adm:items-start adm:justify-between adm:space-x-4">
              <div className="adm:flex-1">
                <Label htmlFor="data-sharing" className="adm:text-sm adm:font-medium">
                  Data Sharing with Partners
                </Label>
                <p className="adm:text-xs adm:text-muted-foreground adm:mt-1">
                  Share anonymized data with trusted partners for research
                </p>
              </div>
              <Switch
                id="data-sharing"
                checked={privacySettings.dataSharing}
                onCheckedChange={() => updateSetting("dataSharing")}
              />
            </div>

            <div className="adm:flex adm:items-start adm:justify-between adm:space-x-4">
              <div className="adm:flex-1">
                <Label htmlFor="cookie-consent" className="adm:text-sm adm:font-medium">
                  Cookie Consent
                </Label>
                <p className="adm:text-xs adm:text-muted-foreground adm:mt-1">
                  Allow cookies for better browsing experience
                </p>
              </div>
              <Switch
                id="cookie-consent"
                checked={privacySettings.cookieConsent}
                onCheckedChange={() => updateSetting("cookieConsent")}
              />
            </div>
          </div>

          <div className="adm:flex adm:justify-end adm:space-x-2 adm:pt-4 adm:border-t">
            <Button variant="outline" size="sm">
              Reset to Defaults
            </Button>
            <Button size="sm">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const FeatureToggles: Story = {
  name: "Feature toggles",
  render: function Render() {
    const [features, setFeatures] = useState({
      newDashboard: false,
      betaFeatures: false,
      experimentalUI: false,
      advancedMode: false,
      debugMode: false,
    });

    const updateFeature = (key: keyof typeof features) => {
      setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const featureList = [
      {
        key: "newDashboard" as const,
        name: "New Dashboard",
        description: "Try our redesigned dashboard interface",
        badge: "New",
        badgeVariant: "default" as const,
      },
      {
        key: "betaFeatures" as const,
        name: "Beta Features",
        description: "Access features currently in beta testing",
        badge: "Beta",
        badgeVariant: "secondary" as const,
      },
      {
        key: "experimentalUI" as const,
        name: "Experimental UI",
        description: "Preview upcoming user interface changes",
        badge: "Experimental",
        badgeVariant: "outline" as const,
      },
      {
        key: "advancedMode" as const,
        name: "Advanced Mode",
        description: "Enable advanced features and settings",
        badge: "Pro",
        badgeVariant: "default" as const,
      },
      {
        key: "debugMode" as const,
        name: "Debug Mode",
        description: "Show debug information and developer tools",
        badge: "Developer",
        badgeVariant: "destructive" as const,
      },
    ];

    return (
      <Card className="adm:w-full adm:max-w-lg">
        <CardHeader>
          <CardTitle>Feature Toggles</CardTitle>
          <CardDescription>
            Enable or disable experimental features
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          {featureList.map((feature) => (
            <div
              key={feature.key}
              className="adm:flex adm:items-start adm:justify-between adm:space-x-4 adm:p-3 adm:border adm:rounded-lg"
            >
              <div className="adm:flex-1 adm:space-y-1">
                <div className="adm:flex adm:items-center adm:space-x-2">
                  <Label
                    htmlFor={feature.key}
                    className="adm:text-sm adm:font-medium"
                  >
                    {feature.name}
                  </Label>
                  <Badge variant={feature.badgeVariant} className="adm:text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <p className="adm:text-xs adm:text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <Switch
                id={feature.key}
                checked={features[feature.key]}
                onCheckedChange={() => updateFeature(feature.key)}
              />
            </div>
          ))}

          <div className="adm:pt-4 adm:border-t">
            <div className="adm:flex adm:justify-between adm:text-sm adm:text-muted-foreground">
              <span>Active features:</span>
              <span>
                {Object.values(features).filter(Boolean).length} / {Object.keys(features).length}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};
