import Category from "../components/Category"
import NavbarHome from "../components/Navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import NavbarLanding from "@/components/Navbar2";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function CatgoryPage(){
  const [isSignup, setIsSignup] = useState(false);

  useEffect(()=>{
        axios(`${backendUrl}/info`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
        if(response.data.user.name){
          setIsSignup(true);
        }
        }).catch();
  },[])
    return(
    <>
        <SidebarProvider className="relative flex">
          {isSignup ? (<AppSidebar />) : (<><NavbarLanding /></>)}
          <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
            {isSignup ? (<SidebarTrigger className="fixed bg-white z-10"/>) : (<></>)}


              <div className={`bg-[#] ${isSignup ? ("") : ("mt-7")}`}>
                <Category/>
              </div>
          </main>
        </SidebarProvider>
    </>
    )
}