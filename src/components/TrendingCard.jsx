export default function TrendingCard({text1,text2,text3,text4,image}) {
    return (
        <div className="p-3 m-4 hover:scale-105 duration-500 text-black md:grid md:grid-cols-3 rounded-xl border">
            <div className="p-3 justify-items-center mt-3 "><img className=" md:h-50 " src={image || "src/assets/Curion.svg"}/></div>
            <div className="col-span-2">
                <div className="p-3 ">
                    <div className="text-3xl font-bold mb-2">{text2}</div>
                    <div className="text-slate-400 mb-2 ">{text3}</div>
                    <div className=" text-sm mb-2"><a href={text1}>Read More</a></div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )
}