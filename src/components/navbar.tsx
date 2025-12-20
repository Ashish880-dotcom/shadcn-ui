import Link from "next/link";
import { Button } from "./ui/button";
import { Home } from "lucide-react";

export default function Navbar() {
  const components = [
    { name: "Accordion", href: "/accordion" },
    { name: "Alert Dialog", href: "/alert-dialog" },
    { name: "Card", href: "/card" },
    { name: "Dialog", href: "/dialog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Home className="h-5 w-5" />
            Shadcn/UI Demo
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            {components.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {component.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="https://ui.shadcn.com" target="_blank">
              Official Docs
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden border-t">
        <div className="container mx-auto grid grid-cols-2 gap-2 p-4">
          {components.map((component) => (
            <Button key={component.name} variant="ghost" size="sm" asChild>
              <Link href={component.href}>
                {component.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}