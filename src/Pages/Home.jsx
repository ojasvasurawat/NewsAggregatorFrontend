import NewsGrid from "../components/NewsGrid";
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