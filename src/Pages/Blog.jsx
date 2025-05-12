import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import NavbarHome from "../components/Navbar";
import { div } from "motion/react-client";
import NavbarLanding from "../components/Navbar2";

export default function Blog() {
    const [products, setProducts] = useState([]);
    const [articles,setArticles]=useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                var url = 'https://newsapi.org/v2/everything?' +
                    'q=Apple&' +
                    // 'from=2025-04-22&' +
                    // 'sortBy=popularity&' +
                    'apiKey=344f93beedd443bfaea902fa16e5e334';

                var req = new Request(url);

                const res=await fetch(req)
                   const data=await res.json()
                   const articles=data.articles
                
                   console.log(data)
                   setArticles(data.articles)
                   console.log(articles)


                // const res = await fetch('https://newsapi.org/v2/everything?' +
                //     'q=Apple&' +
                //     'from=2025-04-22&' +
                //     'sortBy=popularity&' +
                //     'apiKey=344f93beedd443bfaea902fa16e5e334');
                // const data = await res.json();
                // setProducts(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        fetchProducts();
    }, []);

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
                        <h1 key={item.id}>{item.title}</h1>
                        <h1 key={item.id}>{item.author}</h1>
                        <h1 key={item.id}>{item.description}</h1>
                        <a className="text-[#466bb3] underline " href={item.url}> for more info</a>
                        
                        <img src={item.urlToImage} className="h-50 w-50" alt="" />
                    </div>
                ))}
            </div>
            {/* Optional: Render BlogCard if it depends on fetched data */}
            {/* <BlogCard /> */}
        </>
    );
}