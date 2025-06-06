import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import TrendingGrid from "@/components/TrendingGrid";
// import { useNavigate } from "react-router-dom";
export default function Trending(){
    return(<>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
            <SidebarTrigger className="fixed bg-white z-10"/>
              <div className="bg-[#] ">
                <TrendingGrid/>
              </div>
          </main>
        </SidebarProvider>
    </>)
}