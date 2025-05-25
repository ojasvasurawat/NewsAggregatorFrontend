import axios from "axios"
import { useEffect, useState } from "react";

export default function HomeCard({text}){
    
        const [articles, setArticles] = useState([]);
        const [loading, setLoading] = useState(true);
        
        const route = text.toLowerCase().replace(/\s/g, "");
    
    
        useEffect(()=>{
            const items = async ()=>{
                await axios.get(`http://localhost:8000/${route}`,{
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
      <h1 className="m-5 font-bold text-3xl font-sans text-indigo-500 pt-7">{text}</h1>
        {!loading && (
        <div className="m-5">
            <div className="grid grid-cols-2">
                <div><img src={articles[7].img} /></div>
                <div>
                    <div className="text-xl">{articles[7].title}</div>
                    <div>{articles[7].description}</div>
                    <div className="text-sm mb-2 "><a href={articles[7].link} className="underline hover:text-blue-400">Read More</a></div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-4">
                    <div className=""><img src={articles[1].img} /></div>
                    <div className="col-span-3">
                        <div>{articles[1].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[1].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className=""><img src={articles[2].img} /></div>
                    <div className="col-span-3">
                        <div>{articles[2].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[2].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className=""><img src={articles[3].img} /></div>
                    <div className="col-span-3">
                        <div>{articles[3].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[3].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className=""><img src={articles[4].img} /></div>
                    <div className="col-span-3">
                        <div>{articles[4].title}</div>
                        {/* <div>{articles[1].description}</div> */}
                        <div className="text-sm mb-2 "><a href={articles[4].link} className="underline hover:text-blue-400">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>)}
    </>)
}