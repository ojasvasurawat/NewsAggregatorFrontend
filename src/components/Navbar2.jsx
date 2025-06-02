import { useNavigate, NavLink } from "react-router-dom"

export default function NavbarLanding() {
    const navigate = useNavigate()
    return (
        <nav className=
        "flex flex-wrap justify-between items-center fixed w-full bg-gradient-to-br from-blue-900 to-purple-900 opacity-90 drop-shadow-[0_0_12px_rgba(36,12,143,0.7)] backdrop-blur-md px-1 md:px-6 py-4 shadow-sm z-50"
        >
            <div className="flex gap-3 md:gap-6 items-center text-gray-800">
                <NavLink to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition drop-shadow-[0_0_12px_rgba(36,12,143,0.9)]">Curion</NavLink>
                <NavLink to="/category" className="text-gray-300 hover:text-blue-500 transition">Category</NavLink>
                <NavLink to="/pricing" className="text-gray-300 hover:text-blue-500 transition">Pricing</NavLink>
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-3">
                <button onClick={() => navigate("/signin")} className="text-white px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-md hover:shadow-blue-200 transition-all hover:translate-y-[-2px]">Get Started</button>
            </div>
        </nav>
    )
}
