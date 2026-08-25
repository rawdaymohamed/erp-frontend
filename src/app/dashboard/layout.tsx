"use client";
import { Loader2 } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  const { status } = useSession();
  if (status === "loading") {
    return (
      <Loader2 className="mx-auto mt-32 h-12 w-12 animate-spin text-muted-foreground" />
    );
  }
  if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
