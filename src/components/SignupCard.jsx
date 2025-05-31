import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import TopicsButton from "./TopicsButton";
const backendUrl = import.meta.env.VITE_BACKEND_URL;


export default function SignUpCard({ setActiveTab }) {

    const [name, setName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const dialogTriggerRef = useRef(null);
    const [countFromChild, setCountFromChild] = useState(0);
    const [topicsFromChild, setTopicsFromChild] = useState([]);
    const [buttonLoading, setButtonLoading] = useState(false);


    const handleSignup = async () => {
        setButtonLoading(true);
        if (signupPassword === "" || signupEmail === "" || name === "") {
            toast.warning("Enter the details");
            setButtonLoading(false)
            return;
        }
        if (signupPassword.length < 8 ) {
            toast.warning("Password must be at least 8 characters long.");
            setButtonLoading(false)
            return;
        }

        try {
            const response = await axios.post(`${backendUrl}/signup`, {
                name: name,
                email: signupEmail,
                password: signupPassword
            });

            if (response.data) {
                toast.success("Account created successfully");
                dialogTriggerRef.current.click();
            }
        } catch (error) {
            console.error("Signup failed:", error);
            if (error.response?.data?.message) {
                setButtonLoading(false)
                toast.error(`Signup failed: ${error.response.data.message}`);
            } else {
                setButtonLoading(false)
                toast.error("Signup failed: Unknown error occurred");
            }
        }
    };

    function handleCountFromChild(count) {
        setCountFromChild(count);
        console.log(countFromChild);
    }

    function handleTopicsFromChild(topics) {
        setTopicsFromChild(topics);
        console.log(topicsFromChild);
    }

    async function transferData(){
        try {
            await axios.post(`${backendUrl}/topics`, {
                email: signupEmail,
                topics: topicsFromChild
            });

            setActiveTab("signin");
        } catch (err) {
            console.log("the error is : ",err);
        }
    }


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
                className={`w-full py-3 px-4  text-white font-medium rounded-lg transition duration-200 ${buttonLoading ? ("bg-blue-100 active:bg-blue-100") : ("bg-blue-600 hover:bg-blue-900")} `}
            >
                {buttonLoading ? ("Wait") : ("Create Account")}
            </button>

            <AlertDialog>
            <AlertDialogTrigger ref={dialogTriggerRef}></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl">Welcome To Curion</AlertDialogTitle>
                <AlertDialogDescription>
                    Follow what interests you to personalize Curion. Follow at least 3 topics before continuing 
                </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="grid grid-cols-3 gap-5 my-5">
                    <TopicsButton text="Business" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Politics" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Science" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Sports" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Technology" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Automobiles" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Entertainment" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Health" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Lifestyle" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Education" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Environment" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                    <TopicsButton text="Astrology" sendCountToParent={handleCountFromChild} sendTopicsToParent={handleTopicsFromChild} /> 
                </div>
                <AlertDialogFooter >
                <AlertDialogAction className={`text-xs md:text-base w-1/2 bg-blue-300 hover:bg-blue-600 ${countFromChild>=3 ? "bg-blue-600 hover:bg-blue-900" : ""}`} onClick={countFromChild>=3 && transferData }>Follow 3 to continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>


        </div>
    </>)
}