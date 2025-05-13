import { useEffect, useState } from "react";
import NavbarLanding from "../components/Navbar2";
import axios from "axios";
import Scrollcard from "../components/ScrollCard";

export default function Politics() {
    // const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([])
    const [articles2, setArticles2] = useState([])
    // const [loading, setLoading] = useState(false);


      useEffect(()=>{
        const items = async ()=>{
            await axios.get(`http://localhost:8000/politics`,{
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


    //   const handleScroll = ()=>{
    //      if (document.body.scrollHeight - 300 < window.scrollY + window.innerHeight) {
    //     setLoading(true);
    //   }
    // }

    // debounce function
    // function debounce(func, delay) {
    //   let timeoutId;
    //   return function (...args) {
    //     if (timeoutId) {
    //       clearTimeout(timeoutId);
    //     }
    //     timeoutId = setTimeout(() => {
    //       func(...args);
    //     }, delay);
    //   };
    // }

    // window.addEventListener('scroll', debounce(handleScroll, 500));
  

    // useEffect(()=>{
    //     if(loading == true){
    //         setPage((prevPage)=>prevPage+1);
    //     }
    // },[loading]);


  
        


    return (
        <>
            <NavbarLanding />
            {/* <div>
                {products.map((item) => (
                    <div>
                        <h1 key={item.id}>{item.title}</h1>
                        <h1 key={item.id}>{item.description}</h1>
                    </div>
                ))}
            </div> */}
            <div>
                {articles.map((item) => (
                    <div>
                        
                        <Scrollcard
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
                        
                        <Scrollcard
                        image={item.img}
                        text1={item.link}   
                        text2= {item.title}
                        text3={item.description}
                        text4=""
                        />
                    </div>
                ))}
            </div>
            {/* Optional: Render BlogCard if it depends on fetched data */}
            {/* <BlogCard /> */}
        </>
    );
}