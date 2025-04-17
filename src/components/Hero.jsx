import { useNavigate } from "react-router-dom"

export default function Hero() {
    const navigate=useNavigate()
    return (<>
        <div className="p-5 flex flex-col md:flex-row justify-between items-center bg-gray-100 rounded-lg">
            <div className="m-9 text-center md:text-left">
                <h1 className="font-serif text-5xl text-black"> Personalized News & Insights Just for You!</h1>
                <h2 className="text-gray-600 mt-3">Stay updated with curated news from Twitter, YouTube, and top news sources – all in one place.</h2>
                <button onClick={() => navigate("/signup")} className="m-3 focus:outline-none text-gray-200 bg-black hover:border-slate-300 hover:bg-zinc-700 hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:focus:ring-gray-200 ease-linear">Get Started</button>
            </div>
            <div className="m-5 mt-6 md:mt-0">
                <img className="hover:scale-110 duration-400" src="src/assets/img.svg" alt="computer" />
            </div>
        </div>
        </>)
}