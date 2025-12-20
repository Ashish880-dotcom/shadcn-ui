import { AlertDialogDemo } from "@/app/components/alert-dialog-demo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import Link from "next/link";

// Create a separate demo component
function AlertDialogDemoComponent() {
  return (
    <AlertDialogDemo 
      triggerText="Delete Account"
      title="Are you absolutely sure?"
      description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      cancelText="Cancel"
      actionText="Delete Account"
      onAction={() => alert("Account deleted!")}
    />
  );
}

export default function AlertDialogPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Alert Dialog Component</h1>
          <p className="text-muted-foreground">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Click the button below to trigger the alert dialog
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
                <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
                <p className="text-center mb-6">This is a destructive action that requires confirmation</p>
                <AlertDialogDemoComponent />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Different Variants</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Warning Action</h3>
                <AlertDialogDemo 
                  triggerText="Discard Changes"
                  title="Discard unsaved changes?"
                  description="You have unsaved changes. Are you sure you want to discard them?"
                  cancelText="Continue Editing"
                  actionText="Discard"
                  variant="destructive"
                  onAction={() => alert("Changes discarded!")}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Info Action</h3>
                <AlertDialogDemo 
                  triggerText="Publish Article"
                  title="Ready to publish?"
                  description="Your article will be visible to all users. You can edit it later."
                  cancelText="Edit More"
                  actionText="Publish Now"
                  variant="default"
                  onAction={() => alert("Article published!")}
                />
              </div>
            </CardContent>
          </Card>
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
                  npx shadcn-ui@latest add alert-dialog
                </code>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Basic Structure</h3>
                <pre className="p-2 bg-muted rounded text-sm overflow-x-auto">
{`<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Title</AlertDialogTitle>
      <AlertDialogDescription>Description</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
                </pre>
              </div>

              <Button className="w-full" asChild>
                <Link href="https://ui.shadcn.com/docs/components/alert-dialog" target="_blank">
                  View Documentation
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When to Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium text-red-600">Destructive Actions</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Deleting data</li>
                  <li>Removing users</li>
                  <li>Permanent changes</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-yellow-600">Important Decisions</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Confirming purchases</li>
                  <li>Publishing content</li>
                  <li>Changing settings</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-blue-600">User Consent</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Data sharing</li>
                  <li>Terms acceptance</li>
                  <li>Permission requests</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Use clear, descriptive titles</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Explain consequences clearly</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Make action buttons distinct</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm">Provide keyboard navigation</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}