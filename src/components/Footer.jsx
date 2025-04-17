import FooterText from "./FooterText";
// import { Input } from "@material-tailwind/react";

export default function Footer() {
    return (<>
        <div className="bg-gray-200 text-center mt-20 py-6">
            <h1 className="text-3xl p-3 pt-6">Stay Informed, Stay Ahead</h1>
            <button className="mt-4 focus:outline-none text-gray-50 bg-black hover:border hover:border-slate-300 hover:bg-black hover:text-slate-50 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-balck dark:focus:ring-gray-2000">Try It Now</button>
        </div>
        <div className="bg-black text-white flex justify-around p-8">
            <div><h1 className="text-3xl font-sans">BLIp</h1>
                <h2>Copyright © 2020 Landify UI Kit.</h2>
                <h3>All rights reserved</h3>
                <div className="flex">
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
            <div><h1 className="text-2xl mb-2 font-sans">Stay up to date</h1>
                <div className="mt-3">
                    <input type="text" className="border-2 bg-white text-black rounded-md" placeholder="Your email address" />
                </div>
            </div>
        </div>
    </>)
}