export default function Card1({ text1, text2, image }) {
    return (
        <div className="bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition w-full max-w-sm text-white">
            <div className="flex flex-col items-center text-center space-y-4">
                <img src={image} alt="" className="h-16" />
                <h1 className="text-xl font-semibold">{text1}</h1>
                <p className="text-gray-400 text-sm">{text2}</p>
            </div>
        </div>
    )
}