import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from 'axios';

export default function SignUpCard() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e)=>{
        setName(e.target.value);
    };
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };

    const signup = async ()=>{
        console.log(name, email, password);
        await axios.post('http://localhost:8000/signup',{
        name,
        email,
        password
    }).then((response)=>{
        if(response){
            console.log(response.data);
            navigate("/Signup");
        }
    })
    }
   

    return (<>
        <div className="m-10 px-5 bg-white">
            <h1 className="text-4xl font-bold pb-2 pt-4 my-7">Get Started Now</h1>

            <div className="flex justify-between">
                <div>
                    <p>Name</p>
                    <input className="border-2 p-2 border-neutral-300 w-70 rounded-lg" placeholder="Enter Your Name" type="text" onChange={handleName} />
                </div>
                {/* <div>
                    <h1>Last Name</h1>
                    <input className="border-2 p-2 border-neutral-300 w-full rounded-lg" placeholder="Enter Your Last Name" type="text" />
                </div> */}
            </div>

            <div className="mt-4 mb-0">
                <h1>Email Address</h1>
                <input className="border-2 p-2 border-neutral-300 w-full rounded-lg" placeholder="Enter your email" type="text" onChange={handleEmail}/>
            </div>
            <div className="mt-4 mb-0">
                <h1>Password</h1>
                <input className="border-2 p-2 border-neutral-300 w-full rounded-lg" placeholder="Create your password" type="text" onChange={handlePassword}/>
            </div>
            {/* <div className="flex justify-between pt-4">
                <p>Confirm Password</p>
            </div>
            <input className="border-2 p-2 border-neutral-300 w-full rounded-lg" placeholder=" Re-enter your Password" type="text" /> */}
            <div className="pt-4">
                {/* <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="hidden peer" />
                    <div className="w-5 h-5 border-2 rounded-sm peer-checked:bg-black peer-black:border-white transition-all duration-200"></div>
                    <span className="ml-2">I agree to terms & conditions.</span>
                </label> */}
                <input id="black-checkbox" className="text-black" type="checkbox" />
                <label for="red-checkbox" class="ms-2 text-sm font-medium text-black">I agree to terms & conditions.</label>
            </div>
            <div className="pt-4">
                <button onClick={signup} className="bg-black font-bold p-2 text-white rounded-xl hover:bg-gray-700 w-full">
                    Create My Account
                </button>
            </div>
            <div className="flex items-center justify-center">
                <hr className="h-1 my-8 border-0 rounded-sm bg-neutral-200 w-full"></hr>
                <span className="absolute bg-white p-1">or</span>
            </div>
            {/* <div className="flex justify-between mt-10 mb-2">
                <button className="border-1 border-gray-300 rounded-xl p-2 flex hover:scale-110 shadow-lg duration-400"><img src="src/assets/icons8-google 1.svg" className="pr-1"></img>Sign in with Google</button>

                <button className="border-1 border-gray-300 rounded-xl p-2 flex hover:scale-110 shadow-lg duration-400"><img src="src/assets/apple.svg" className="pr-1"></img>Sign in with Apple</button>
            </div> */}
            <p className="flex justify-center mt-4">Have an account?
                <p className="text-blue-700 ml-4">
                    <a href="/signin">SignIn</a>
                </p>
            </p>
        </div>
    </>)
}