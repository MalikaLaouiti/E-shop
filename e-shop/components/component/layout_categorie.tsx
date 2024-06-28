"use client"
import { Archivo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'
import { useState, useMemo } from "react"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import './../../globals.css'

const archivo= Archivo({
  subsets: ['latin'],
  display: 'swap',
})

const libre_franklin= Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

type ColorFilterValue = string;
type PriceFilterValue = { min: number; max: number };
type SortFilterValue = 'featured' | 'low' | 'high';

type FilterValue = ColorFilterValue | PriceFilterValue | SortFilterValue;

interface SelectedFilters {
  color: ColorFilterValue[];
  price: PriceFilterValue;
  sort: SortFilterValue;
}

export default function Layout({children}: {
  children: React.ReactNode
}) {
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      description: "A timeless wardrobe staple",
      price: 24.99,
      image: "/product1.svg",
      colors: ["black", "white", "gray"],
    },
    {
      id: 2,
      name: "Denim Jeans",
      description: "Comfortable and stylish",
      price: 59.99,
      image: "/product1.svg",
      colors: ["blue", "black", "gray"],
    },
    {
      id: 3,
      name: "Floral Dress",
      description: "Elegant and feminine",
      price: 49.99,
      image: "/product1.svg",
      colors: ["pink", "white", "blue"],
    },
    {
      id: 4,
      name: "Leather Jacket",
      description: "Sleek and versatile",
      price: 99.99,
      image: "/product1.svg",
      colors: ["black", "brown", "burgundy"],
    },
    {
      id: 5,
      name: "Striped Sweater",
      description: "Cozy and stylish",
      price: 39.99,
      image: "/product1.svg",
      colors: ["navy", "gray", "white"],
    },
    {
      id: 6,
      name: "Chino Pants",
      description: "Comfortable and smart",
      price: 44.99,
      image: "/product1.svg",
      colors: ["khaki", "olive", "beige"],
    },
  ]

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    color: [],
    price: { min: 0, max: 1000 },
    sort: "featured",
  })

  const handleFilterChange = (type: keyof SelectedFilters, value: FilterValue) => {
    if (type === "color") {
      const colorValue = value as ColorFilterValue;
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        color: prevFilters.color.includes(colorValue)
          ? prevFilters.color.filter((item) => item !== colorValue)
          : [...prevFilters.color, colorValue],
      }))
    } else if (type === "price") {
      const priceValue = value as PriceFilterValue;
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        price: priceValue,
      }))
    } else if (type === "sort") {
      const sortValue = value as SortFilterValue;
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        sort: sortValue,
      }))
    }
  }

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedFilters.color.length > 0 && !selectedFilters.color.some(color => product.colors.includes(color))) {
          return false
        }
        if (product.price < selectedFilters.price.min || product.price > selectedFilters.price.max) {
          return false
        }
        return true
      })
      .sort((a, b) => {
        switch (selectedFilters.sort) {
          case "featured":
            return b.id - a.id
          case "low":
            return a.price - b.price
          case "high":
            return b.price - a.price
          default:
            return 0
        }
      })
  }, [selectedFilters, products])
  
  return (
    <html lang="en">
    <div className="flex min-h-screen w-full">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <div className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/clothing"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/shop"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Clothing</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clothing</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/product"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Products</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Products</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Customers</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Customers</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Analytics</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Analytics</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <div className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <div className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <div className="h-5 w-5" />
                  Clothing
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <div className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Clothing
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop Clothing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <img
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="grid gap-2">
                <h2 className="text-xl font-bold">Shop Clothing</h2>
                <p className="text-muted-foreground">Browse our selection of stylish clothing items.</p>
              </div>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <span>Sort by</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]" align="end">
                    <DropdownMenuRadioGroup
                      value={selectedFilters.sort}
                      onValueChange={(value) => handleFilterChange("sort", value)}
                    >
                      <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <span>Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[300px]" align="end">
                    <div className="grid gap-4 p-4">
                      <div className="grid gap-2">
                        <Label htmlFor="color">Color</Label>
                        <div className="flex flex-wrap gap-2">{["black", "white", "gray"]}</div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </html>
  )
}
