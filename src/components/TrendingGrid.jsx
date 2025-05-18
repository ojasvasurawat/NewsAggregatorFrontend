import TrendingCard from "./TrendingCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingGrid(){

     // const [page, setPage] = useState(1);
        const [articles, setArticles] = useState([])
        // const [loading, setLoading] = useState(false);
    
    
          useEffect(()=>{
            const items = async ()=>{
                await axios.get(`http://localhost:8000/trending`,{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            }).then((response)=>{
                if(response){
                    console.log(response.data);
                    setArticles(response.data.items1);
                    // setArticles((prevArticles) => [...prevArticles, ...response.data.items1]);
                    // setLoading(false);
                }
            })
            }
    
            items();
        },[])
    
    


    return(<>
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
    <div className="p-2 flex justify-center">
        <button className="m-3 focus:outline-none text-gray-200 bg-black hover:border hover:border-slate-300 hover:bg-black hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-balck dark:focus:ring-gray-200 ease-linear">
        ↓ Load More
        </button>
    </div>
    </>)
}