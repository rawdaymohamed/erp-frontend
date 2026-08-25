"use client";

import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboardIcon,
  ListIcon,
  CameraIcon,
  FileTextIcon,
  Settings2Icon,
  FileChartColumnIcon,
  FileIcon,
  CommandIcon,
  PackageIcon,
  ShoppingCart,
  Calendar1Icon,
} from "lucide-react";
import { useSession } from "next-auth/react";

const data = {
  // user: {
  //   name: "admin",
  //   email: "admin@gmail.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Categories",
      url: "/dashboard/categories",
      icon: <ListIcon />,
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: <PackageIcon />,
    },
    {
      title: "Sales",
      url: "/dashboard/sales",
      icon: <ShoppingCart />,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: <CameraIcon />,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: <FileTextIcon />,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: <FileTextIcon />,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: <Settings2Icon />,
    },
  ],
  documents: [
    {
      name: "Today Sales",
      url: "/dashboard/reports/todaysales",
      icon: <Calendar1Icon />,
    },
    {
      name: "Weekly Sales",
      url: "/dashboard/reports/weeklysales",
      icon: <FileChartColumnIcon />,
    },
    {
      name: "Monthly Sales",
      url: "/dashboard/reports/monthlysales",
      icon: <FileIcon />,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  console.log("Session data in AppSidebar:", session); // Log the session data for debugging

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <CommandIcon className="size-5!" />
              <span className="text-base font-semibold">SmartERP</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {session?.user ? (
          <NavUser
            user={{
              name: session?.user?.name ?? undefined,
              email: session?.user?.email ?? undefined,
              avatar: session?.user?.image ?? undefined,
            }}
          />
        ) : (
          <div className="p-4 text-center text-sm text-muted-foreground">
            Not logged in
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
