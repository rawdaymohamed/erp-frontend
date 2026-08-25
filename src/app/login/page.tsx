"use client";

import { LoginForm } from "@/components/login-form";
import { CommandIcon, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { status } = useSession();
  if (status === "loading") {
    return (
      <Loader2 className="mx-auto mt-32 h-12 w-12 animate-spin text-muted-foreground" />
    );
  }
  if (status === "authenticated") {
    redirect("/dashboard");
  }
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <CommandIcon className="size-4" />
          </div>
          SmartERP
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
