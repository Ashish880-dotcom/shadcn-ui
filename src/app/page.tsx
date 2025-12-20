import Link from "next/link";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { 
  AccordionIcon, 
  AlertCircle, 
  Square, 
  MessageSquare,
  ArrowRight,
  Home
} from "lucide-react";

export default function HomePage() {
  const components = [
    {
      name: "Accordion",
      href: "/accordion",
      icon: AccordionIcon,
      description: "A vertically stacked set of interactive headings"
    },
    {
      name: "Alert Dialog",
      href: "/alert-dialog",
      icon: AlertCircle,
      description: "A modal dialog that interrupts the user"
    },
    {
      name: "Card",
      href: "/card",
      icon: Square,
      description: "A flexible container for displaying content"
    },
    {
      name: "Dialog",
      href: "/dialog",
      icon: MessageSquare,
      description: "A window overlaid on the primary window"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Welcome to <span className="text-primary">Shadcn/UI</span> Demo
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore and learn how to integrate Shadcn/UI components in Next.js 14 with App Router
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {components.map((component) => (
          <Card key={component.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-full bg-primary/10">
                  <component.icon className="h-6 w-6 text-primary" />
                </div>
                <Button size="sm" variant="ghost" asChild>
                  <Link href={component.href}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <CardTitle className="mt-4">{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href={component.href}>
                  View Component
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Follow these steps to explore the components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">How to Use This Demo:</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Click on any component card above to navigate to its demo page</li>
              <li>Each component page shows interactive examples</li>
              <li>View the code structure and usage instructions</li>
              <li>Try interacting with the components</li>
            </ol>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/accordion">
                Start Exploring
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://ui.shadcn.com/docs" target="_blank">
                Official Docs
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}