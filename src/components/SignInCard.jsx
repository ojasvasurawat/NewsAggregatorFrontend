import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function SignInCard() {
    
    // </>) <div className="space-y-6">
    const [signinEmail, setSigninEmail] = useState("");
    const [signinPassword, setSigninPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()

    const handleSignin = async () => {

        if (signinPassword === "" || signinEmail === "" ) {
            toast.warning("Enter the details");
            return;
        }

        // try {
            const response = await axios.post(`${backendUrl}/signin`, {
                email: signinEmail,
                password: signinPassword
            });
                // console.log(response.data.user.name);
                
            if (response.data.token) {
                localStorage.setItem("authorization", response.data.token);
                toast.success(`Welcome, ${response.data.user.name}`);
                navigate("/home");
            }
            else{
                toast.error("Login Failed")
            }
        // } 
        // catch (error) {
            
        //     toast.error("Login failed:", error)
       
        // }
    };


    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-600">Enter your credentials to access your account</p>

            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={signinEmail}
                        onChange={(e) => setSigninEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <div className="flex justify-between mb-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <input
                        id="password"
                        type="password"
                        value={signinPassword}
                        onChange={(e) => setSigninPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Stay signed in
                    </label>
                </div>
            </div>

            <button
                onClick={handleSignin}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-lg transition duration-200"
            >
                Sign In
            </button>
        </div>
    )
}