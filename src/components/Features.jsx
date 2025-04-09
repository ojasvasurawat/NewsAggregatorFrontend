import Card1 from "./Card1";
import Card2 from "./Card2";

export default function Feature() {
    return <>
        <div className="p-6 m-3 mt-10 text-center">
            <h1 className="text-3xl mb-3 text-black">Manage Your News with Ease</h1>
            <h3 className="text-gray-900">Who is this app for?</h3>
        </div>

        <div className="flex m-5 justify-between">
            <Card1
                text1={"News Enthusiasts"}
                text2={"Stay ahead with real-time updates from multiple sources, including Twitter, YouTube, and top news websites. Get personalized news feeds tailored to your interests and never miss a trending story."}
                image={"src/assets/NE.svg"}
            />
            <Card1
                text1={"Content Creators"}
                text2={"Track industry trends, viral topics, and breaking news that matter to your niche. Use AI-powered summaries to get key insights quickly, and share them with your audience before anyone else."}
                image={"src/assets/c&c.svg"}
            />
            <Card1
                text1={"Researchers & Analysts"}
                text2={"Save time by accessing filtered, high-quality news from trusted sources. Bookmark important articles, generate AI-based summaries."}
                image={"src/assets/r&a.svg"}
            />
        </div>
        <div>
            <Card2
                text1={"Stay Ahead with AI-Powered News"}
                text2={"Tired of endless scrolling? Our AI-driven platform curates real-time news from Twitter, YouTube, Medium, NY Times, and more—all in one place. Get personalized insights, trending updates, and AI-generated summaries instantly."}
                image={"src/assets/two_persons.svg"}
                text3={"Explore More"}
            />
            <Card2
                text1={"Filter & Personalize Your News Like a Pro"}
                text2={"No more irrelevant articles! Our platform lets you filter news by topics, sources, and trends from platforms like Reddit, BBC, Forbes, Mashable, Bloomberg, and more. Bookmark, summarize, and stay informed on what truly matters to you."}
                image={"src/assets/standingGirl.svg"}
                text3={"Learn More"}
            />
        </div>
    </>
}