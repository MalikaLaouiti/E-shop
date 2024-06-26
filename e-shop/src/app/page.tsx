import Link from "next/link"
import { FootprintsIcon, ShirtIcon, ShoppingBagIcon, SmartphoneIcon, SofaIcon, WatchIcon } from "../app/component/component";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <ShoppingBagIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Acme Ecommerce</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/shop" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="/collection" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Collections
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
            <h1 className="text-4xl font-bold text-white text-center sm:text-5xl md:text-6xl">
              Discover the Best Products for Your Lifestyle
            </h1>
            <p className="text-lg text-white text-center max-w-2xl">
              Explore our curated collection of high-quality products that will elevate your everyday life.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Categories</h2>
              <p className="text-muted-foreground text-lg max-w-2xl text-center">
                Explore our wide range of product categories to find the perfect items for your needs.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
              <Link
                href="/clothing"
                className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                prefetch={false}
              >
                <ShirtIcon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary">Clothing</span>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                prefetch={false}
              >
                <FootprintsIcon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary">Shoes</span>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                prefetch={false}
              >
                <ShoppingBagIcon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary">Bags</span>
              </Link>
              <Link
                href="#"
                className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                prefetch={false}
              >
                <WatchIcon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary">Accessories</span>
              </Link>
              <Link
                href="/accessoires"
                className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                prefetch={false}
              >
                <SofaIcon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary">Home</span>
              </Link>
              <Link
                href="/"
                className="group flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted transition-colors"
                prefetch={false}
              >
                <SmartphoneIcon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium group-hover:text-primary">Electronics</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trending Products</h2>
              <p className="text-muted-foreground text-lg max-w-2xl text-center">
                Check out the latest and greatest products that are taking the market by storm.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/product1.png"
                  width="500"
                  height="500"
                  alt="Product 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Wireless Headphones</h3>
                  <p className="text-muted-foreground text-sm">
                    Experience immersive audio with our top-of-the-line wireless headphones.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$99.99</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/product2.png"
                  width="500"
                  height="500"
                  alt="Product 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Smart TV</h3>
                  <p className="text-muted-foreground text-sm">
                    Upgrade your home entertainment with our cutting-edge smart TV.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$499.99</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/product3.png"
                  width="500"
                  height="500"
                  alt="Product 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Fitness Tracker</h3>
                  <p className="text-muted-foreground text-sm">
                    Stay on top of your fitness goals with our advanced fitness tracker.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$79.99</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/product4.png"
                  width="500"
                  height="500"
                  alt="Product 4"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Ergonomic Office Chair</h3>
                  <p className="text-muted-foreground text-sm">
                    Upgrade your home office with our comfortable and supportive ergonomic chair.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$199.99</span>
                    <Link
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Ecommerce. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}




