import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@src/components/ui/sheet/sheet";
import { Button } from "@src/components/ui/button";
import { Input } from "@src/components/ui/input";
import { Label } from "@src/components/ui/label";
import { Badge } from "@src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Separator } from "@src/components/ui/separator";
import { Switch } from "@src/components/ui/switch/switch";
import {
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  Trash2,
  Menu,
  Search,
  Filter,
  ShoppingCart as CartIcon,
} from "lucide-react";
import { Checkbox } from "@src/components/ui/checkbox";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="adm:grid adm:flex-1 adm:auto-rows-min adm:gap-6 adm:px-4">
            <div className="adm:grid adm:gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="adm:grid adm:gap-3">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const LeftSide: Story = {
  name: "Left side",
  render: function Render() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu className="adm:h-4 adm:w-4 adm:mr-2" />
            Open Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              Access all the main sections of the application.
            </SheetDescription>
          </SheetHeader>
          <div className="adm:space-y-4 adm:px-4">
            <nav className="adm:space-y-2">
              <a href="#" className="adm:flex adm:items-center adm:gap-3 adm:p-2 adm:rounded-md adm:hover:bg-muted">
                <User className="adm:h-4 adm:w-4" />
                Profile
              </a>
              <a href="#" className="adm:flex adm:items-center adm:gap-3 adm:p-2 adm:rounded-md adm:hover:bg-muted">
                <Settings className="adm:h-4 adm:w-4" />
                Settings
              </a>
              <a href="#" className="adm:flex adm:items-center adm:gap-3 adm:p-2 adm:rounded-md adm:hover:bg-muted">
                <Bell className="adm:h-4 adm:w-4" />
                Notifications
              </a>
              <a href="#" className="adm:flex adm:items-center adm:gap-3 adm:p-2 adm:rounded-md adm:hover:bg-muted">
                <CreditCard className="adm:h-4 adm:w-4" />
                Billing
              </a>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const TopSide: Story = {
  name: "Top side",
  render: function Render() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Search className="adm:h-4 adm:w-4 adm:mr-2" />
            Search
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="adm:h-[300px]">
          <SheetHeader>
            <SheetTitle>Search Everything</SheetTitle>
            <SheetDescription>
              Find what you're looking for across all your content.
            </SheetDescription>
          </SheetHeader>
          <div className="adm:space-y-4 adm:px-4">
            <div className="adm:flex adm:gap-2">
              <Input placeholder="Type to search..." className="adm:flex-1" />
              <Button>
                <Search className="adm:h-4 adm:w-4" />
              </Button>
            </div>
            <div className="adm:space-y-2">
              <p className="adm:text-sm adm:font-medium">Recent searches</p>
              <div className="adm:flex adm:gap-2 adm:flex-wrap">
                <Badge variant="secondary">React components</Badge>
                <Badge variant="secondary">UI design</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  },
};

