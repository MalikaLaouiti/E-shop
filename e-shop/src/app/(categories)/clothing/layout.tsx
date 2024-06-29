import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { ChevronDownIcon } from "@/components/ui/chevrondownicon"
import { HomeIcon } from "@/components/ui/homeicon"
import { StarIcon } from "@/components/ui/staricon"


export function layout1() {
  return (
    <div>
    <div className="grid md:grid-cols-[280px_1fr] gap-6 p-4 md:p-6">
      <div className="bg-muted/40 rounded-lg p-4 md:p-6">
          <Collapsible>
            <CollapsibleTrigger className="flex items-center justify-between font-medium">
              Rating
              <ChevronDownIcon className="w-4 h-4 transition [&[data-state=open]]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-2">
                <Checkbox id="rating-4">4 stars and above</Checkbox>
                <Checkbox id="rating-3">3 stars and above</Checkbox>
                <Checkbox id="rating-2">2 stars and above</Checkbox>
                <Checkbox id="rating-1">1 star and above</Checkbox>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold">$99.99</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold">$99.99</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold">$99.99</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold">$99.99</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold">$99.99</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Product Name</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5 text-primary">
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
                <StarIcon className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm text-muted-foreground">(4.9)</span>
            </div>
            <p className="text-muted-foreground mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-2xl font-bold">$99.99</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


