// export default function Card2({text1,text2,text3,image}) {
//     return (
//         <>
//             <div className="flex flex-col md:flex-row items-center bg-indigo-950 rounded-xl shadow-lg overflow-hidden p-6 md:p-8 max-w-5xl mx-auto">

import { useNavigate } from "react-router-dom"

//                 <img className="w-full md:w-1/2 object-contain mb-6 md:mb-0 md:mr-6" src={image} alt="" />

//                 <div className="text-left md:text-justify space-y-4">
//                     <h1 className="text-2xl font-semibold text-white">{text1}</h1>
//                     <h2 className="text-indigo-300 text-base leading-relaxed">{text2}</h2>
//                     <button className="mt-4 inline-block text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded-lg text-sm px-6 py-2 transition duration-300">{text3}</button>
//                 </div>
//             </div>
//         </>
//     )
// }
export default function Card2({ text1, text2, text3, image }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex flex-col md:flex-row items-center bg-gradient-to-tr from-blue-100 via-indigo-300 to-purple-200  rounded-2xl shadow-lg overflow-hidden p-6 md:p-8 max-w-5xl mx-auto">
                <img className="w-full md:w-1/2 object-contain mb-6 md:mb-0 md:mr-6" src={image} alt="" />

                <div className="text-left md:text-justify space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800">{text1}</h1>
                    <h2 className="text-gray-600 text-base leading-relaxed">{text2}</h2>
                    <button onClick={()=>{navigate('/signin')}} className="mt-4 inline-block text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold rounded-lg text-sm px-6 py-2 transition duration-300 shadow-md hover:shadow-blue-200">{text3}</button>
                </div>
            </div>
        </>
    )
}