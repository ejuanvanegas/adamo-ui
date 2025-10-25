import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "@src/components/ui/toggle";
import { Label } from "@src/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Separator } from "@src/components/ui/separator";
import {
  BookmarkIcon,
  ItalicIcon,
  BoldIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  MicIcon,
  MicOffIcon,
  VideoIcon,
  VideoOffIcon,
  VolumeXIcon,
  Volume2Icon,
  SunIcon,
  MoonIcon,
  BellIcon,
  BellOffIcon,
  EyeIcon,
  EyeOffIcon,
  StarIcon,
  HeartIcon,
  MessageSquareIcon,
  ShareIcon,
  DownloadIcon,
  PlayIcon,
  PauseIcon,
  ShuffleIcon,
  RepeatIcon,
} from "lucide-react";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
    );
  },
};

export const WithText: Story = {
  name: "With text",
  render: function Render() {
    return (
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
    );
  },
};

export const Outline: Story = {
  name: "Outline",
  render: function Render() {
    return (
      <Toggle variant="outline" aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
    );
  },
};

export const Sizes: Story = {
  name: "Sizes",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-4">
        <Toggle size="sm" aria-label="Small toggle">
          <ItalicIcon />
        </Toggle>
        <Toggle size="default" aria-label="Default toggle">
          <ItalicIcon />
        </Toggle>
        <Toggle size="lg" aria-label="Large toggle">
          <ItalicIcon />
        </Toggle>
      </div>
    );
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:flex adm:items-center adm:gap-4">
        <Toggle disabled aria-label="Disabled toggle off">
          <UnderlineIcon />
        </Toggle>
        <Toggle disabled defaultPressed aria-label="Disabled toggle on">
          <UnderlineIcon />
        </Toggle>
      </div>
    );
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <div className="adm:space-y-4">
        <div className="adm:flex adm:items-center adm:space-x-2">
          <Toggle
            pressed={isPressed}
            onPressedChange={setIsPressed}
            aria-label="Toggle bold"
          >
            <BoldIcon />
            Bold
          </Toggle>
          <span className="adm:text-sm adm:text-muted-foreground">
            State: {isPressed ? "Pressed" : "Not pressed"}
          </span>
        </div>

        <div className="adm:flex adm:gap-2">
          <button
            onClick={() => setIsPressed(true)}
            className="adm:px-3 adm:py-1 adm:text-sm adm:border adm:rounded"
          >
            Press
          </button>
          <button
            onClick={() => setIsPressed(false)}
            className="adm:px-3 adm:py-1 adm:text-sm adm:border adm:rounded"
          >
            Unpress
          </button>
        </div>
      </div>
    );
  },
};

