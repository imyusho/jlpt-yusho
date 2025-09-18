import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect } from "react";
import { useSidebarData } from "./utils";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const data = useSidebarData();
  const { setOpenMobile } = useSidebar();
  useEffect(() => {
    setOpenMobile(false);
  }, [setOpenMobile, pathname]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="p-2">
          <Link
            href="/home"
            className="flex items-center gap-2 font-medium hover:no-underline text-sm"
          >
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md text-lg">
              ゆ
            </div>
            <div className="flex flex-col gap-0.5 leading-none font-medium">
              JLPT Yusho
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group, i) => (
          <SidebarGroup key={i}>
            {group.title && (
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={
                        item.isActive?.(pathname, item.url) ??
                        pathname.startsWith(item.url)
                      }
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
