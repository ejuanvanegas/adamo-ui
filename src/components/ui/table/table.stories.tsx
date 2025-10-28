import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@src/components/ui/table";
import type { Meta, StoryObj } from "@storybook/react";
import { CheckIcon, MinusIcon, XIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@src/components/ui/badge";

const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const verifications = [
  {
    date: "2024-01-15",
    name: "Juan Dela Cruz",
    id: "12.039.517",
    list: {
      id: true,
      facial: false,
      poa: true,
      tel: undefined,
      email: undefined,
      ip: undefined,
    },
    status: "processing",
  },
  {
    date: "2024-01-16",
    name: "Maria Clara",
    id: "14.567.890",
    list: {
      id: true,
      facial: true,
      poa: true,
      tel: true,
      email: false,
      ip: undefined,
    },
    status: "not_verified",
  },
  {
    date: "2024-01-17",
    name: "Jose Rizal",
    id: "12.345.678",
    list: {
      id: true,
      facial: true,
      poa: true,
      tel: true,
      email: true,
      ip: true,
    },
    status: "issue",
  },
  {
    date: "2024-01-18",
    name: "Andres Bonifacio",
    id: "12.345.679",
    list: {
      id: true,
      facial: true,
      poa: true,
      tel: true,
      email: true,
      ip: true,
    },
    status: "pending",
  },
  {
    date: "2024-01-19",
    name: "Emilio Aguinaldo",
    id: "12.345.680",
    list: {
      id: true,
      facial: false,
      poa: true,
      tel: false,
      email: false,
      ip: undefined,
    },
    status: "verified",
  },
];

export const Default: Story = {
  name: "Default",
  render: function Render() {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  },
};

export const Verifications: Story = {
  name: "Verifications",
  render: function Render() {
    const iconMap: Map<boolean | undefined, ReactNode> = new Map([
      [true, <CheckIcon className="adm:text-success" />],
      [false, <XIcon className="adm:text-destructive" />],
      [undefined, <MinusIcon />],
    ]);

    const resultMap = new Map([
      ["processing", <Badge size="lg" variant="waiting-medium">Processing</Badge>],
      ["not_verified", <Badge size="lg" variant="destructive-medium">Not verified</Badge>],
      ["issue", <Badge size="lg" variant="warning-medium">Issues</Badge>],
      ["pending", <Badge size="lg" variant="muted">Pending</Badge>],
      ["verified", <Badge size="lg" variant="success-medium">Verified</Badge>],
    ]);

    return (
      <Table>
        <TableCaption>User verifications</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>ID Number</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Facial</TableHead>
            <TableHead>POA</TableHead>
            <TableHead>TEL</TableHead>
            <TableHead>EMAIL</TableHead>
            <TableHead>IP</TableHead>
            <TableHead>Result</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {verifications.map((verification, index) => (
            <TableRow key={index}>
              <TableCell>{verification.date}</TableCell>
              <TableCell>{verification.name}</TableCell>
              <TableCell>{verification.id}</TableCell>
              <TableCell>{iconMap.get(verification.list.id)}</TableCell>
              <TableCell>
                {iconMap.get(verification.list.facial)}
              </TableCell>
              <TableCell>{iconMap.get(verification.list.poa)}</TableCell>
              <TableCell>{iconMap.get(verification.list.tel)}</TableCell>
              <TableCell>{iconMap.get(verification.list.email)}</TableCell>
              <TableCell>{iconMap.get(verification.list.ip)}</TableCell>
              <TableCell>{resultMap.get(verification.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
