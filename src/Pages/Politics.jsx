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


    useEffect(() => {
        const items = async () => {
            await axios.get(`${backendUrl}/politics`, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            }).then((response) => {
                if (response) {
                    console.log(response.data);
                    setArticles(response.data.items1);
                    setArticles2(response.data.items2);
                    setLoading(true);
                }
            }).catch((e) => {
                if (e) {
                    navigate("/signin");
                }
            })
        }

        items();
    }, [])

    const allArticles = [...articles, ...articles2];

    return (
        <>
            <SidebarProvider className="relative flex">
                <AppSidebar />
                <main className="flex-1 bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
                    <SidebarTrigger className="fixed bg-white z-10" />
                    {loading ? (
                        <div className="">
                            <Scrollcard items={allArticles} />
                        </div>
                    ) : (
                        <>

                            <div
                                className=" grid h-screen overflow-y-scroll snap-y snap-mandatory justify-items-center"
                            >

                                <div
                                    className="relative h-screen snap-start flex justify-center items-center w-full md:w-103"
                                >
                                    <div className=" justify-items-center z-0 h-full ">
                                        <img className="w-full h-full object-cover" />
                                    </div>

                                    <div className=" m-3 mb-0 pb-0 absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-4 text-white drop-shadow-[0_0_2px_blue] space-y-reverse space-y-2 backdrop-blur-xs">
                                        <Skeleton className="h-4 w-full md:w-100 mb-2" />
                                        <Skeleton className="h-4 w-full md:w-100 mb-2" />
                                        <Skeleton className="h-4 w-full md:w-100 mb-2" />
                                        {/* <div className="text-sm md:text-lg mb-2 ">{item.description}</div> */}
                                        <Skeleton className="h-4 w-1/4 mb-10" />
                                    </div>


                                </div>
                            </div>
                        </>
                    )}
                </main>
            </SidebarProvider>
        </>
    );
}