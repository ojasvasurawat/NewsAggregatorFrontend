import NewsGrid from "../components/NewsGrid";
import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import HomeGrid from "@/components/HomeGrid";
// import { useNavigate } from "react-router-dom";
export default function Home(){
  const [isLoading, setIsLoading] = useState(true);

  
    return(<>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
            <SidebarTrigger className="fixed bg-white z-10"/>
              <div className="bg-[#] ">
                <HomeGrid/>
              </div>
          </main>
        </SidebarProvider>
    </>)
}