import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import SignIn from "./Pages/signin";
import SignUp from "./Pages/Signup";
import ReactDOM from "react-dom/client";

export default function App(){
    return(<>
        <BrowserRouter>
            <Routes>
                <Route element={<Home.jsx/>} />
                <Route element={<SignIn.jsx/>} />
                <Route element={<SignUp.jsx/>} />
                
            </Routes>
        </BrowserRouter>
    </>)
}