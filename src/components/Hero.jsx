import { useNavigate } from "react-router-dom"
import Button from "./Button"

export default function Hero() {
    const navigate = useNavigate()
    return (<>
        <section className="bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 text-white py-20 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-4">
            <div className="max-w-xl text-center lg:text-left">
                
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                    <span className="text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)]">Curion:</span> Bringing Stories That Matter
                </h1>
                <h2 className="text-white mt-4 text-lg">AI-curated news from the sources you trust</h2>
                
                <button onClick={() => navigate("/signup")} className="m-3 focus:outline-none bg-indigo-500 hover:bg-indigo-800 text-white px-6 py-3 rounded-full transition shadow-lg shadow-indigo-500/20 ease-linear">Get Started</button>
                <button onClick={() => navigate("/signup")} className="m-3 border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition">Explore Now</button>
            </div>
            <div className="m-5 mt-6 md:mt-0">
                <img className="hover:scale-105 transition-transform duration-300 max-w-full h-auto" src="src/assets/img.svg" alt="computer" />
            </div>
        </section>
    </>)
}