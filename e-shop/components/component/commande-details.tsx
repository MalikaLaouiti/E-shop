"use client";

import { useState, useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FilterIcon } from "@/components/ui/filtericon";
import { ChevronRightIcon } from "@/components/ui/chevronrighticon";

type Order = {
  orderNumber: string;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: string;
  items: { name: string; quantity: number; price: number }[];
  shippingAddress: string;
  paymentMethod: string;
  notes: string;
};

type OrderKey = keyof Order;

export function CommandeDetails() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<OrderKey>("orderNumber");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const orders: Order[] = [
    {
      orderNumber: "ORD001",
      customerName: "John Doe",
      orderDate: "2023-05-01",
      totalAmount: 250.99,
      status: "pending",
      items: [
        { name: "Product A", quantity: 2, price: 99.99 },
        { name: "Product B", quantity: 1, price: 49.99 },
      ],
      shippingAddress: "123 Main St, Anytown USA",
      paymentMethod: "Credit Card",
      notes: "Please deliver before 5pm",
    },
    {
      orderNumber: "ORD002",
      customerName: "Jane Smith",
      orderDate: "2023-05-05",
      totalAmount: 149.99,
      status: "shipped",
      items: [{ name: "Product C", quantity: 1, price: 149.99 }],
      shippingAddress: "456 Oak Rd, Somewhere City",
      paymentMethod: "PayPal",
      notes: "",
    },
    {
      orderNumber: "ORD003",
      customerName: "Bob Johnson",
      orderDate: "2023-05-10",
      totalAmount: 499.99,
      status: "delivered",
      items: [
        { name: "Product D", quantity: 1, price: 299.99 },
        { name: "Product E", quantity: 2, price: 99.99 },
      ],
      shippingAddress: "789 Elm St, Othertown",
      paymentMethod: "Bank Transfer",
      notes: "Fragile item, handle with care",
    },
    {
      orderNumber: "ORD004",
      customerName: "Sarah Lee",
      orderDate: "2023-05-15",
      totalAmount: 75.0,
      status: "pending",
      items: [{ name: "Product F", quantity: 1, price: 75.0 }],
      shippingAddress: "321 Pine Rd, Somewhere Else",
      paymentMethod: "Credit Card",
      notes: "",
    },
    {
      orderNumber: "ORD005",
      customerName: "Tom Wilson",
      orderDate: "2023-05-20",
      totalAmount: 399.99,
      status: "shipped",
      items: [{ name: "Product G", quantity: 1, price: 399.99 }],
      shippingAddress: "654 Oak St, Otherplace",
      paymentMethod: "PayPal",
      notes: "Expedited shipping requested",
    },
  ];

  const filteredOrders = useMemo(() => {
    let filtered = orders;

    // Filter by status
    if (filterStatus !== "all") {
      filtered = filtered.filter((order) => order.status === filterStatus);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort the filtered orders
    return filtered.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return (
          aValue.localeCompare(bValue) * (sortDirection === "asc" ? 1 : -1)
        );
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * (sortDirection === "asc" ? 1 : -1);
      }
      return 0;
    });
  }, [orders, filterStatus, searchTerm, sortColumn, sortDirection]);

  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="w-5 h-5" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={filterStatus === "all"}
                onCheckedChange={() => setFilterStatus("all")}
              >
                All
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus === "pending"}
                onCheckedChange={() => setFilterStatus("pending")}
              >
                Pending
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus === "shipped"}
                onCheckedChange={() => setFilterStatus("shipped")}
              >
                Shipped
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filterStatus === "delivered"}
                onCheckedChange={() => setFilterStatus("delivered")}
              >
                Delivered
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search orders..."
              className="pl-8 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortColumn("orderNumber");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Order #
                {sortColumn === "orderNumber" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortColumn("customerName");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Customer
                {sortColumn === "customerName" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortColumn("orderDate");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Date
                {sortColumn === "orderDate" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => {
                  setSortColumn("totalAmount");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Total
                {sortColumn === "totalAmount" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => {
                  setSortColumn("status");
                  setSortDirection(sortDirection === "asc" ? "desc" : "asc");
                }}
              >
                Status
                {sortColumn === "status" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead className="w-8" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow
                key={order.orderNumber}
                className="cursor-pointer hover:bg-muted"
                onClick={() => setSelectedOrder(order)}
              >
                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell className="text-right">
                  ${order.totalAmount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "pending"
                        ? "secondary"
                        : order.status === "shipped"
                        ? "outline"
                        : order.status === "delivered"
                        ? "default"
                        : "secondary" // Use a default value in case of unexpected status
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button size="icon" variant="outline">
                    <ChevronRightIcon className="h-4 w-4" />
                    <span className="sr-only">View order</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedOrder && (
        <Dialog open onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{selectedOrder.orderNumber}</h2>
                <Badge
                  variant={
                    selectedOrder.status === "pending"
                      ? "secondary"
                      : selectedOrder.status === "shipped"
                      ? "outline"
                      : selectedOrder.status === "delivered"
                      ? "default"
                      : "secondary" // Use a default value in case of unexpected status
                  }
                >
                  {selectedOrder.status}
                </Badge>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <div className="text-sm text-muted-foreground">Customer</div>
                  <div>{selectedOrder.customerName}</div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm text-muted-foreground">Order Date</div>
                  <div>{selectedOrder.orderDate}</div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="text-sm text-muted-foreground">Items</div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Quantity</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedOrder.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">
                          ${item.price.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <div className="text-sm text-muted-foreground">Shipping Address</div>
                  <div>{selectedOrder.shippingAddress}</div>
                </div>
                <div className="grid gap-2">
                  <div className="text-sm text-muted-foreground">Payment Method</div>
                  <div>{selectedOrder.paymentMethod}</div>
                </div>
              </div>
              {selectedOrder.notes && (
                <div className="grid gap-2">
                  <div className="text-sm text-muted-foreground">Notes</div>
                  <div>{selectedOrder.notes}</div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
