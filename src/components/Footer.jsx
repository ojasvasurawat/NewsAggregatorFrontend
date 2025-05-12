import { useNavigate } from "react-router-dom";
import FooterText from "./FooterText";

export default function Footer() {
    const navigate = useNavigate()
    return (<>
        <div className="bg-gradient-to-r from-[#1D1E33] to-[#2621ae] text-white text-center py-16 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Stay Ahead of the Curve?</h2>
            <p className="text-lg text-gray-300 mb-8">Join thousands who rely on Curion to get curated, trustworthy news in seconds.</p>
            <button onClick={() => navigate("/signup")} className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                Get Started for Free
            </button>
        </div>
        <div className="bg-[#0f0f1a] text-white flex flex-col lg:gap-50 md:flex-row  justify-center items-center text-center p-6 md:p-8">
            <div className="text-center md:text-left"><h1 className="text-3xl font-sans">Curion</h1>
                <h2>Copyright © 2020 Landify UI Kit.</h2>
                <h3>All rights reserved</h3>
                <div className="flex gap-4 mt-3">
                    <img src="src/assets/insta.svg" alt="" />
                    <img src="src/assets/ball.svg" alt="" />
                    <img src="src/assets/twiter.svg" alt="" />
                    <img src="src/assets/yt.svg" alt="" />
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
            <div className="text-center md:text-left"><h1 className="text-2xl mb-2 font-sans">Stay up to date</h1>
                <div className="mt-3">
                    <input type="text" className="border-2 bg-white text-black rounded-md p-1 px-1.5" placeholder="Your email address" />
                </div>
            </div>
        </div>
    </>)
}