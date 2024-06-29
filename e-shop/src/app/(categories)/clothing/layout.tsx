"use client"
// import Link from "next/link"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { ChevronDownIcon } from "@/components/ui/chevrondownicon"
import { StarIcon } from "@/components/ui/staricon"
import { Inter } from 'next/font/google'
import "./../globals.css"


export default function layout( {children} : {
  children: React.ReactNode
}) {
  return (
    <>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 p-4 md:p-6">{children}</h1>
    <div className="grid md:grid-cols-[1000px_2fr] gap-6 p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <img
              src="/product1.png"
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
      </>
  )
}


