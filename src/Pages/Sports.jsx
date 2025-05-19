import { useEffect, useState } from "react";
import NavbarLanding from "../components/Navbar";
import axios from "axios";
import Scrollcard from "../components/ScrollCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";

export default function Sports() {
    
    const [articles, setArticles] = useState([]);


      useEffect(()=>{
        const items = async ()=>{
            await axios.get(`http://localhost:8000/sports`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
            if(response){
                console.log(response.data);
                setArticles(response.data.items1);
            }
        })
        }

        items();
    },[])

    return (
        <>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="fixed bg-white"/>
            <div>
                <Scrollcard items = {articles} />
            </div>
          </main>
        </SidebarProvider>
        </>
    );
}