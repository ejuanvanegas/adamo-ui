import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Textarea } from "@src/components/ui/textarea";
import { Button } from "@src/components/ui/button";
import { Label } from "@src/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Input } from "@src/components/ui/input";
import {
  SendIcon,
  SaveIcon,
  CheckIcon,
  AlertTriangleIcon,
  MessageSquareIcon,
  FileTextIcon,
  StarIcon,
} from "lucide-react";
import { cn } from "@src/lib/utils";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return <Textarea placeholder="Type your message here." />;
  },
};

export const Disabled: Story = {
  name: "Disabled",
  render: function Render() {
    return (
      <div className="adm:space-y-4">
        <Textarea placeholder="Type your message here." disabled />
        <Textarea
          defaultValue="This textarea is disabled with content."
          disabled
        />
      </div>
    );
  },
};

export const WithLabel: Story = {
  name: "With label",
  render: function Render() {
    return (
      <div className="adm:grid adm:w-full adm:gap-2">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    );
  },
};

export const WithText: Story = {
  name: "With text",
  render: function Render() {
    return (
      <div className="adm:grid adm:w-full adm:gap-2">
        <Label htmlFor="message-2">Your Message</Label>
        <Textarea placeholder="Type your message here." id="message-2" />
        <p className="adm:text-muted-foreground adm:text-sm">
          Your message will be copied to the support team.
        </p>
      </div>
    );
  },
};

export const WithButton: Story = {
  name: "With button",
  render: function Render() {
    return (
      <div className="adm:grid adm:w-full adm:gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>
          <SendIcon />
          Send message
        </Button>
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
        <div className="adm:grid adm:w-full adm:gap-2">
          <Label htmlFor="controlled-textarea">
            Your feedback ({value.length}/500 characters)
          </Label>
          <Textarea
            id="controlled-textarea"
            placeholder="Share your thoughts..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={500}
          />
          <div className="adm:flex adm:justify-between adm:text-sm adm:text-muted-foreground">
            <span>
              {value.length === 0 ? "Start typing..." : `${value.length} characters`}
            </span>
            <span>{500 - value.length} remaining</span>
          </div>
        </div>

        <div className="adm:flex adm:gap-2">
          <Button
            onClick={() => setValue("")}
            variant="outline"
            size="sm"
          >
            Clear
          </Button>
          <Button
            onClick={() => setValue("This is a sample message that demonstrates the controlled textarea functionality.")}
            variant="outline"
            size="sm"
          >
            Fill Sample
          </Button>
        </div>
      </div>
    );
  },
};

export const FormValidation: Story = {
  name: "Form validation",
  render: function Render() {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      if (comment.trim().length < 10) {
        setError("Comment must be at least 10 characters long");
        return;
      }
      setError("");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setComment("");
      }, 2000);
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Leave a Comment</CardTitle>
          <CardDescription>
            Share your thoughts about this article
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:space-y-2">
            <Label htmlFor="comment">Comment *</Label>
            <Textarea
              id="comment"
              placeholder="What did you think about this?"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                if (error) setError("");
              }}
              aria-invalid={!!error}
              rows={4}
            />
            {error && (
              <p className="adm:text-sm adm:text-destructive adm:flex adm:items-center adm:gap-1">
                <AlertTriangleIcon className="adm:size-4" />
                {error}
              </p>
            )}
            <p className="adm:text-xs adm:text-muted-foreground">
              {comment.length}/500 characters
            </p>
          </div>
        </CardContent>
        <CardFooter className="adm:flex adm:justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setComment("");
              setError("");
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={submitted}
          >
            {submitted
              ? (
                <>
                  <CheckIcon />
                  Submitted!
                </>
              )
              : (
                "Submit Comment"
              )}
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

