import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import TrendingGrid from "@/components/TrendingGrid";
// import { useNavigate } from "react-router-dom";
export default function Trending(){
    return(<>
        <SidebarProvider className="relative">
          <AppSidebar />
          <main>
            <SidebarTrigger className="fixed bg-white"/>
              <div className="bg-[#] ">
                <TrendingGrid/>
              </div>
          </main>
        </SidebarProvider>
    </>)
}