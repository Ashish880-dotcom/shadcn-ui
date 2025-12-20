"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import { ReactNode } from "react";

interface AlertDialogDemoProps {
  triggerText: string;
  title: string;
  description: string;
  cancelText: string;
  actionText: string;
  variant?: "default" | "destructive";
  onAction: () => void;
}

export function AlertDialogDemo({
  triggerText,
  title,
  description,
  cancelText,
  actionText,
  variant = "destructive",
  onAction,
}: AlertDialogDemoProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variant === "destructive" ? "destructive" : "default"}>
          {triggerText}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}