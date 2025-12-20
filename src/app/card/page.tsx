import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, Star, Users, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CardPage() {
  const features = [
    { icon: Zap, title: "Fast Performance", description: "Lightning fast components built for speed" },
    { icon: Users, title: "Accessible", description: "WCAG compliant for all users" },
    { icon: Star, title: "Customizable", description: "Fully customizable with Tailwind CSS" },
    { icon: TrendingUp, title: "Production Ready", description: "Battle-tested in real applications" },
  ];

  const teamMembers = [
    { name: "Alex Johnson", role: "Frontend Lead", avatar: "AJ" },
    { name: "Sam Wilson", role: "UI Designer", avatar: "SW" },
    { name: "Taylor Smith", role: "Full Stack", avatar: "TS" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Card Component</h1>
          <p className="text-muted-foreground">
            A flexible container for displaying content with header, body, and footer sections.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Our talented development team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-4 p-3 hover:bg-muted rounded-lg transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Members</Button>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Simple Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a basic card with minimal styling. Cards can contain any type of content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Highlighted Card</CardTitle>
                <CardDescription>With accent border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This card has a special border color to draw attention to important information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Usage Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Installation</h3>
                <code className="block p-2 bg-muted rounded text-sm">
                  npx shadcn-ui@latest add card
                </code>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Basic Structure</h3>
                <pre className="p-2 bg-muted rounded text-sm overflow-x-auto">
{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`}
                </pre>
              </div>

              <Button className="w-full" asChild>
                <Link href="https://ui.shadcn.com/docs/components/card" target="_blank">
                  View Documentation
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Complete Example</CardTitle>
            </CardHeader>
            <CardContent>
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-lg">Project Alpha</CardTitle>
                  <CardDescription>Web Development • In Progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">A modern web application with React and Next.js</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mt-1">
                    <div className="h-full bg-primary w-3/4"></div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline">Details</Button>
                  <Button size="sm">Continue</Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Variations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">With Image</span>
                <div className="h-2 w-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">With Actions</span>
                <div className="h-2 w-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">With Stats</span>
                <div className="h-2 w-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">With Forms</span>
                <div className="h-2 w-2 bg-primary rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Interactive</span>
                <div className="h-2 w-2 bg-primary rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}