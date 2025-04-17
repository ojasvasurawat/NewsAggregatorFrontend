import NewsGrid from "../components/NewsGrid";
import NavbarLanding from "../components/Navbar2";
import Category from "../components/Category";
import NavbarHome from "../components/Navbar";
// import { useNavigate } from "react-router-dom";
export default function Home(){
    return(<>
    <NavbarHome/>
    <Category/>
    <NewsGrid/>
    </>)
}