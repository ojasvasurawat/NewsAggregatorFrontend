export default function FooterText({text1, text2, text3, text4, text5, text6}) {
    return (
        <div className="text-center md:text-left mb-8 md:mb-0 mx-6">
            <h1 className="text-xl font-medium text-white mb-4">{text1}</h1>
            <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition">{text2}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition">{text3}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition">{text4}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition">{text5}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition">{text6}</a></li>
            </ul>
        </div>
    )
}