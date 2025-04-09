export default function Card3({ image,text }) {
    return (
        <>
            <div className="relative">
                <div className="rounded-b-md">
                    <img src={image} alt="image" className="w-full" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 bg-slate-50 rounded-2xl p-3">
                    <h1 className="text-sm text-center">{text}</h1>
                    <button className=" border-b mx-13 text-neutral-800 hover:text-slate-400 text-sm">Readmore</button>
                </div>
            </div>
        </>
    )
}
