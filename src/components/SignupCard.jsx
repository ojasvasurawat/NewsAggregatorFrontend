import { useNavigate } from "react-router-dom"

export default function SignUpCard(){
    const navigate=useNavigate()
    return(<>
    <div className="m-40">
            <h1 className="text-4xl font-bold pb-2">Welcome back!</h1>
            <p className="pb-15">Enter your Credentials to access your account</p>
        <div>
            <p>Email address</p>
            <input className="border-2 border-neutral-300 rounded-lg w-full" type="text" />
        </div>
        <div className="flex justify-between pt-4">
            <p>password</p>
            <p>forogot password</p>
        </div>
        <input className="border-2 border-neutral-300 rounded-lg w-full" type="text" />
        <div className="pt-4">
        
            <input className="" type="checkbox" />
            <span className="p-1">remember for 30 days</span>
        </div>
        <div className="pt-4">
            <button onClick={()=>navigate("/Home")} className="bg-green-800 font-bold p-2 text-white rounded-xl hover:bg-green-600 w-full">
                Signup
            </button>
        </div>
        <div className="flex items-center justify-center">
        <hr className="h-1 my-8 border-0 rounded-sm bg-neutral-200 w-full"></hr>
        <span className="absolute bg-white p-1">or</span>
        </div>
        <div className="flex justify-between mt-10 mb-2">
            <button className="border-2 rounded-xl p-2 flex hover:scale-103 shadow-lg"><img src="src/assets/icons8-google 1.svg" className="pr-1"></img>Sign in with Google</button>
            <button className="border-2 rounded-xl p-2 flex hover:scale-103 shadow-lg"><img src="src/assets/icons8-apple-logo 1.svg" className="pr-1"></img>Sign in with Apple</button>
        </div>
        <p className="flex justify-center mt-4">Already have an account? kgdfsui
            <p className="text-blue-700 ml-4">
            <a href="/signin">SignIn</a>
            </p>
        </p>
        
    </div>
    
    </>)
}