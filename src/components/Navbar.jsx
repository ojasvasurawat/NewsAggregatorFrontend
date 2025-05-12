import { NavLink } from "react-router-dom";

export default function NavbarHome() {
    return (<>
        <nav className="flex flex-wrap justify-between items-center fixed w-full bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 px-6 py-4 mt-0 z-50">
            <div className="flex gap-6 items-center text-white">
                <NavLink to="/Signup" className="text-2xl font-bold text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] hover:text-indigo-400 transition">Curion</NavLink>
                <NavLink to="/category" className="text-white hover:text-indigo-400 transition">Category</NavLink>
                <NavLink to="/" className="text-white hover:text-indigo-400 transition">Pricing</NavLink>
            </div>

            <div className="text-white mt-1">
                <NavLink to={"/home"}>Profile ▼ </NavLink>
                
            </div>
        </nav>
    </>)
}