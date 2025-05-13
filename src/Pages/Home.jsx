import NewsGrid from "../components/NewsGrid";
import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
export default function Home(){
    return(<>
    <div className="bg-[#141421]">
    <NavbarHome/>
    <NewsGrid/>
    </div>
    </>)
}