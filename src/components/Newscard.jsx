export default function Newscard({text1,text2,text3,text4,image, highlight = false }) {

   
        return (
        
        <div className={`p-3 m-4 md:h-145 duration-500 text-black rounded-xl border min-w-80 md:min-w-100 ${highlight ? "scale-105 shadow-lg z-10" : "scale-90"}`}>

            <div className="p-3 justify-items-center mt-2 "><img className=" h-50 " src={image || "src/assets/Curion.svg"} alt=""/></div>
            <div>
                <div className="p-3">
                    <div className=" text-xl lg:text-2xl font-bold mb-2">{text2}</div>
                    <div className=" text-neutral-600 mb-2 line-clamp-3 overflow-hidden">{text3}</div>
                    <div className="text-sm mb-2"><a href={text1}>Read More</a></div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )

    
}