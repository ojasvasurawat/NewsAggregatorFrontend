import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignInCard from "../components/SignInCard";
import SignUpCard from "../components/SignupCard";

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState("signup");
    const navigate = useNavigate();

   
    // Signup state
    const [name, setName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    
    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:8000/signup", {
                name,
                email: signupEmail,
                password: signupPassword
            });

            if (response.data) {
                // Show success message or automatically switch to signin
                setActiveTab("signin");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            // Here you'd normally show an error to the user
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left side with background image */}
            <div className="hidden lg:flex lg:w-1/2 bg-blue-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-12 text-white z-10">
                    <h1 className="text-4xl font-bold mb-6">Curion</h1>
                    <p className="text-xl mb-8">Stay informed with personalized news delivered directly to you.</p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="bg-blue-500 p-2 rounded-full mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span>Curated news from multiple sources</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-500 p-2 rounded-full mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span>Personalized for your interests</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-blue-500 p-2 rounded-full mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span>Stay updated with breaking news alerts</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side with auth forms */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Tabs */}
                    <div className="flex mb-8 border-b">
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`w-1/2 py-4 text-center font-medium ${activeTab === "signup"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500"
                                }`}
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={() => setActiveTab("signin")}
                            className={`w-1/2 py-4 text-center font-medium ${activeTab === "signin"
                                    ? "text-blue-600 border-b-2 border-blue-600"
                                    : "text-gray-500"
                                }`}
                        >
                            Sign In
                        </button>
                    </div>

                    {/* Sign In Form */}
                    {activeTab === "signin" && (
                        <SignInCard />
                    )}

                    {/* Sign Up Form */}
                    {activeTab === "signup" && (
                        <SignUpCard setActiveTab={setActiveTab} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;