import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


export default function Layout({children}: {
    children: React.ReactNode
  }) {
    return (
    <div className="flex min-h-screen">
      <aside className="bg-background border-r w-64 p-6 flex flex-col gap-6">
        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </Link>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-muted-foreground">Sort By</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>Featured</span>
                <ChevronDownIcon className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full">
              <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Featured</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-muted-foreground">Filter By</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger className="w-full justify-between">
                <span>Category</span>
                <ChevronDownIcon className="w-4 h-4" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-shirts" /> Shirts
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-pants" /> Pants
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="category-accessories" /> Accessories
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger className="w-full justify-between">
                <span>Price</span>
                <ChevronDownIcon className="w-4 h-4" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-under50" /> Under $50
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-50to100" /> $50 - $100
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="price-over100" /> Over $100
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="size">
              <AccordionTrigger className="w-full justify-between">
                <span>Size</span>
                <ChevronDownIcon className="w-4 h-4" />
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="size-xs" /> XS
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="size-s" /> S
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="size-m" /> M
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="size-l" /> L
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="size-xl" /> XL
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>
      <main >{children}</main>
    </div>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
