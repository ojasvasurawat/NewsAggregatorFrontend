import { AppSidebar } from "@/components/AppSidebar";
import NewsGrid from "@/components/NewsGrid";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// import { useNavigate } from "react-router-dom";
export default function TopStories(){
    return(<>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
            <SidebarTrigger className="fixed bg-white z-10"/>
              <div className="bg-[#] ">
                <NewsGrid route="topstories" text="Top Stories"/>
              </div>
          </main>
        </SidebarProvider>
    </>)
}