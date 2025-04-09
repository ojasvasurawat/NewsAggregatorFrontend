export default function Card1({ text1, text2, image }) {
    return (

        <div className="bo w-xs h-full text-black">
            <div className="p-3 flex justify-around">
                <div className="px-4 py-2 m-4 flex-row justify-items-center text-center bg-zinc-200/50 rounded-md">
                    <img src={image} alt="" />
                    <h1 className="mb-4 text-2xl text-gray-800">{text1}</h1>
                    <h2>{text2}</h2>
                </div>
            </div>
        </div>
    )
}