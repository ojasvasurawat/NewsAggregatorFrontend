import {Home, Calendar, Settings, Bell, MessageSquare, BookOpen, Folder, Video, User, LogOut, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuBadge,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import axios from "axios"
import { useState , useEffect} from "react"


const items = [
    {
    title: "Home",
    url: "/home",
    icon: Home,
    notification: null,
  },
  {
    title: "Category",
    url: "/category",
    icon: Home,
    notification: null,
  },
  {
    title: "Pricing",
    url: "/pricing",
    icon: Calendar,
    notification: null,
  },
  {
    title: "Trending",
    url: "/trending",
    icon: Bell,
    notification: null,
  },
  {
    title: "India",
    url: "/india",
    icon: MessageSquare,
    notification: null,
  },
  {
    title: "Latest",
    url: "/latest",
    icon: Folder,
    notification: null,
  },
  {
    title: "Most Viewed",
    url: "/mostviewed",
    icon: Video,
    notification: null,
  },
]

const footerItems =[
  {
    title: "Profile",
    url: "/profile",
    icon: User,
    notification: null,
  },
]

const world = [
    {
    title: "Asia",
    url: "/asia",
    icon: User,
    notification: null,
  },
  {
    title: "Africa",
    url: "/africa",
    icon: User,
    notification: null,
  },{
    title: "Europe",
    url: "/europe",
    icon: User,
    notification: null,
  },{
    title: "Latin America",
    url: "/latinamerica",
    icon: User,
    notification: null,
  },{
    title: "Middle East",
    url: "/middleeast",
    icon: User,
    notification: null,
  },{
    title: "US & Canada",
    url: "/usandcanada",
    icon: User,
    notification: null,
  },
]

export function AppSidebar() {

    const [name, setName] = useState("");

    useEffect(()=>{
        const fun = async ()=>{
            await axios.get(`http://localhost:8000/info`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
            if(response){
                setName(response.data.user.name);
            }else{
                console.log("no response from get info")
            }
        })
        }

        fun();
    },[])

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="text-2xl font-bold mx-2 mt-3">
        <a href="/home"> Curion</a>
        </div>
        <div className="mx-2">
          <div className="text-lg">Hi {name}!</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.notification}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger className="w-full">
                        <SidebarMenuButton >
                        World
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 items-end" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenuSub>
                            {world.map((item) => (
                                <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                    {/* <item.icon /> */}
                                    <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                                <SidebarMenuBadge>{item.notification}</SidebarMenuBadge>
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {footerItems.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuBadge>{item.notification}</SidebarMenuBadge>
          </SidebarMenuItem>
        ))}
      </SidebarFooter>  
    </Sidebar>
  )
}
