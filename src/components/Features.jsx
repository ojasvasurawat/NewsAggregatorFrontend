import Card2 from "./Card2";
import ThreeDCardDemo from "./Card3d";

export default function Feature() {
    return <>
        <div className="px-4 py-20 md:p-6 m-3 text-center">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Features</span>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Curion</span> Stands Out</h1>
            <p className="text-gray-600 max-w-xl mx-auto">Explore the key features that make Curion your go-to news companion—intelligent, trustworthy, and personalized.</p>
        </div>

        <div className="flex flex-wrap lg:grid-cols-2 justify-center gap-8 px-2 md:px-6 mb-16">
            <div data-aos="fade-up" data-aos-delay="100">
                <ThreeDCardDemo
                    text1={"AI-Powered Curation"}
                    text2={"Curion uses intelligent algorithms to cut through the noise and deliver only the most relevant stories straight to you."}
                />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <ThreeDCardDemo
                    text1={"Trusted Sources"}
                    text2={"News from reliable and well-known publishers like BBC, Reuters, and more—so you always get the full picture."}
                    image={"src/assets/c&c.svg"}
                />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <ThreeDCardDemo
                    text1={"Personalized Feed"}
                    text2={"Select your interests, and Curion tailors your news feed to match what matters most to you."}
                    image={"src/assets/r&a.svg"}
                />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <ThreeDCardDemo
                    text1={"Real-time Updates"}
                    text2={"Stay ahead with live updates as stories develop—because timing is everything."}
                    image={""}
                />
            </div>
        </div>
        <div className="flex flex-col items-center gap-16 px-4 md:px-12 py-8">
            <div data-aos="zoom-in" className="w-full">
                <Card2
                    text1={"Stay Ahead with AI-Powered News"}
                    text2={"Stop scrolling. Start reading smarter. Curion's AI scans trusted platforms like Twitter, YouTube, Medium, and NYT to deliver personalized, real-time news summaries—so you never miss what matters."}
                    image={"src/assets/two_persons.svg"}
                    text3={"Explore More"}
                />
            </div>
            <div data-aos="zoom-in" className="w-full">
                <Card2
                    text1={"Filter & Personalize Your News Like a Pro"}
                    text2={"Cut through the noise with precision. Curion lets you filter by topics, sources, and trends—be it Reddit, Bloomberg, or BBC. Bookmark, summarize, and stay informed on your own terms."}
                    image={"src/assets/standingGirl.svg"}
                    text3={"Learn More"}
                />
            </div>
        </div>
    </>
}