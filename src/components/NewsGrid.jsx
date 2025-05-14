import Newscard from "./Newscard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsGrid(){

     // const [page, setPage] = useState(1);
        const [articles, setArticles] = useState([])
        const [articles2, setArticles2] = useState([])
        // const [loading, setLoading] = useState(false);
    
    
          useEffect(()=>{
            const items = async ()=>{
                await axios.get(`http://localhost:8000/topstories`,{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            }).then((response)=>{
                if(response){
                    console.log(response.data);
                    setArticles(response.data.items1);
                    setArticles2(response.data.items2);
                    // setArticles((prevArticles) => [...prevArticles, ...response.data.items1]);
                    // setLoading(false);
                }
            })
            }
    
            items();
        },[])
    
    


    return(<>
    <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-20">Top Stories</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-5">
        

        {articles.map((item) => (
            <div>
                                
                <Newscard
                    image={item.img}
                    text1={item.link}   
                    text2= {item.title}
                    text3={item.description}
                    text4=""
                />
            </div>
        ))}
        {articles2.map((item) => (
            <div>
                                
                <Newscard
                    image={item.img}
                    text1={item.link}   
                    text2= {item.title}
                    text3={item.description}
                    text4=""
                />
            </div>
        ))}
                        



        {/* <Newscard 
        image="/src/assets/Image (4).svg"
        text1="Management" 
        text2="Stock Market Today: Key Highlights" 
        text3="Market fluctuations and expert insights on economic trends." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (5).svg"
        text1="Product" 
        text2="Cybersecurity Alert: New Malware Detected" 
        text3="Protect your data! Learn about the latest threats and how to stay safe." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (6).svg"
        text1="Design" 
        text2="Elon Musk's New AI Venture: What We Know So Far" 
        text3="The billionaire entrepreneur is shaking up the AI industry with a new startup." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (7).svg"
        text1="Design" 
        text2="YouTube’s Algorithm Update: What It Means for Creators" 
        text3="YouTube is rolling out changes to content ranking—here’s how it affects videos." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (8).svg"
        text1="Product" 
        text2="Apple’s iPhone 16 Rumors: Leaks & Expected Features" 
        text3="Insider reports suggest groundbreaking camera upgrades and a new chip." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (9).svg"
        text1="Customer Success" 
        text2="OpenAI vs Google: The Race for the Best AI Model" 
        text3="OpenAI’s GPT-5 is rumored to challenge Google’s Gemini—who will lead?" 
        text4=""/> */}


    </div>
    <div className="p-2 flex justify-center">
        <button className="m-3 focus:outline-none text-gray-200 bg-black hover:border hover:border-slate-300 hover:bg-black hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-balck dark:focus:ring-gray-200 ease-linear">
        ↓ Load More
        </button>
    </div>
    </>)
}