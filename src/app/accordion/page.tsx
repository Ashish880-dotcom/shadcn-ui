import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/app/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Accordion Component</h1>
          <p className="text-muted-foreground">
            Click on questions to expand and view answers
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>FAQ Example</CardTitle>
            <CardDescription>Common questions about Shadcn/UI</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Shadcn/UI?</AccordionTrigger>
                <AccordionContent>
                  Shadcn/UI is a collection of beautifully designed, accessible, and customizable React components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes! Shadcn/UI is completely free and open-source under the MIT license.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I install components?</AccordionTrigger>
                <AccordionContent>
                  Use the CLI: npx shadcn@latest add [component-name]
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multiple Items</CardTitle>
            <CardDescription>Multiple items can be open</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>First item</AccordionTrigger>
                <AccordionContent>
                  You can open multiple items simultaneously in this mode.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Second item</AccordionTrigger>
                <AccordionContent>
                  Both items can be open at the same time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Third item</AccordionTrigger>
                <AccordionContent>
                  This is another item that can be opened.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Usage Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <code className="block p-3 bg-muted rounded text-sm">
            npx shadcn@latest add accordion
          </code>
          <Button asChild>
            <Link href="https://ui.shadcn.com/docs/components/accordion" target="_blank">
              View Full Documentation
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}