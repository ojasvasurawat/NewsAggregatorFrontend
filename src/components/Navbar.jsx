import { NavLink } from "react-router-dom";

export default function NavbarHome() {
    return (<>
        <nav className="font-inter bg-black flex justify-between p-4" >
            <div className="text-white  flex gap-5">
                <NavLink className="text-3xl" to={"/home"}>BLIp</NavLink>
                <NavLink className="mt-1" to={"/home"}>Top News</NavLink>
                <NavLink className="mt-1" to={"/home"}>Category ▼ </NavLink>
            </div>

            <div className="text-white mt-1">
                <NavLink to={"/home"}>Profile ▼ </NavLink>
                
            </div>
        </nav>
    </>)
}