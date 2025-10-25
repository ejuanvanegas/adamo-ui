import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "@src/components/ui/slider";
import { Label } from "@src/components/ui/label";
import { Button } from "@src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        className={cn("adm:w-[60%]")}
      />
    );
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    const [value, setValue] = useState([50]);

    return (
      <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2">
        <Label htmlFor="volume">Volume: {value[0]}%</Label>
        <Slider
          id="volume"
          max={100}
          step={1}
          value={value}
          onValueChange={setValue}
          className="adm:w-full"
        />
      </div>
    );
  },
};

export const Range: Story = {
  name: "Range",
  render: function Render() {
    const [value, setValue] = useState([20, 80]);

    return (
      <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2">
        <Label>Price Range: ${value[0]} - ${value[1]}</Label>
        <Slider
          max={100}
          step={1}
          value={value}
          onValueChange={setValue}
          className="adm:w-full"
        />
      </div>
    );
  },
};

export const Steps: Story = {
  name: "Steps",
  render: function Render() {
    const [value, setValue] = useState([25]);
    const stepSize = 25;

    return (
      <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2">
        <Label>Progress: {value[0]}%</Label>
        <Slider
          max={100}
          step={stepSize}
          value={value}
          onValueChange={setValue}
          className="adm:w-full"
        />
        <div className="adm:flex adm:justify-between adm:text-xs adm:text-muted-foreground">
          <span>0%</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span>100%</span>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-2">
        <Label>Disabled Slider</Label>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          disabled
          className="adm:w-full"
        />
      </div>
    );
  },
};

export const Vertical: Story = {
  name: "Vertical",
  render: function Render() {
    const [value, setValue] = useState([60]);

    return (
      <div className="adm:flex adm:h-64 adm:items-center adm:space-x-6">
        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <Label>Volume</Label>
          <Slider
            orientation="vertical"
            max={100}
            step={1}
            value={value}
            onValueChange={setValue}
            className="adm:h-48"
          />
          <span className="adm:text-sm adm:text-muted-foreground">{value[0]}%</span>
        </div>

        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <Label>Bass</Label>
          <Slider
            orientation="vertical"
            defaultValue={[30]}
            max={100}
            step={1}
            className="adm:h-48"
          />
          <span className="adm:text-sm adm:text-muted-foreground">30%</span>
        </div>

        <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
          <Label>Treble</Label>
          <Slider
            orientation="vertical"
            defaultValue={[70]}
            max={100}
            step={1}
            className="adm:h-48"
          />
          <span className="adm:text-sm adm:text-muted-foreground">70%</span>
        </div>
      </div>
    );
  },
};

export const WithButtons: Story = {
  name: "With buttons",
  render: function Render() {
    const [value, setValue] = useState([50]);

    const decrease = () => {
      setValue([Math.max(0, value[0] - 10)]);
    };

    const increase = () => {
      setValue([Math.min(100, value[0] + 10)]);
    };

    return (
      <div className="adm:grid adm:w-full adm:max-w-sm adm:items-center adm:gap-4">
        <Label>Volume: {value[0]}%</Label>
        <div className="adm:flex adm:items-center adm:space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={decrease}
            disabled={value[0] === 0}
          >
            -
          </Button>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
            className="adm:flex-1"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={increase}
            disabled={value[0] === 100}
          >
            +
          </Button>
        </div>
      </div>
    );
  },
};

export const PriceFilter: Story = {
  name: "Price filter",
  render: function Render() {
    const [priceRange, setPriceRange] = useState([25, 75]);

    return (
      <Card className="adm:w-full adm:max-w-sm">
        <CardHeader>
          <CardTitle>Filter by Price</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:space-y-2">
            <Label>Price Range</Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100}
              step={1}
              className="adm:w-full"
            />
          </div>
          <div className="adm:flex adm:justify-between adm:text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div className="adm:flex adm:justify-between adm:text-xs adm:text-muted-foreground">
            <span>Min: $0</span>
            <span>Max: $100</span>
          </div>
          <Button className="adm:w-full">Apply Filter</Button>
        </CardContent>
      </Card>
    );
  },
};