export const BottomSide: Story = {
  name: "Bottom side",
  render: function Render() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Filter className="adm:h-4 adm:w-4 adm:mr-2" />
            Filter Options
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="adm:h-[400px]">
          <SheetHeader>
            <SheetTitle>Filter Products</SheetTitle>
            <SheetDescription>
              Refine your search results with these filters.
            </SheetDescription>
          </SheetHeader>
          <div className="adm:grid adm:grid-cols-2 adm:gap-6 adm:px-4">
            <div className="adm:space-y-4">
              <div>
                <Label className="adm:text-sm adm:font-medium">Price Range</Label>
                <div className="adm:flex adm:gap-2 adm:mt-2">
                  <Input placeholder="Min" />
                  <Input placeholder="Max" />
                </div>
              </div>
              <div>
                <Label className="adm:text-sm adm:font-medium">Category</Label>
                <div className="adm:space-y-2 adm:mt-2">
                  <div className="adm:flex adm:items-center adm:gap-2">
                    <Checkbox id="electronics" />
                    <Label htmlFor="electronics">Electronics</Label>
                  </div>
                  <div className="adm:flex adm:items-center adm:gap-2">
                    <Checkbox id="clothing" />
                    <Label htmlFor="clothing">Clothing</Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="adm:space-y-4">
              <div>
                <Label className="adm:text-sm adm:font-medium">Brand</Label>
                <div className="adm:space-y-2 adm:mt-2">
                  <div className="adm:flex adm:items-center adm:gap-2">
                    <Checkbox id="brand-a" />
                    <Label htmlFor="brand-a">Brand A</Label>
                  </div>
                  <div className="adm:flex adm:items-center adm:gap-2">
                    <Checkbox id="brand-b" />
                    <Label htmlFor="brand-b">Brand B</Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline">Clear All</Button>
            <Button>Apply Filters</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const WithSettings: Story = {
  name: "With settings",
  render: function Render() {
    const [settings, setSettings] = useState({
      notifications: true,
      marketing: false,
      analytics: true,
      darkMode: false,
    });

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Settings className="adm:h-4 adm:w-4 adm:mr-2" />
            Settings
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Application Settings</SheetTitle>
            <SheetDescription>
              Customize your experience and manage your preferences.
            </SheetDescription>
          </SheetHeader>
          <div className="adm:space-y-6 adm:px-4">
            <div className="adm:space-y-4">
              <h3 className="adm:text-lg adm:font-semibold">Notifications</h3>
              <div className="adm:space-y-3">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:text-sm adm:font-medium">Push notifications</p>
                    <p className="adm:text-muted-foreground adm:text-xs">Receive notifications on your device</p>
                  </div>
                  <Switch
                    checked={settings.notifications}
                    onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, notifications: checked }))}
                  />
                </div>
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:text-sm adm:font-medium">Marketing emails</p>
                    <p className="adm:text-muted-foreground adm:text-xs">Receive updates about new features</p>
                  </div>
                  <Switch
                    checked={settings.marketing}
                    onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, marketing: checked }))}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="adm:space-y-4">
              <h3 className="adm:text-lg adm:font-semibold">Privacy</h3>
              <div className="adm:space-y-3">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:text-sm adm:font-medium">Analytics</p>
                    <p className="adm:text-muted-foreground adm:text-xs">Help us improve the app</p>
                  </div>
                  <Switch
                    checked={settings.analytics}
                    onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, analytics: checked }))}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="adm:space-y-4">
              <h3 className="adm:text-lg adm:font-semibold">Appearance</h3>
              <div className="adm:space-y-3">
                <div className="adm:flex adm:items-center adm:justify-between">
                  <div>
                    <p className="adm:text-sm adm:font-medium">Dark mode</p>
                    <p className="adm:text-muted-foreground adm:text-xs">Use dark theme</p>
                  </div>
                  <Switch
                    checked={settings.darkMode}
                    onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, darkMode: checked }))}
                  />
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <Button>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const ShoppingCart: Story = {
  name: "Shopping cart",
  render: function Render() {
    const [items, setItems] = useState([
      { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1 },
      { id: 2, name: "Smart Watch", price: 199.99, quantity: 2 },
      { id: 3, name: "USB-C Cable", price: 19.99, quantity: 1 },
    ]);

    const removeItem = (id: number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <CartIcon className="adm:h-4 adm:w-4 adm:mr-2" />
            Cart ({items.length})
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
            <SheetDescription>
              Review your items before proceeding to checkout.
            </SheetDescription>
          </SheetHeader>
          <div className="adm:space-y-4 adm:px-4 adm:flex-1">
            {items.length === 0 && (
              <div className="adm:text-center adm:py-8">
                <CartIcon className="adm:h-12 adm:w-12 adm:mx-auto adm:text-muted-foreground" />
                <p className="adm:mt-2 adm:text-muted-foreground">Your cart is empty</p>
              </div>
            )}
            {items.length > 0 && (
              <div className="adm:space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="adm:flex adm:items-center adm:gap-3 adm:p-3 adm:border adm:rounded-lg">
                    <div className="adm:flex-1">
                      <p className="adm:text-sm adm:font-medium">{item.name}</p>
                      <p className="adm:text-muted-foreground adm:text-xs">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <div className="adm:text-sm adm:font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="adm:h-4 adm:w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
          {items.length > 0 && (
            <div className="adm:px-4">
              <Separator className="adm:mb-4" />
              <div className="adm:flex adm:justify-between adm:text-lg adm:font-semibold adm:mb-4">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Continue Shopping</Button>
            </SheetClose>
            <Button disabled={items.length === 0}>
              Checkout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const UserProfile: Story = {
  name: "User profile",
  render: function Render() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="adm:h-8 adm:w-8 adm:p-0">
            <Avatar className="adm:h-8 adm:w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="adm:flex adm:items-center adm:gap-3">
              <Avatar className="adm:h-12 adm:w-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle>John Doe</SheetTitle>
                <SheetDescription>john.doe@example.com</SheetDescription>
              </div>
            </div>
          </SheetHeader>
          <div className="adm:space-y-6 adm:px-4">
            <div className="adm:flex adm:gap-2">
              <Badge variant="default">Pro User</Badge>
              <Badge variant="secondary">Verified</Badge>
            </div>

            <div className="adm:space-y-4">
              <h3 className="adm:text-lg adm:font-semibold">Quick Actions</h3>
              <div className="adm:space-y-2">
                <Button variant="ghost" className="adm:w-full adm:justify-start">
                  <User className="adm:h-4 adm:w-4 adm:mr-2" />
                  Edit Profile
                </Button>
                <Button variant="ghost" className="adm:w-full adm:justify-start">
                  <Settings className="adm:h-4 adm:w-4 adm:mr-2" />
                  Account Settings
                </Button>
                <Button variant="ghost" className="adm:w-full adm:justify-start">
                  <Bell className="adm:h-4 adm:w-4 adm:mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" className="adm:w-full adm:justify-start">
                  <Shield className="adm:h-4 adm:w-4 adm:mr-2" />
                  Privacy & Security
                </Button>
                <Button variant="ghost" className="adm:w-full adm:justify-start">
                  <CreditCard className="adm:h-4 adm:w-4 adm:mr-2" />
                  Billing
                </Button>
              </div>
            </div>

            <Separator />

            <div className="adm:space-y-4">
              <h3 className="adm:text-lg adm:font-semibold">Recent Activity</h3>
              <div className="adm:space-y-3">
                <div className="adm:text-sm">
                  <p className="adm:font-medium">Logged in from new device</p>
                  <p className="adm:text-muted-foreground adm:text-xs">2 hours ago</p>
                </div>
                <div className="adm:text-sm">
                  <p className="adm:font-medium">Updated profile picture</p>
                  <p className="adm:text-muted-foreground adm:text-xs">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline" className="adm:w-full">
              Sign Out
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};

export const Controlled: Story = {
  name: "Controlled",
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <div className="adm:space-y-4">
        <div>
          <p className="adm:text-sm">Sheet is {open ? "open" : "closed"}</p>
        </div>
        <div className="adm:flex adm:gap-2">
          <Button onClick={() => setOpen(true)}>Open Sheet</Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Sheet
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Controlled Sheet</SheetTitle>
              <SheetDescription>
                This sheet is controlled by external state.
              </SheetDescription>
            </SheetHeader>
            <div className="adm:space-y-4 adm:px-4">
              <p className="adm:text-sm">
                You can control this sheet's open state programmatically.
              </p>
              <Button onClick={() => setOpen(false)}>
                Close from inside
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};
