import Curion from "/src/public/Curion.svg"

export default function TrendingCard({text1,text2,text3,text4,image}) {
    return (
        <div className="p-3 w-full hover:scale-105 duration-500 text-black md:grid md:grid-cols-3 ">
            <div className="p-3 justify-items-center md:mt-3 "><img className=" md:h-50 rounded-lg" src={image || Curion}/></div>
            <div className="col-span-2">
                <div className="p-3 ">
                    <div className="text-xl md:text-3xl font-bold mb-2">{text2}</div>
                    <div className="text-slate-600 mb-2 text-sm md:text-base line-clamp-4 overflow-hidden md:line-clamp-3 md:overflow-hidden">{text3}</div>
                    <div className=" text-sm mb-2"><a href={text1}>Read More</a></div>
                </div>
                {/* <div className="p-3">{text4}</div> */}
            </div>

        </div>
    )
}