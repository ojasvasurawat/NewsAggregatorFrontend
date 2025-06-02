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
        <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-5 md:pt-20 justify-self-center">Trending</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-2 md:m-10 md:gap-5">
        

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
        <h1><Skeleton className="h-9 w-1/2 md:w-1/4  mt-7 mb-2 md:mb-15 md:mt-20 justify-self-center" /></h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-2 md:m-14 md:mr-37 md:gap-5">
        

        <div>
            <div className=" mr-10 ml-2 md:m-0 hover:scale-105 duration-500 text-black md:grid md:grid-cols-3">
                <Skeleton className="w-full m-4 h-50 md:h-50 rounded-lg justify-items-center" /> 
                <div className="col-span-2">
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 md:mt-5 w-full mx-5 my-2 " />
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 w-full mx-5 my-2 md:h-0" />
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 w-full mx-5 my-2 md:h-0" />
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 w-1/2 mx-5 mt-2 mb-4" />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2 " />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2 " />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2  md:h-0" />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2  md:h-0" />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-1/2 mx-5 mt-2 mb-4 " />
                    <Skeleton className="h-4 md:ml-10 w-1/4 md:w-1/8 mx-5 mb-15 " />
                </div>
            </div>
            <div className=" mr-10 ml-2 md:m-0 hover:scale-105 duration-500 text-black md:grid md:grid-cols-3">
                <Skeleton className="w-full m-4 h-50 md:h-50 rounded-lg justify-items-center" /> 
                <div className="col-span-2">
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 md:mt-5 w-full mx-5 my-2 " />
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 w-full mx-5 my-2 md:h-0" />
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 w-full mx-5 my-2 md:h-0" />
                    <Skeleton className="h-5 md:h-7.5 md:ml-10 w-1/2 mx-5 mt-2 mb-4" />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2 " />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2 " />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2  md:h-0" />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-full mx-5 my-2  md:h-0" />
                    <Skeleton className="h-3.5 md:h-4 md:ml-10 w-1/2 mx-5 mt-2 mb-4 " />
                    <Skeleton className="h-4 md:ml-10 w-1/4 md:w-1/8 mx-5 mb-15 " />
                </div>
            </div>
        </div>

    </div>
    </>
    )
    }
    
    </>)
}