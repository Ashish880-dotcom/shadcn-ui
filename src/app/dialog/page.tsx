import { DialogDemo } from "@/app/components/dialog-demo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft, Plus, Settings, User, Mail } from "lucide-react";
import Link from "next/link";

export default function DialogPage() {
  const dialogExamples = [
    {
      title: "User Profile",
      description: "View and edit user information",
      icon: User,
      content: "Contains user details, preferences, and activity history."
    },
    {
      title: "Settings",
      description: "Application configuration",
      icon: Settings,
      content: "Allows users to customize their experience and preferences."
    },
    {
      title: "Contact Form",
      description: "Send messages and inquiries",
      icon: Mail,
      content: "Includes form fields for name, email, subject, and message."
    }
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
          <h1 className="text-3xl font-bold">Dialog Component</h1>
          <p className="text-muted-foreground">
            A window overlaid on either the primary window or another dialog window.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Click the button below to open a sample dialog
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg">
                <div className="text-center mb-6">
                  <Plus className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Create New Project</h3>
                  <p className="text-muted-foreground">Open the dialog to add a new project</p>
                </div>
                <DialogDemo 
                  triggerText="Create Project"
                  title="Create New Project"
                  description="Add a new project to your workspace. You can edit this later."
                  fields={[
                    { label: "Project Name", type: "text", placeholder: "Enter project name" },
                    { label: "Description", type: "textarea", placeholder: "Enter project description" }
                  ]}    