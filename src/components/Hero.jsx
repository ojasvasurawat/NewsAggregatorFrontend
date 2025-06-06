import { useNavigate } from "react-router-dom"
import  Computer  from "/src/public/img.svg"

export default function Hero() {
    const navigate = useNavigate()
    return (<>
        <section className="bg-gradient-to-tr from-blue-400 to-indigo-500 via-purple-200  drop-shadow-[0_0_12px_rgba(136,72,153,0.4)] text-gray-800 py-24 px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-18 rounded-2xl shadow-sm">
            <div className="max-w-xl text-center lg:text-left">
                <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">News That Matters</span>
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                    <button className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-[0_0_12px_rgba(106,72,243,0.9)] hover:translate-y-[-2px] transition">Curion:</button> Smart News Delivery
                </h1>

                <h2 className="text-gray-600 mt-4 text-lg">AI-curated news from the sources you trust</h2>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
                    <button onClick={() => navigate("/signin")} className="focus:outline-none bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full transition shadow-lg hover:shadow-blue-200 hover:translate-y-[-2px]">Get Started</button>
                    <button onClick={() => navigate("/signin")} className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full transition">Explore Now</button>
                </div>

            </div>
            <div className="m-5 mt-6 md:mt-0">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl opacity-20"></div>
                    <img className="relative hover:scale-105 transition-transform duration-300 max-w-full h-auto drop-shadow-xl" src={Computer} alt="computer" />
                </div>
            </div>
        </section>
    </>)
}