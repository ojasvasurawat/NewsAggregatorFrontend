// import { useNavigate } from "react-router-dom";
// import FooterText from "./FooterText";

// export default function Footer() {
//     const navigate = useNavigate()
//     return (<>
//         <div className="bg-gradient-to-r from-[#1D1E33] to-[#2621ae] text-white text-center py-16 px-6">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Stay Ahead of the Curve?</h2>
//             <p className="text-lg text-gray-300 mb-8">Join thousands who rely on Curion to get curated, trustworthy news in seconds.</p>
//             <button onClick={() => navigate("/signup")} className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
//                 Get Started for Free
//             </button>
//         </div>
//         <div className="bg-[#0f0f1a] text-white flex flex-col lg:gap-50 md:flex-row  justify-center items-center text-center p-6 md:p-8">
//             <div className="text-center md:text-left"><h1 className="text-3xl font-sans">Curion</h1>
//                 <h2>Copyright © 2020 Landify UI Kit.</h2>
//                 <h3>All rights reserved</h3>
//                 <div className="flex gap-4 mt-3">
//                     <img src="src/assets/insta.svg" alt="" />
//                     <img src="src/assets/ball.svg" alt="" />
//                     <img src="src/assets/twiter.svg" alt="" />
//                     <img src="src/assets/yt.svg" alt="" />
//                 </div>
//             </div>
//             <FooterText
//                 text1={"Company"}
//                 text2={"About us"}
//                 text3={"Blog"}
//                 text4={"Contact us"}
//                 text5={"Pricing"}
//                 text6={"Testimonials"}
//             />
//             <FooterText
//                 text1={"Support"}
//                 text2={"Help center"}
//                 text3={"Terms of service"}
//                 text4={"Legal"}
//                 text5={"Privacy policy"}
//                 text6={"Status"}
//             />
//             <div className="text-center md:text-left"><h1 className="text-2xl mb-2 font-sans">Stay up to date</h1>
//                 <div className="mt-3">
//                     <input type="text" className="border-2 bg-white text-black rounded-md p-1 px-1.5" placeholder="Your email address" />
//                 </div>
//             </div>
//         </div>
//     </>)
// }
import { useNavigate } from "react-router-dom";
import FooterText from "./FooterText";

export default function Footer() {
    const navigate = useNavigate()
    return (<>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-6 rounded-t-3xl mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Stay Ahead of the Curve?</h2>
            <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">Join thousands who rely on Curion to get curated, trustworthy news in seconds.</p>
            <button onClick={() => navigate("/signup")} className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg">
                Get Started for Free
            </button>
        </div>
        <div className="bg-gray-900 text-white flex flex-col lg:gap-50 md:flex-row justify-center items-center text-center p-6 md:p-8">
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-3xl font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Curion</h1>
                <h2 className="text-gray-400 mt-2">Copyright © 2025 Curion.</h2>
                <h3 className="text-gray-500">All rights reserved</h3>
                <div className="flex gap-4 mt-3">
                    <img src="src/assets/insta.svg" alt="" className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition" />
                    <img src="src/assets/ball.svg" alt="" className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition" />
                    <img src="src/assets/twiter.svg" alt="" className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition" />
                    <img src="src/assets/yt.svg" alt="" className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition" />
                </div>
            </div>
            <FooterText
                text1={"Company"}
                text2={"About us"}
                text3={"Blog"}
                text4={"Contact us"}
                text5={"Pricing"}
                text6={"Testimonials"}
            />
            <FooterText
                text1={"Support"}
                text2={"Help center"}
                text3={"Terms of service"}
                text4={"Legal"}
                text5={"Privacy policy"}
                text6={"Status"}
            />
            <div className="text-center md:text-left mt-6 md:mt-0">
                <h1 className="text-2xl mb-2 font-sans">Stay up to date</h1>
                <div className="mt-3 flex">
                    <input type="text" className="border-2 border-gray-700 bg-gray-800 text-white rounded-l-md p-2" placeholder="Your email address" />
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-r-md hover:from-blue-600 hover:to-purple-700 transition">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </>)
}