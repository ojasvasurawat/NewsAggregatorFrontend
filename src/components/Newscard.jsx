export default function Newscard({text1,text2,text3,text4,image}) {
    return (
        <div className="p-3 m-4 hover:scale-105 hover:bg-black hover:shadow-lg hover:rounded-lg hover:text-white duration-500 flex flex-col shadow-lg active:scale-105 active:bg-black active:shadow-lg active:rounded-lg active:text-active">
            <div className="p-3 "><img className="" src={image}/></div>
            <div>
                <div className="p-3">
                    <div className=" text-sm mb-2">{text1}</div>
                    <div className="text-3xl font-bold mb-2">{text2}</div>
                    <div className="text-slate-400 mb-2">{text3}</div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )
}