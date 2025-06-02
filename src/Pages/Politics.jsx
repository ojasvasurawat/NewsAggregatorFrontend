import { useEffect, useState } from "react";
import NavbarLanding from "../components/Navbar";
import axios from "axios";
import Scrollcard from "../components/ScrollCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function Politics() {
    
    const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


      useEffect(()=>{
        const items = async ()=>{
            await axios.get(`${backendUrl}/politics`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
            if(response){
                console.log(response.data);
                setArticles(response.data.items1);
                setArticles2(response.data.items2);
                setLoading(true);
            }
        }).catch((e)=>{
            if(e){
              navigate("/signin");
            }
        })
        }

        items();
    },[])

    const allArticles = [...articles, ...articles2];

    return (
        <>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
            <SidebarTrigger className="fixed bg-white z-10"/>
            {loading ? (
                            <div className="">
                                <Scrollcard items = {allArticles} />
                            </div>
                        ):(
                            <>
            
                                <div
                        className="w-full md:w-100"
                        >
                        <div className=" justify-items-center z-0 h-full"></div>
                        
                                <div className="mx-5 absolute inset-x-0 bottom-0 z-10 flex flex-col items-center text-white drop-shadow-[0_0_2px_blue] space-y-reverse space-y-2 backdrop-blur-xs">
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-full mb-2" />
                                    <Skeleton className="h-4 w-full mb-2" />
                                    {/* <div className="text-sm md:text-lg mb-2 ">{item.description}</div> */}
                                    <Skeleton className="h-4 w-1/4 mb-10" />
                                </div>
                            
                        
                        </div>
                            </>
                        )}
          </main>
        </SidebarProvider>
        </>
    );
}