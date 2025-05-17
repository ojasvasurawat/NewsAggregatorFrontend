export default function Newscard({text1,text2,text3,text4,image}) {

    if(image){
        return (
        
        <div className="p-3 m-4 md:h-160 hover:scale-105 duration-500 text-black rounded-xl border">

            <div className="p-3 justify-items-center mt-3 "><img className=" md:h-50" src={image} alt=""/></div>
            <div>
                <div className="p-3">
                    <div className=" text-xl lg:text-2xl font-bold mb-2">{text2}</div>
                    <div className=" text-slate-400 mb-2 line-clamp-3 overflow-hidden">{text3}</div>
                    <div className="text-sm mb-2"><a href={text1}>Read More</a></div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )
    }
    else{
        return (
        
        <div className="p-3 m-4 md:h-100 hover:scale-105 duration-500 text-black rounded-xl  border">
            <div>
                <div className="p-3">
                    <div className="text-xl lg:text-2xl font-bold mb-2">{text2}</div>
                    <div className="text-slate-400 mb-2 line-clamp-3 overflow-hidden">{text3}</div>
                    <div className=" text-sm mb-2"><a href={text1}>Read More</a></div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )
    }
    
}