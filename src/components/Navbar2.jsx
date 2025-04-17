import { useNavigate, NavLink } from "react-router-dom"
import Button from "./Button"
export default function NavbarLanding() {
    const navigate = useNavigate()
    return (
        <nav className="flex flex-col md:flex-row items-center justify-between bg-black p-4 space-y-3 md:space-y-0 md:space-x-4">
            <div className="flex flex-col md:flex-row gap-4 text-white items-center">
                <NavLink to={"/Signup"}>Home</NavLink>
                <NavLink to={"/category"}>Category</NavLink>
                <NavLink to={"/"}>Pricing</NavLink>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
                <button onClick={() => navigate("/signup")} className="m-3 focus:outline-none text-gray-700 bg-slate-700 hover:bg-zinc-700 hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-300 dark:focus:ring-gray-200">Sign Up</button>
                <button onClick={() => navigate("/signin")} className="m-2 text-slate-300 hover:text-gray-700 border border-gray-700 hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-slate-300 dark:text-gray dark:hover:text-slate-300 dark:hover:bg-zinc-700 dark:focus:ring-slate-300">Sign In</button>
            </div>
        </nav>
    )
}