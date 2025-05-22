import { useEffect, useState } from "react";
import NavbarLanding from "../components/Navbar";
import axios from "axios";
import Scrollcard from "../components/ScrollCard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";

export default function Environment() {
    
    const [articles, setArticles] = useState([]);
    const [articles2, setArticles2] = useState([]);
    const [articles3, setArticles3] = useState([]);


      useEffect(()=>{
        const items = async ()=>{
            await axios.get(`http://localhost:8000/environment`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
            if(response){
                console.log(response.data);
                setArticles(response.data.items1);
                setArticles2(response.data.items2);
                setArticles3(response.data.items3);
            }
        })
        }

        items();
    },[])

    const allArticles = [...articles, ...articles2, ...articles3];

    return (
        <>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="fixed bg-white"/>
            <div>
                <Scrollcard items = {allArticles} />
            </div>
          </main>
        </SidebarProvider>
        </>
    );
}