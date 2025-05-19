import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'

export default function SignUpCard({ setActiveTab }) {

    const [name, setName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);


    const handleSignup = async () => {
        if (signupPassword === "" || signupEmail === "" || name === "") {
            toast.warning("Enter the details");
            return;
        }
        if (signupPassword.length < 8 ) {
            toast.warning("Password must be at least 8 characters long.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                name: name,
                email: signupEmail,
                password: signupPassword
            });

            if (response.data) {
                toast.success("Account created successfully");
                

                setActiveTab("signin");
            }
        } catch (error) {
            console.error("Signup failed:", error);
            if (error.response?.data?.message) {
                toast.error(`Signup failed: ${error.response.data.message}`);
            } else {
                toast.error("Signup failed: Unknown error occurred");
            }
        }
    };


    return (<>
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Get Started Now</h2>
            <p className="text-gray-600">Create your account and start exploring</p>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your full name"
                    />
                </div>

                <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="signup-email"
                        type="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        id="signup-password"
                        type="password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Create a strong password"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        id="agree-terms"
                        type="checkbox"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                    </label>
                </div>
            </div>

            <button
                onClick={handleSignup}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-lg transition duration-200 "
            >
                Create Account
            </button>

        </div>
    </>)
}