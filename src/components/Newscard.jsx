export default function Newscard({text1,text2,text3,text4,image}) {
    return (
        <div className="p-3 m-4 flex flex-col shadow-lg">
            <div className="p-3"><img src={image}/></div>
            <div>
                <div className="p-3">
                    <div className="text-green-700 text-sm mb-2">{text1}</div>
                    <div className="text-3xl font-bold mb-2">{text2}</div>
                    <div className="text-slate-400 mb-2">{text3}</div>
                </div>
                <div className="p-3">{text4}</div>
            </div>

        </div>
    )
}