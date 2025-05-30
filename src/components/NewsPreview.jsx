import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThreeDCardDemo from "./Card3d";

export default function NewsPreview() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("For You");

    // Sample news data - in real app would come from API
    const newsItems = [
        {
            id: 1,
            title: "Tech Giants Announce New AI Collaboration",
            source: "Tech Daily",
            category: "Technology",
            time: "2 hours ago",
            image: "/api/placeholder/300/200"
        },
        {
            id: 2,
            title: "Global Markets Respond to Economic Policy Shifts",
            source: "Financial Times",
            category: "Business",
            time: "4 hours ago",
            image: "/api/placeholder/300/200"
        },
        {
            id: 3,
            title: "New Research Shows Promise for Renewable Energy",
            source: "Science Today",
            category: "Science",
            time: "6 hours ago",
            image: "/api/placeholder/300/200"
        },
        {
            id: 4,
            title: "Entertainment Industry Embraces Virtual Reality",
            source: "Media Watch",
            category: "Entertainment",
            time: "5 hours ago",
            image: "/api/placeholder/300/200"
        }
    ];

    const categories = ["For You", "Technology", "Business", "Science", "Entertainment", "World"];

    return (
        <section className="py-20 relative bg-[#0c0c16]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Discover News That Matters
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our AI analyzes thousands of articles daily to deliver personalized news that's relevant to your interests
                    </p>
                </div>

                {/* Category Selector */}
                <div className="flex justify-center mb-10 overflow-x-auto pb-2 space-x-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === category
                                    ? "bg-indigo-600 text-white"
                                    : "bg-indigo-900/30 text-gray-300 hover:bg-indigo-900/50"
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* News Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {newsItems.map(item => (
                        <div
                            key={item.id}
                            className="bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 rounded-xl overflow-hidden border border-indigo-900/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo-700/50 hover:translate-y-[-4px]"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-5 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium text-indigo-400 bg-indigo-950 px-2 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {item.time}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-white leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    Source: {item.source}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI Personalization Feature */}
                <div className="mt-16 px-4 py-10 rounded-2xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-indigo-800/30">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* 3D Card for Feature Highlight */}
                        <div className="w-full lg:w-1/3">
                            <ThreeDCardDemo
                                text1="AI-Powered Personalization"
                                text2="Our algorithms learn your preferences to deliver increasingly relevant news over time, saving you hours of scrolling"
                            />
                        </div>

                        <div className="w-full lg:w-2/3 space-y-6">
                            <h3 className="text-2xl font-bold text-white">Your Personalized News Experience</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                            <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Time-Saving Curation</h4>
                                        <p className="text-gray-400 text-sm mt-1">Get news that matters to you without wasting time on irrelevant content</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                            <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Diverse Perspectives</h4>
                                        <p className="text-gray-400 text-sm mt-1">See multiple viewpoints on important stories from trusted sources</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                            <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Continuous Learning</h4>
                                        <p className="text-gray-400 text-sm mt-1">Our AI learns and improves with your feedback and reading habits</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                                            <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Cross-Platform Access</h4>
                                        <p className="text-gray-400 text-sm mt-1">Stay informed on any device, anytime and anywhere</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("/signup")}
                                className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white rounded-lg shadow-lg shadow-indigo-600/20 transition-all duration-300"
                            >
                                Start Your Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}