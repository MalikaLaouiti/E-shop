import { Button } from "@/components/ui/button"


export default function layout({children}:
    {children :React.ReactNode}
) {
  const cartItems = [
    {
      id: 1,
      name: "Acme Circles T-Shirt",
      image: "/placeholder.svg",
      price: 99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Sunset Shades Sunglasses",
      image: "/placeholder.svg",
      price: 29.99,
      quantity: 2,
    },
    {
      id: 3,
      name: "Cool Breeze Portable Fan",
      image: "/placeholder.svg",
      price: 14.99,
      quantity: 1,
    },
  ]
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
    <div>{children}</div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <p className="text-muted-foreground">Review the items in your cart and proceed to checkout.</p>
        </div>
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="grid grid-cols-[100px_1fr_100px] items-center gap-4">
              <img
                src="/placeholder.svg"
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-end gap-4">
          <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
          <div className="flex gap-4">
            <Button variant="outline" size="lg">
              Continue Shopping
            </Button>
            <Button size="lg">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
