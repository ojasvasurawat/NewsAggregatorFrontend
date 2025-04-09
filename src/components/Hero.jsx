export default function Hero() {
    return (<>
        <div className="p-5 flex justify-between bg-gray-100">
            <div className="m-9">
                <h1 className="font-serif text-5xl text-black"> Personalized News & Insights Just for You!</h1>
                <h2 className="text-gray-600 mt-3">Stay updated with curated news from Twitter, YouTube, and top news sources – all in one place.</h2>
                <button className="m-3 focus:outline-none text-gray-200 bg-black hover:border hover:border-slate-300 hover:bg-black hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-balck dark:focus:ring-gray-200">Get Started</button>
            </div>
            <div className="m-5">
                <img className="hover:scale-110" src="src/assets/img.svg" alt="computer" />
            </div>
            </div>
        </>)
}