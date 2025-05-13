export default function Scrollcard({text1,text2,text3,text4,image}) {
    return (
        <>
        <div className="p-3 text-black flex flex-col pt-20 relative text-center 
                bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 dark:border-white/[0.2] border-black/[0.1] rounded-xl  border 
                h-screen md:h-auto"
>
            <div className="p-3 justify-items-center mt-3 z-0 h-full md:h-auto"><img className="w-full h-full object-cover md:h-auto" src={image}/></div>
            <div>
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-4 text-white space-y-reverse space-y-2">
                    <div className="text-lg md:text-3xl font-bold mb-2 ">{text2}</div>
                    <div className="text-sm  mb-2 ">{text3}</div>
                    <div className="text-sm md:text-sm mb-10 "><a href={text1} className="underline hover:text-blue-400">Read More</a></div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
        </>
    )
}