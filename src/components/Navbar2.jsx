import { useNavigate, NavLink } from "react-router-dom"

export default function NavbarLanding() {
    const navigate = useNavigate()
    return (
        <nav className=
        "flex flex-wrap justify-between items-center fixed w-full bg-gradient-to-tr to-blue-300 via-indigo-300 from-purple-300 drop-shadow-[0_0_12px_rgba(36,12,143,0.7)] backdrop-blur-md px-6 py-4 shadow-sm z-50"
        >
            <div className="flex gap-6 items-center text-gray-800">
                <NavLink to="/Signin" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition">Curion</NavLink>
                <NavLink to="/signin" className="text-gray-700 hover:text-blue-500 transition">Category</NavLink>
                <NavLink to="/signin" className="text-gray-700 hover:text-blue-500 transition">Pricing</NavLink>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
                <button onClick={() => navigate("/signin")} className="text-white px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-md hover:shadow-blue-200 transition-all hover:translate-y-[-2px]">Get Started</button>
            </div>
        </nav>
    )
}
