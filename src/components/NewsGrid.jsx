import Newscard from "./Newscard";

export default function NewsGrid(){
    return(<>
    <div className="grid grid-cols-3 m-20 gap-5">
        <Newscard 
        image="/src/assets/Image1.svg"
        text1="Design" 
        text2="Breaking News: AI & Tech Innovations" 
        text3="The latest advancements in AI and their impact on industries worldwide." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image2.svg"
        text1="Product" 
        text2="Twitter CEO Announces New Policies" 
        text3="Major updates on content moderation and user safety measures." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (3).svg"
        text1="Software Engineering" 
        text2="Top YouTube Creators on AI Trends" 
        text3="How influencers are shaping public perception of artificial intelligence." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (4).svg"
        text1="Management" 
        text2="Stock Market Today: Key Highlights" 
        text3="Market fluctuations and expert insights on economic trends." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (5).svg"
        text1="Product" 
        text2="Cybersecurity Alert: New Malware Detected" 
        text3="Protect your data! Learn about the latest threats and how to stay safe." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (6).svg"
        text1="Design" 
        text2="Elon Musk's New AI Venture: What We Know So Far" 
        text3="The billionaire entrepreneur is shaking up the AI industry with a new startup." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (7).svg"
        text1="Design" 
        text2="YouTube’s Algorithm Update: What It Means for Creators" 
        text3="YouTube is rolling out changes to content ranking—here’s how it affects videos." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (8).svg"
        text1="Product" 
        text2="Apple’s iPhone 16 Rumors: Leaks & Expected Features" 
        text3="Insider reports suggest groundbreaking camera upgrades and a new chip." 
        text4=""/>
        <Newscard 
        image="/src/assets/Image (9).svg"
        text1="Customer Success" 
        text2="OpenAI vs Google: The Race for the Best AI Model" 
        text3="OpenAI’s GPT-5 is rumored to challenge Google’s Gemini—who will lead?" 
        text4=""/>
    </div>
    <div className="p-2 flex justify-center">
        <button className="bg-green-800 font-bold p-2 text-white rounded-sm hover:bg-green-600">
        ↓ load more
        </button>
    </div>
    </>)
}