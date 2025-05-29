import Category from "../components/Category"
import NavbarHome from "../components/Navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";

export default function CatgoryPage(){
    return(
    <>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
            <SidebarTrigger className="fixed bg-white"/>
              <div className="bg-[#] ">
                <Category/>
              </div>
          </main>
        </SidebarProvider>
    </>
    )
}