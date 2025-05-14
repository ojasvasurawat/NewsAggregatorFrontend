export default function Newscard({text1,text2,text3,text4,image}) {
    return (
        <div className="p-3 m-4 md:h-140 text-white hover:scale-105 hover:bg-black hover:shadow-lg hover:rounded-lg  duration-500 flex flex-col shadow-lg active:scale-105 active:bg-black active:shadow-lg active:rounded-lg active:text-active
                bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 dark:border-white/[0.2] border-black/[0.1] rounded-xl  border"
>
            <div className="p-3 justify-items-center mt-3 "><img className=" md:h-50" src={image}/></div>
            <div>
                <div className="p-3">
                    <div className="text-3xl font-bold mb-2">{text2}</div>
                    <div className="text-slate-400 mb-2 line-clamp-3 overflow-hidden">{text3}</div>
                    <div className=" text-sm mb-2"><a href={text1}>Read More</a></div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )
}