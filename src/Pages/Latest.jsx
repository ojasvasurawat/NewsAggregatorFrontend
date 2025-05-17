import NewsGrid from "../components/NewsGrid";
import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
// import { useNavigate } from "react-router-dom";
export default function Latest(){
    return(<>
        <SidebarProvider className="relative">
          <AppSidebar />
          <main>
            <SidebarTrigger className="fixed bg-white"/>
              <div className="bg-[#] ">
                <NewsGrid route="latest" text="Latest"/>
              </div>
          </main>
        </SidebarProvider>
    </>)
}