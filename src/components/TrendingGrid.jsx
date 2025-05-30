import TrendingCard from "./TrendingCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function TrendingGrid(){

     // const [page, setPage] = useState(1);
        const [articles, setArticles] = useState([])
        const [loading, setLoading] = useState(false);
    
    
          useEffect(()=>{
            const items = async ()=>{
                await axios.get(`${backendUrl}/trending`,{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            }).then((response)=>{
                if(response){
                    console.log(response.data);
                    setArticles(response.data.items1);
                    // setArticles((prevArticles) => [...prevArticles, ...response.data.items1]);
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
    
    


    return(<>
{loading ? (
        <>
        <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-20 justify-self-center">Trending</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-10 gap-5">
        

        {articles.map((item) => (
            <div>
                                
                <TrendingCard
                    image={item.img}
                    text1={item.link}   
                    text2= {item.title}
                    text3={item.description}
                    text4=""
                />
            </div>
        ))}

    </div>
    </>
    ) :
    (   <>
        <Skeleton className="h-8 w-1/4 m-5 mt-20 justify-self-center" />
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-10 gap-5">
        

        <div>
            <div className="pr-8 m-8 hover:scale-105 duration-500 text-black md:grid md:grid-cols-3 rounded-xl border">
                <Skeleton className="w-full p-3 m-4 h-60 md:h-50 rounded-xl" />
                <div className="col-span-2">
                    <Skeleton className="h-6 w-full m-5" />
                    <Skeleton className="h-6 w-full m-5 md:h-0" />
                    <Skeleton className="h-6 w-full m-5 md:h-0" />
                    <Skeleton className="h-6 w-1/2 m-5" />
                    <Skeleton className="h-4 w-full m-5" />
                    <Skeleton className="h-4 w-full m-5" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-1/2 m-5" />
                    <Skeleton className="h-2 w-1/4 m-5" />
                </div>
            </div>
            <div className="pr-8 m-8 hover:scale-105 duration-500 text-black md:grid md:grid-cols-3 rounded-xl border">
                <Skeleton className="w-full p-3 m-4 h-60 md:h-50 rounded-xl" />
                <div className="col-span-2">
                    <Skeleton className="h-6 w-full m-5" />
                    <Skeleton className="h-6 w-full m-5 md:h-0" />
                    <Skeleton className="h-6 w-full m-5 md:h-0" />
                    <Skeleton className="h-6 w-1/2 m-5" />
                    <Skeleton className="h-4 w-full m-5" />
                    <Skeleton className="h-4 w-full m-5" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-full m-5 md:h-0" />
                    <Skeleton className="h-4 w-1/2 m-5" />
                    <Skeleton className="h-2 w-1/4 m-5" />
                </div>
            </div>
        </div>

    </div>
    </>
    )
    }
    
    </>)
}