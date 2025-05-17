
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";

export default function Profile() {
   
    return (
        <>
        <SidebarProvider className="relative">
          <AppSidebar />
          <main>
            <SidebarTrigger className="fixed bg-white"/>
            <div>
                
            </div>
            </main>
        </SidebarProvider>
        </>
    );
}