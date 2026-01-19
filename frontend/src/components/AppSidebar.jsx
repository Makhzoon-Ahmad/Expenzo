import { Home,  Settings, WalletCards, ChartPie } from "lucide-react"
import expenzologo from "/expenzo-logo.png"
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
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Budgets",
    url: "#",
    icon: WalletCards,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartPie,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-white/15" >
      <SidebarHeader className="bg-[#090909]">
        <img src={expenzologo} alt="expenzo logo" className="h-20 object-contain" draggable={false} />
      </SidebarHeader>
      <SidebarContent className='bg-[#090909] text-white'>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/60">Application</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}