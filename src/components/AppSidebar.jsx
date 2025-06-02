import {Home, Newspaper, LayoutGrid ,  LogOut , Landmark, Tag, Megaphone, TvMinimalPlay, User, TrendingUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

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
import WorldButton from "./WorldButton"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

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
    icon: LayoutGrid,
    notification: null,
  },
  {
    title: "Pricing",
    url: "/pricing",
    icon: Tag,
    notification: null,
  },
  {
    title: "Top Stories",
    url: "/topstories",
    icon: Newspaper,
    notification: null,
  },
  {
    title: "India",
    url: "/india",
    icon: Landmark,
    notification: null,
  },
  {
    title: "Latest",
    url: "/latest",
    icon: Megaphone,
    notification: null,
  },
  {
    title: "Most Viewed",
    url: "/mostviewed",
    icon: TvMinimalPlay,
    notification: null,
  },
  {
    title: "Trending",
    url: "/trending",
    icon: TrendingUp,
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

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function AppSidebar() {

  console.log(backendUrl);

    const [name, setName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const navigate = useNavigate();
    const [click, setClick] = useState(false);

    useEffect(()=>{
        const fun = async ()=>{
            await axios.get(`${backendUrl}/info`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
            if(response){
                setName(response.data.user.name);
                setAvatarUrl(response.data.user.avatarUrl);
            }else{
                console.log("no response from get info")
            }
        }).catch((e)=>{
            if(e){
              navigate("/signin");
            }
        })
        }

        fun();
    },[])


    const handleLogout = async()=>{
        try{const response = await axios.post(`${backendUrl}/logout`,{
                
            },{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            })
        if (response) {
            localStorage.setItem("authorization", "");
            toast.success("Logout successfully");
            navigate("/");
        }
        else{
            toast.error("Logout Failed")
        }
        }catch(e){
            console.log("the error is :",e);
        }
    }

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
                  <SidebarMenuButton asChild >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.notification}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                    <CollapsibleTrigger className="w-full">
                      <WorldButton/>
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
          {/* <SidebarMenuItem> */}
            <SidebarMenuButton asChild>
              <a href="/profile">
              {avatarUrl ? <img className="w-5 h-5 object-cover rounded-full" src={avatarUrl}/> : <User/>}
                {/* <User/><img className="w-5" src={avatarUrl}/> */}
                <span>Profile</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <div onClick={handleLogout}>
                <LogOut />
                <span>Log out</span>
              </div>
            </SidebarMenuButton>
          {/* </SidebarMenuItem> */}
      </SidebarFooter>  
    </Sidebar>
  )
}
