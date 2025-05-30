import axios from "axios"
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function HomeCard({text}){
    
        const [articles, setArticles] = useState([]);
        const [loading, setLoading] = useState(true);
        
        const route = text.toLowerCase().replace(/\s/g, "");
    
    
        useEffect(()=>{
            const items = async ()=>{
                await axios.get(`${backendUrl}/${route}`,{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            }).then((response)=>{
                if(response){
                    console.log(response.data);
                    setArticles(response.data.items1);
                    setLoading(false);
                }
            })
            }
    
            items();
        },[]);

    return(<>
      
        {!loading ? (
        <>
        <h1 className="m-5 font-bold text-3xl font-sans text-indigo-500 pt-7"><a href={`/${route}`} className="underline hover:text-indigo-600">{text}</a></h1>
        <div className="m-5">
            <div className="grid md:grid-cols-2 mb-10">
                <div className="mr-5 "><img src={articles[7].img} className="w-full md:h-100 object-fill mb-5 md:mb-0 "/></div>
                <div>
                    <div className="text-xl font-bold m-0 mb-3">{articles[7].title}</div>
                    <div className="text-base m-0 mb-2">{articles[7].description}</div>
                    <div className="text-sm mb-2 m-0"><a href={articles[7].link} className="underline hover:text-blue-400">Read More</a></div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="grid grid-cols-4">
                    <div className=""><img className=" w-full h-20 object-fill" src={articles[1].img} /></div>
                    <div className="col-span-3 ml-4">
                        <div className="font-semibold">{articles[1].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[1].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className=""><img className=" w-full h-20 object-fill" src={articles[2].img} /></div>
                    <div className="col-span-3 ml-4">
                        <div className="font-semibold">{articles[2].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[2].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className=""><img className=" w-full h-20 object-fill" src={articles[3].img} /></div>
                    <div className="col-span-3 ml-4">
                        <div className="font-semibold">{articles[3].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[3].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className=""><img className=" w-full h-20 object-fill" src={articles[4].img} /></div>
                    <div className="col-span-3 ml-4">
                        <div className="font-semibold">{articles[4].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[4].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
        </>) :
        (
        <>
        <Skeleton className="h-8 w-1/4 m-5 pt-7" />
        <div className="m-5">
            <div className="grid md:grid-cols-2 mb-10">
                <Skeleton className="w-full h-50 md:h-100 mb-5 md:mb-0 mr-5 rounded-xl" />
                <div>
                    <Skeleton className="h-6 w-full m-3" />
                    <Skeleton className="h-6 w-1/2 m-3" />
                    <Skeleton className="h-4 w-full m-3" />
                    <Skeleton className="h-4 w-full m-3" />
                    <Skeleton className="h-4 w-full m-3" />
                    <Skeleton className="h-4 w-1/2 m-2" />
                    <Skeleton className="h-2 w-1/4 m-2" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="grid grid-cols-4">
                    <Skeleton className="w-full h-20 " />
                    <div className="col-span-3 ml-4">
                        <Skeleton className="w-full h-4 m-2" />
                        <Skeleton className="w-1/2 h-4 m-2" />
                        <Skeleton className="w-1/4 h-2 m-1" />
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <Skeleton className="w-full h-20 " />
                    <div className="col-span-3 ml-4">
                        <Skeleton className="w-full h-4 m-2" />
                        <Skeleton className="w-1/2 h-4 m-2" />
                        <Skeleton className="w-1/4 h-2 m-1" />
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <Skeleton className="w-full h-20 " />
                    <div className="col-span-3 ml-4">
                        <Skeleton className="w-full h-4 m-2" />
                        <Skeleton className="w-1/2 h-4 m-2" />
                        <Skeleton className="w-1/4 h-2 m-1" />
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <Skeleton className="w-full h-20 " />
                    <div className="col-span-3 ml-4">
                        <Skeleton className="w-full h-4 m-2" />
                        <Skeleton className="w-1/2 h-4 m-2" />
                        <Skeleton className="w-1/4 h-2 m-1" />
                    </div>
                </div>
            </div>
        </div>
        </>
        )}
    </>)
}