export const TemperatureControl: Story = {
  name: "Temperature control",
  render: function Render() {
    const [temperature, setTemperature] = useState([72]);

    const getTemperatureColor = (temp: number) => {
      if (temp < 60) return "adm:text-blue-500";
      if (temp < 70) return "adm:text-green-500";
      if (temp < 80) return "adm:text-yellow-500";
      return "adm:text-red-500";
    };

    const getTemperatureStatus = (temp: number) => {
      if (temp < 60) return "Cold";
      if (temp < 70) return "Cool";
      if (temp < 80) return "Warm";
      return "Hot";
    };

    return (
      <Card className="adm:w-full adm:max-w-sm">
        <CardHeader>
          <CardTitle>Thermostat</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:text-center">
            <div className={cn("adm:text-3xl adm:font-bold", getTemperatureColor(temperature[0]))}>
              {temperature[0]}°F
            </div>
            <Badge variant="secondary" className="adm:mt-2">
              {getTemperatureStatus(temperature[0])}
            </Badge>
          </div>
          <div className="adm:space-y-2">
            <Label>Target Temperature</Label>
            <Slider
              value={temperature}
              onValueChange={setTemperature}
              min={50}
              max={90}
              step={1}
              className="adm:w-full"
            />
          </div>
          <div className="adm:flex adm:justify-between adm:text-xs adm:text-muted-foreground">
            <span>50°F</span>
            <span>90°F</span>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const AudioEqualizer: Story = {
  name: "Audio equalizer",
  render: function Render() {
    const [frequencies, setFrequencies] = useState([50, 60, 40, 70, 80, 30, 90]);
    const frequencyLabels = ["60Hz", "170Hz", "310Hz", "600Hz", "1kHz", "3kHz", "6kHz"];

    const updateFrequency = (index: number, newValue: number[]) => {
      const newFrequencies = [...frequencies];
      newFrequencies[index] = newValue[0];
      setFrequencies(newFrequencies);
    };

    return (
      <Card className="adm:w-full adm:max-w-lg">
        <CardHeader>
          <CardTitle>Audio Equalizer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="adm:flex adm:items-end adm:justify-between adm:h-64 adm:space-x-4">
            {frequencies.map((freq, index) => (
              <div key={index} className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
                <span className="adm:text-xs adm:font-medium">{freq}%</span>
                <Slider
                  orientation="vertical"
                  value={[freq]}
                  onValueChange={(value) => updateFrequency(index, value)}
                  max={100}
                  step={1}
                  className="adm:h-40"
                />
                <span className="adm:text-xs adm:text-muted-foreground">
                  {frequencyLabels[index]}
                </span>
              </div>
            ))}
          </div>
          <div className="adm:flex adm:justify-between adm:mt-4">
            <Button variant="outline" size="sm">
              Reset
            </Button>
            <Button variant="outline" size="sm">
              Preset
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const RgbColorPicker: Story = {
  name: "RGB color picker",
  render: function Render() {
    const [red, setRed] = useState([128]);
    const [green, setGreen] = useState([200]);
    const [blue, setBlue] = useState([75]);

    const rgbColor = `rgb(${red[0]}, ${green[0]}, ${blue[0]})`;

    return (
      <Card className="adm:w-full adm:max-w-sm">
        <CardHeader>
          <CardTitle>RGB Color Picker</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-6">
          <div
            className="adm:w-full adm:h-20 adm:rounded-lg adm:border"
            style={{ backgroundColor: rgbColor }}
          />

          <div className="adm:space-y-4">
            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between">
                <Label>Red</Label>
                <span className="adm:text-sm adm:text-muted-foreground">{red[0]}</span>
              </div>
              <Slider
                value={red}
                onValueChange={setRed}
                max={255}
                step={1}
                className="adm:w-full"
              />
            </div>

            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between">
                <Label>Green</Label>
                <span className="adm:text-sm adm:text-muted-foreground">{green[0]}</span>
              </div>
              <Slider
                value={green}
                onValueChange={setGreen}
                max={255}
                step={1}
                className="adm:w-full"
              />
            </div>

            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between">
                <Label>Blue</Label>
                <span className="adm:text-sm adm:text-muted-foreground">{blue[0]}</span>
              </div>
              <Slider
                value={blue}
                onValueChange={setBlue}
                max={255}
                step={1}
                className="adm:w-full"
              />
            </div>
          </div>

          <div className="adm:text-center adm:text-sm adm:font-mono adm:text-muted-foreground">
            {rgbColor}
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const VolumeControl: Story = {
  name: "Volume control",
  render: function Render() {
    const [masterVolume, setMasterVolume] = useState([75]);
    const [musicVolume, setMusicVolume] = useState([80]);
    const [effectsVolume, setEffectsVolume] = useState([60]);
    const [voiceVolume, setVoiceVolume] = useState([90]);

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Audio Settings</CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-6">
          <div className="adm:space-y-2">
            <div className="adm:flex adm:justify-between">
              <Label className="adm:font-semibold">Master Volume</Label>
              <span className="adm:text-sm adm:text-muted-foreground">{masterVolume[0]}%</span>
            </div>
            <Slider
              value={masterVolume}
              onValueChange={setMasterVolume}
              max={100}
              step={1}
              className="adm:w-full"
            />
          </div>

          <div className="adm:space-y-4">
            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between">
                <Label>Music</Label>
                <span className="adm:text-sm adm:text-muted-foreground">{musicVolume[0]}%</span>
              </div>
              <Slider
                value={musicVolume}
                onValueChange={setMusicVolume}
                max={100}
                step={1}
                className="adm:w-full"
              />
            </div>

            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between">
                <Label>Sound Effects</Label>
                <span className="adm:text-sm adm:text-muted-foreground">{effectsVolume[0]}%</span>
              </div>
              <Slider
                value={effectsVolume}
                onValueChange={setEffectsVolume}
                max={100}
                step={1}
                className="adm:w-full"
              />
            </div>

            <div className="adm:space-y-2">
              <div className="adm:flex adm:justify-between">
                <Label>Voice Chat</Label>
                <span className="adm:text-sm adm:text-muted-foreground">{voiceVolume[0]}%</span>
              </div>
              <Slider
                value={voiceVolume}
                onValueChange={setVoiceVolume}
                max={100}
                step={1}
                className="adm:w-full"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};
