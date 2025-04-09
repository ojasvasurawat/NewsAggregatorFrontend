import Card3 from "./Card3";


export default function BottomFeatures() {
    return (<>
        <div className="mb-5">
            <div className="text-center text-gray-800 mx-90">
                <h1 className="text-4xl  text-gray-700 my-3.5 mb-6">News & Insights: Stay Informed with the Latest Trends</h1>
                <h2 className=" text-gray-600 mb-15 mx-10">Our AI-powered blog isn’t just about news—it’s about understanding what’s next in media, technology, and the digital landscape. We analyze emerging trends, industry shifts, and expert insights so you're always a step ahead.</h2>
            </div>
            <div className="flex justify-around">
                <Card3
                    image={"src/assets/man.svg"}
                    text={"How AI is Changing the News Industry"}
                />
                <Card3
                    image={"src/assets/laptop.svg"}
                    text={"How AI is Changing the News Industry"}
                />
                <Card3
                    image={"src/assets/laptopScreen.svg"}
                    text={"How AI is Changing the News Industry"}
                />
            </div>
        </div>
    </>)
}