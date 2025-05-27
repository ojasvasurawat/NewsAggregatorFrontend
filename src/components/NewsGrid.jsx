import Newscard from "./Newscard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import TrendingCard from "./TrendingCard";

export default function NewsGrid({route, text}){

     // const [page, setPage] = useState(1);
        const [articles, setArticles] = useState([])
        const [articles2, setArticles2] = useState([])
        // const [loading, setLoading] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(null);
        const containerRef = useRef(null);
        
    
    
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
                    setArticles2(response.data.items2);
                    // setArticles((prevArticles) => [...prevArticles, ...response.data.items1]);
                    // setLoading(false);
                }
            })
            }
    
            items();
        },[]);



        // useEffect(() => {
        //   const handleScroll = () => {
        //     const container = containerRef.current;
        //     if (!container) return;

        //     const containerCenter = container.offsetLeft + container.clientWidth / 2;
        //     const children = Array.from(container.children).filter((child) => child.dataset.card === "true");

        //     let closest = 0;
        //     let minDist = Infinity;

        //     children.forEach((child, index) => {
        //       const rect = child.getBoundingClientRect();
        //       const childCenter = rect.left + rect.width / 2;
        //       const distance = Math.abs(containerCenter - childCenter);

        //       if (distance < minDist) {
        //         minDist = distance;
        //         closest = index;
        //       }
        //     });

        //     setCurrentIndex(closest);
        //   };

        //   const handleWheel = (e)=>{
        //     if(e.deltaY !== 0 ){
        //         e.preventDefault();
        //         container.scrollLeft += e.deltaY
        //     }  
        //   }

        //   const container = containerRef.current;
        //   container?.addEventListener("scroll", handleScroll);
        //   container?.addEventListener("wheel", handleWheel, {passive: false});
        //   handleScroll(); 

        //   return () => container?.removeEventListener("scroll", handleScroll);
        // }, []);
    
    
  const allArticles = [...articles,...articles2];


    return(<>
    <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-20 justify-self-center">{text}</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-10 gap-5">
        

        {allArticles.map((item) => (
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
    </>)
}