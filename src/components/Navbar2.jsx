import { useNavigate, NavLink } from "react-router-dom"
import Button from "./Button"
export default function NavbarLanding() {
    const navigate = useNavigate()
    return (
    
        <nav className="flex flex-wrap justify-between items-center fixed w-full bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 px-6 py-4 shadow-md z-50">
            <div className="flex gap-6 items-center text-white">
                <NavLink to="/Signup" className="text-2xl font-bold text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] hover:text-indigo-400 transition">Curion</NavLink>
                <NavLink to="/category" className="text-white hover:text-indigo-400 transition">Category</NavLink>
                <NavLink to="/pricing" className="text-white hover:text-indigo-400 transition">Pricing</NavLink>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
                {/* <button onClick={() => navigate("/signup")} className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition">Sign Up</button>
                <button onClick={() => navigate("/signin")} className="border border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-indigo-950 px-5 py-2 rounded-lg text-sm font-medium transition">Sign In</button> */}
                <button onClick={() => navigate("/signin")} className="text-white hover: px-5 py-2 rounded-lg bg-gradient-to-br from-indigo-600 via-25% to bg-indigo-400 hover:bg-indigo-700">Signup / Signin</button>
            </div>
        </nav>
    )
}