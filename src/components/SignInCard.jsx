import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function SignInCard() {
    const navigate = useNavigate()
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
    
        const handleEmail = (e)=>{
            setEmail(e.target.value);
        };
        const handlePassword = (e)=>{
            setPassword(e.target.value);
        };
    
        const signin = async ()=>{
            console.log( email, password);
            await axios.post('http://localhost:8000/signin',{
            email,
            password
        }).then((response)=>{
            if(response){
                console.log(response.data);
                localStorage.setItem("authorization", response.data.token);
                navigate("/Home");
            }
        })
        }
    return (<>
        <div className="m-5 bg-white">
            <h1 className="text-4xl font-bold pb-2">Welcome back!</h1>
            <p className="pb-15">Enter your Credentials to access your account</p>
            <div>
                <p>Email Address</p>
                <input className="border-2 p-2 border-neutral-300 w-full rounded-lg" type="text" placeholder="Enter your email" onChange={handleEmail}/>
            </div>
            <div className="flex justify-between pt-4">
                <p>Password</p>
                <h1>Forgot password</h1>
            </div>
            <input className="border-2 p-2 border-neutral-300 w-full rounded-lg" type="text" placeholder="Enter your password" onChange={handlePassword}/>
            <div className="pt-4">
                <input className="" type="checkbox" />
                <span className="p-1">Stay signed in</span>
            </div>
            <div className="pt-4">
                <button onClick={signin} className="bg-black font-bold p-2 text-white rounded-xl hover:scale-105 duration-400 w-full">
                    Login
                </button>
            </div>
            <div className="flex items-center justify-center">
                <hr className="h-1 my-8 border-0 rounded-sm bg-neutral-200 w-full"></hr>
                <span className="absolute bg-white p-1">or</span>
            </div>
            {/* <div className="flex justify-between mt-10 mb-2">
                <button className="border-1 border-gray-300 rounded-xl p-2 flex hover:scale-106  duration-400 shadow-lg"><img src="src/assets/icons8-google 1.svg" className="pr-1"></img>Sign in with Google</button>
                <button className="border-1 border-gray-300 rounded-xl p-2 flex hover:scale-106 duration-400 shadow-lg"><img src="src/assets/apple.svg" className="pr-1"></img>Sign in with Apple</button>
            </div> */}
            <p className="flex justify-center mt-4">Don't have an account?
                <p className="text-blue-700 ml-4"><a href="/signup">SignUp</a>
                </p>
            </p>

        </div>

    </>)
}