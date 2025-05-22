import NewsGrid from "../components/NewsGrid";
import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
// import { useNavigate } from "react-router-dom";
export default function India(){
    return(<>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="fixed bg-white"/>
              <div className="bg-[#] ">
                <NewsGrid route="india" text="India"/>
              </div>
          </main>
        </SidebarProvider>
    </>)
}