export const TextFormatting: Story = {
  name: "Text formatting",
  render: function Render() {
    const [formatting, setFormatting] = useState({
      bold: false,
      italic: false,
      underline: false,
    });

    const toggleFormat = (format: keyof typeof formatting) => {
      setFormatting((prev) => ({ ...prev, [format]: !prev[format] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Text Editor</CardTitle>
          <CardDescription>
            Format your text with these options
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:gap-1">
            <Toggle
              pressed={formatting.bold}
              onPressedChange={() => toggleFormat("bold")}
              aria-label="Toggle bold"
              size="sm"
            >
              <BoldIcon />
            </Toggle>
            <Toggle
              pressed={formatting.italic}
              onPressedChange={() => toggleFormat("italic")}
              aria-label="Toggle italic"
              size="sm"
            >
              <ItalicIcon />
            </Toggle>
            <Toggle
              pressed={formatting.underline}
              onPressedChange={() => toggleFormat("underline")}
              aria-label="Toggle underline"
              size="sm"
            >
              <UnderlineIcon />
            </Toggle>
          </div>

          <div className="adm:p-3 adm:border adm:rounded adm:bg-muted/50">
            <p
              className={cn(
                "adm:text-sm",
                formatting.bold && "adm:font-bold",
                formatting.italic && "adm:italic",
                formatting.underline && "adm:underline",
              )}
            >
              Sample text with formatting applied
            </p>
          </div>

          <div className="adm:space-y-2">
            <h4 className="adm:text-sm adm:font-medium">Active Formatting:</h4>
            <div className="adm:flex adm:gap-2">
              {formatting.bold && <Badge variant="secondary">Bold</Badge>}
              {formatting.italic && <Badge variant="secondary">Italic</Badge>}
              {formatting.underline && <Badge variant="secondary">Underline</Badge>}
              {!formatting.bold && !formatting.italic && !formatting.underline && (
                <span className="adm:text-sm adm:text-muted-foreground">None</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const TextAlignment: Story = {
  name: "Text alignment",
  render: function Render() {
    const [alignment, setAlignment] = useState("left");

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Text Alignment</CardTitle>
          <CardDescription>
            Choose how your text should be aligned
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:gap-1">
            <Toggle
              pressed={alignment === "left"}
              onPressedChange={() => setAlignment("left")}
              aria-label="Align left"
              variant="outline"
              size="sm"
            >
              <AlignLeftIcon />
            </Toggle>
            <Toggle
              pressed={alignment === "center"}
              onPressedChange={() => setAlignment("center")}
              aria-label="Align center"
              variant="outline"
              size="sm"
            >
              <AlignCenterIcon />
            </Toggle>
            <Toggle
              pressed={alignment === "right"}
              onPressedChange={() => setAlignment("right")}
              aria-label="Align right"
              variant="outline"
              size="sm"
            >
              <AlignRightIcon />
            </Toggle>
          </div>

          <div className="adm:p-4 adm:border adm:rounded adm:bg-muted/50">
            <p
              className={cn(
                "adm:text-sm",
                alignment === "left" && "adm:text-left",
                alignment === "center" && "adm:text-center",
                alignment === "right" && "adm:text-right",
              )}
            >
              This text demonstrates the selected alignment. Change the alignment using the buttons above.
            </p>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <Label>Current alignment:</Label>
            <Badge>{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</Badge>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const MediaControls: Story = {
  name: "Media controls",
  render: function Render() {
    const [mediaState, setMediaState] = useState({
      microphone: false,
      camera: false,
      sound: true,
    });

    const toggleMedia = (control: keyof typeof mediaState) => {
      setMediaState((prev) => ({ ...prev, [control]: !prev[control] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Video Call Controls</CardTitle>
          <CardDescription>
            Manage your audio and video settings
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:justify-center adm:gap-3">
            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
              <Toggle
                pressed={mediaState.microphone}
                onPressedChange={() => toggleMedia("microphone")}
                aria-label="Toggle microphone"
                variant="outline"
                className={cn(
                  "adm:size-12",
                  !mediaState.microphone && "adm:bg-destructive adm:text-destructive-foreground adm:hover:bg-destructive/90",
                )}
              >
                {mediaState.microphone ? <MicIcon /> : <MicOffIcon />}
              </Toggle>
              <span className="adm:text-xs adm:text-center">
                {mediaState.microphone ? "Mute" : "Unmute"}
              </span>
            </div>

            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
              <Toggle
                pressed={mediaState.camera}
                onPressedChange={() => toggleMedia("camera")}
                aria-label="Toggle camera"
                variant="outline"
                className={cn(
                  "adm:size-12",
                  !mediaState.camera && "adm:bg-destructive adm:text-destructive-foreground adm:hover:bg-destructive/90",
                )}
              >
                {mediaState.camera ? <VideoIcon /> : <VideoOffIcon />}
              </Toggle>
              <span className="adm:text-xs adm:text-center">
                {mediaState.camera ? "Stop" : "Start"}
              </span>
            </div>

            <div className="adm:flex adm:flex-col adm:items-center adm:space-y-2">
              <Toggle
                pressed={mediaState.sound}
                onPressedChange={() => toggleMedia("sound")}
                aria-label="Toggle sound"
                variant="outline"
                className="adm:size-12"
              >
                {mediaState.sound ? <Volume2Icon /> : <VolumeXIcon />}
              </Toggle>
              <span className="adm:text-xs adm:text-center">
                {mediaState.sound ? "Mute" : "Unmute"}
              </span>
            </div>
          </div>

          <Separator />

          <div className="adm:space-y-2">
            <h4 className="adm:text-sm adm:font-medium">Call Status:</h4>
            <div className="adm:grid adm:grid-cols-3 adm:gap-2 adm:text-sm">
              <div className="adm:flex adm:items-center adm:space-x-2">
                <div
                  className={cn(
                    "adm:size-2 adm:rounded-full",
                    mediaState.microphone ? "adm:bg-green-500" : "adm:bg-red-500",
                  )}
                />
                <span>Mic</span>
              </div>
              <div className="adm:flex adm:items-center adm:space-x-2">
                <div
                  className={cn(
                    "adm:size-2 adm:rounded-full",
                    mediaState.camera ? "adm:bg-green-500" : "adm:bg-red-500",
                  )}
                />
                <span>Camera</span>
              </div>
              <div className="adm:flex adm:items-center adm:space-x-2">
                <div
                  className={cn(
                    "adm:size-2 adm:rounded-full",
                    mediaState.sound ? "adm:bg-green-500" : "adm:bg-red-500",
                  )}
                />
                <span>Audio</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const UserPreferences: Story = {
  name: "User preferences",
  render: function Render() {
    const [preferences, setPreferences] = useState({
      darkMode: false,
      notifications: true,
      privacy: false,
    });

    const togglePreference = (pref: keyof typeof preferences) => {
      setPreferences((prev) => ({ ...prev, [pref]: !prev[pref] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>User Preferences</CardTitle>
          <CardDescription>
            Customize your experience
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:space-y-3">
            <div className="adm:flex adm:items-center adm:justify-between">
              <div className="adm:flex adm:items-center adm:space-x-3">
                {preferences.darkMode ? <MoonIcon className="adm:size-4" /> : <SunIcon className="adm:size-4" />}
                <div>
                  <Label className="adm:text-sm adm:font-medium">
                    {preferences.darkMode ? "Dark Mode" : "Light Mode"}
                  </Label>
                  <p className="adm:text-xs adm:text-muted-foreground">
                    Toggle between light and dark themes
                  </p>
                </div>
              </div>
              <Toggle
                pressed={preferences.darkMode}
                onPressedChange={() => togglePreference("darkMode")}
                aria-label="Toggle dark mode"
                variant="outline"
              >
                {preferences.darkMode ? <MoonIcon /> : <SunIcon />}
              </Toggle>
            </div>

            <div className="adm:flex adm:items-center adm:justify-between">
              <div className="adm:flex adm:items-center adm:space-x-3">
                {preferences.notifications ? <BellIcon className="adm:size-4" /> : <BellOffIcon className="adm:size-4" />}
                <div>
                  <Label className="adm:text-sm adm:font-medium">Notifications</Label>
                  <p className="adm:text-xs adm:text-muted-foreground">
                    Receive updates and alerts
                  </p>
                </div>
              </div>
              <Toggle
                pressed={preferences.notifications}
                onPressedChange={() => togglePreference("notifications")}
                aria-label="Toggle notifications"
                variant="outline"
              >
                {preferences.notifications ? <BellIcon /> : <BellOffIcon />}
              </Toggle>
            </div>

            <div className="adm:flex adm:items-center adm:justify-between">
              <div className="adm:flex adm:items-center adm:space-x-3">
                {preferences.privacy ? <EyeOffIcon className="adm:size-4" /> : <EyeIcon className="adm:size-4" />}
                <div>
                  <Label className="adm:text-sm adm:font-medium">Privacy Mode</Label>
                  <p className="adm:text-xs adm:text-muted-foreground">
                    Hide your online status
                  </p>
                </div>
              </div>
              <Toggle
                pressed={preferences.privacy}
                onPressedChange={() => togglePreference("privacy")}
                aria-label="Toggle privacy mode"
                variant="outline"
              >
                {preferences.privacy ? <EyeOffIcon /> : <EyeIcon />}
              </Toggle>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const SocialActions: Story = {
  name: "Social actions",
  render: function Render() {
    const [actions, setActions] = useState({
      liked: false,
      bookmarked: false,
      starred: false,
    });

    const toggleAction = (action: keyof typeof actions) => {
      setActions((prev) => ({ ...prev, [action]: !prev[action] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Social Post</CardTitle>
          <CardDescription>
            Interact with this content
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:p-4 adm:border adm:rounded adm:bg-muted/50">
            <p className="adm:text-sm">
              This is a sample social media post. You can like, bookmark, or star this content using the buttons below.
            </p>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:gap-2">
              <Toggle
                pressed={actions.liked}
                onPressedChange={() => toggleAction("liked")}
                aria-label="Like post"
                variant="outline"
                size="sm"
                className={cn(
                  actions.liked && "adm:text-red-500 adm:border-red-200 adm:bg-red-50",
                )}
              >
                <HeartIcon className={cn(actions.liked && "adm:fill-current")} />
                Like
              </Toggle>

              <Toggle
                pressed={actions.bookmarked}
                onPressedChange={() => toggleAction("bookmarked")}
                aria-label="Bookmark post"
                variant="outline"
                size="sm"
                className={cn(
                  actions.bookmarked && "adm:text-blue-500 adm:border-blue-200 adm:bg-blue-50",
                )}
              >
                <BookmarkIcon className={cn(actions.bookmarked && "adm:fill-current")} />
                Save
              </Toggle>

              <Toggle
                pressed={actions.starred}
                onPressedChange={() => toggleAction("starred")}
                aria-label="Star post"
                variant="outline"
                size="sm"
                className={cn(
                  actions.starred && "adm:text-yellow-500 adm:border-yellow-200 adm:bg-yellow-50",
                )}
              >
                <StarIcon className={cn(actions.starred && "adm:fill-current")} />
                Star
              </Toggle>
            </div>

            <div className="adm:flex adm:gap-1">
              <Toggle aria-label="Comment" variant="outline" size="sm">
                <MessageSquareIcon />
              </Toggle>
              <Toggle aria-label="Share" variant="outline" size="sm">
                <ShareIcon />
              </Toggle>
            </div>
          </div>

          <div className="adm:flex adm:justify-between adm:text-sm adm:text-muted-foreground">
            <span>
              {Object.values(actions).filter(Boolean).length} interactions
            </span>
            <span>2 hours ago</span>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const MusicPlayer: Story = {
  name: "Music player",
  render: function Render() {
    const [playerState, setPlayerState] = useState({
      playing: false,
      shuffle: false,
      repeat: false,
      favorite: false,
    });

    const toggleState = (state: keyof typeof playerState) => {
      setPlayerState((prev) => ({ ...prev, [state]: !prev[state] }));
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Now Playing</CardTitle>
          <CardDescription>
            Control your music playback
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:text-center adm:space-y-2">
            <h3 className="adm:font-medium">Bohemian Rhapsody</h3>
            <p className="adm:text-sm adm:text-muted-foreground">Queen</p>
          </div>

          <div className="adm:flex adm:items-center adm:justify-center adm:space-x-4">
            <Toggle
              pressed={playerState.shuffle}
              onPressedChange={() => toggleState("shuffle")}
              aria-label="Toggle shuffle"
              variant="outline"
              size="sm"
              className={cn(
                playerState.shuffle && "adm:text-primary adm:border-primary/50 adm:bg-primary/10",
              )}
            >
              <ShuffleIcon />
            </Toggle>

            <Toggle
              pressed={playerState.playing}
              onPressedChange={() => toggleState("playing")}
              aria-label={playerState.playing ? "Pause" : "Play"}
              variant="outline"
              size="lg"
              className="adm:size-12"
            >
              {playerState.playing ? <PauseIcon /> : <PlayIcon />}
            </Toggle>

            <Toggle
              pressed={playerState.repeat}
              onPressedChange={() => toggleState("repeat")}
              aria-label="Toggle repeat"
              variant="outline"
              size="sm"
              className={cn(
                playerState.repeat && "adm:text-primary adm:border-primary/50 adm:bg-primary/10",
              )}
            >
              <RepeatIcon />
            </Toggle>
          </div>

          <div className="adm:flex adm:items-center adm:justify-between">
            <div className="adm:flex adm:gap-2">
              <Toggle
                pressed={playerState.favorite}
                onPressedChange={() => toggleState("favorite")}
                aria-label="Add to favorites"
                variant="outline"
                size="sm"
                className={cn(
                  playerState.favorite && "adm:text-red-500 adm:border-red-200 adm:bg-red-50",
                )}
              >
                <HeartIcon className={cn(playerState.favorite && "adm:fill-current")} />
              </Toggle>

              <Toggle aria-label="Download" variant="outline" size="sm">
                <DownloadIcon />
              </Toggle>
            </div>

            <div className="adm:text-sm adm:text-muted-foreground">
              2:45 / 5:55
            </div>
          </div>

          <div className="adm:w-full adm:bg-muted adm:rounded-full adm:h-2">
            <div className="adm:bg-primary adm:h-2 adm:rounded-full adm:w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  },
};
