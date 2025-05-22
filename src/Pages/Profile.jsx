
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";

export default function Profile() {
   
    return (
        <>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="fixed bg-white"/>
            <div>
                
                <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-7">Profile</h1>
                <div className="text-center justify-self-center mt-10 h-150 border rounded-xl w-100">
                    Edit your profile
                </div>
            </div>
            </main>
        </SidebarProvider>
        </>
    );
}