export const MessageComposer: Story = {
  name: "Message composer",
  render: function Render() {
    const [message, setMessage] = useState("");
    const [priority, setPriority] = useState("normal");

    return (
      <Card className="adm:w-full adm:max-w-lg">
        <CardHeader>
          <CardTitle className="adm:flex adm:items-center adm:space-x-2">
            <MessageSquareIcon className="adm:size-5" />
            <span>New Message</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:grid adm:grid-cols-2 adm:gap-4">
            <div className="adm:space-y-2">
              <Label>To</Label>
              <Input placeholder="recipient@email.com" />
            </div>
            <div className="adm:space-y-2">
              <Label>Priority</Label>
              <Input
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="normal"
              />
            </div>
          </div>

          <div className="adm:space-y-2">
            <Label>Subject</Label>
            <Input placeholder="Enter subject..." />
          </div>

          <div className="adm:space-y-2">
            <Label htmlFor="message-content">Message</Label>
            <Textarea
              id="message-content"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="adm:resize-none"
            />
            <div className="adm:flex adm:items-center adm:justify-between adm:text-sm adm:text-muted-foreground">
              <div className="adm:flex adm:items-center adm:space-x-2">
                <Badge variant={priority === "urgent" ? "destructive" : priority === "high" ? "default" : "secondary"}>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </Badge>
                {priority === "urgent" && (
                  <span className="adm:text-destructive">Urgent message</span>
                )}
              </div>
              <span>{message.length} characters</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="adm:flex adm:justify-between">
          <div className="adm:flex adm:gap-2">
            <Button variant="outline" size="sm">
              <SaveIcon />
              Save Draft
            </Button>
          </div>
          <div className="adm:flex adm:gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>
              <SendIcon />
              Send Message
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

export const FeedbackForm: Story = {
  name: "Feedback form",
  render: function Render() {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState("");

    const StarRating = ({ value, onChange }: { value: number, onChange: (rating: number) => void }) => {
      return (
        <div className="adm:flex adm:space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={cn(
                "adm:size-6 adm:cursor-pointer adm:transition-colors",
                star <= value
                  ? "adm:fill-yellow-400 adm:text-yellow-400"
                  : "adm:text-muted-foreground adm:hover:text-yellow-400",
              )}
              onClick={() => onChange(star)}
            />
          ))}
        </div>
      );
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Rate Your Experience</CardTitle>
          <CardDescription>
            Help us improve by sharing your feedback
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-6">
          <div className="adm:space-y-2">
            <Label>Overall Rating</Label>
            <div className="adm:flex adm:items-center adm:space-x-2">
              <StarRating value={rating} onChange={setRating} />
              {rating > 0 && (
                <span className="adm:text-sm adm:text-muted-foreground">
                  {rating} of 5 stars
                </span>
              )}
            </div>
          </div>

          <div className="adm:space-y-2">
            <Label htmlFor="feedback">Additional Comments</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us more about your experience..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
            />
            <p className="adm:text-xs adm:text-muted-foreground">
              Optional: Share specific details about what worked well or could be improved
            </p>
          </div>

          <div className="adm:space-y-2">
            <Label>Would you recommend us?</Label>
            <div className="adm:flex adm:gap-2">
              <Button variant="outline" size="sm">👍 Yes</Button>
              <Button variant="outline" size="sm">👎 No</Button>
              <Button variant="outline" size="sm">🤷 Maybe</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="adm:w-full" disabled={rating === 0}>
            Submit Feedback
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

export const CodeEditor: Story = {
  name: "Code editor",
  render: function Render() {
    const [code, setCode] = useState(`function hello() {
  console.log("Hello, World!");
  return "Welcome to the textarea component!";
}`);

    return (
      <Card className="adm:w-full adm:max-w-2xl">
        <CardHeader>
          <CardTitle className="adm:flex adm:items-center adm:space-x-2">
            <FileTextIcon className="adm:size-5" />
            <span>Code Snippet</span>
          </CardTitle>
          <CardDescription>
            Edit and format your code
          </CardDescription>
        </CardHeader>
        <CardContent className="adm:space-y-4">
          <div className="adm:flex adm:items-center adm:justify-between">
            <Label htmlFor="code-editor">JavaScript Code</Label>
            <div className="adm:flex adm:gap-2">
              <Button variant="outline" size="sm">
                Format
              </Button>
              <Button variant="outline" size="sm">
                Copy
              </Button>
            </div>
          </div>

          <Textarea
            id="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={8}
            className="adm:font-mono adm:text-sm adm:resize-none"
            spellCheck={false}
          />

          <div className="adm:flex adm:items-center adm:justify-between adm:text-sm adm:text-muted-foreground">
            <span>Lines: {code.split("\n").length}</span>
            <span>Characters: {code.length}</span>
          </div>
        </CardContent>
        <CardFooter className="adm:flex adm:justify-between">
          <Button variant="outline">
            Reset
          </Button>
          <div className="adm:flex adm:gap-2">
            <Button variant="outline">
              <SaveIcon />
              Save
            </Button>
            <Button>
              Run Code
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  },
};

export const ChatInput: Story = {
  name: "Chat input",
  render: function Render() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
      if (message.trim()) {
        setMessage("");
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    };

    return (
      <Card className="adm:w-full adm:max-w-md">
        <CardHeader>
          <CardTitle>Chat Interface</CardTitle>
          <CardDescription>
            Send a message to the conversation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="adm:space-y-4">
            <div className="adm:space-y-2 adm:p-4 adm:border adm:rounded-lg adm:bg-muted/50 adm:min-h-[120px]">
              <div className="adm:text-sm">
                <strong>John:</strong> Hey, how's the project going?
              </div>
              <div className="adm:text-sm">
                <strong>You:</strong> Great! Just finishing up the final touches.
              </div>
            </div>

            <div className="adm:relative">
              <Textarea
                placeholder="Type a message... (Enter to send, Shift+Enter for new line)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={3}
                className="adm:pr-12 adm:resize-none"
              />
              <Button
                size="sm"
                className="adm:absolute adm:bottom-2 adm:right-2"
                onClick={handleSend}
                disabled={!message.trim()}
              >
                <SendIcon className="adm:size-4" />
              </Button>
            </div>

            <div className="adm:flex adm:justify-between adm:text-xs adm:text-muted-foreground">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <span>{message.length}/1000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  },
};

export const ResizableTextarea: Story = {
  name: "Resizable textarea",
  render: function Render() {
    const [content, setContent] = useState("");

    return (
      <div className="adm:space-y-6">
        <Card className="adm:w-full adm:max-w-md">
          <CardHeader>
            <CardTitle>Auto-resize (Default)</CardTitle>
            <CardDescription>
              Textarea automatically adjusts height
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Type multiple lines to see auto-resize..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="adm:min-h-[80px] adm:resize-none"
            />
          </CardContent>
        </Card>

        <Card className="adm:w-full adm:max-w-md">
          <CardHeader>
            <CardTitle>Manual Resize</CardTitle>
            <CardDescription>
              User can resize the textarea manually
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Drag the corner to resize..."
              className="adm:min-h-[80px] adm:resize-both"
            />
          </CardContent>
        </Card>

        <Card className="adm:w-full adm:max-w-md">
          <CardHeader>
            <CardTitle>Vertical Resize Only</CardTitle>
            <CardDescription>
              Resize height only, width is fixed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Resize vertically only..."
              className="adm:min-h-[80px] adm:resize-y"
            />
          </CardContent>
        </Card>

        <Card className="adm:w-full adm:max-w-md">
          <CardHeader>
            <CardTitle>No Resize</CardTitle>
            <CardDescription>
              Fixed size textarea
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Fixed size textarea..."
              rows={4}
              className="adm:resize-none"
            />
          </CardContent>
        </Card>
      </div>
    );
  },
};
