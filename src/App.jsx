import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/Signup'
import Err from './Pages/Err';
import Landing from './Pages/Landing';
import Blog from './Pages/Blog';
import Pricing from './Pages/Pricing';
import Sports from './Pages/sports';
import Success from './Pages/Success';
import CategoryPage from './Pages/Category';
import Business from './Pages/Business';
import Science from './Pages/Science';
import Environment from './Pages/Environment';
import Technology from './Pages/Technology';
import Education from './Pages/Education';
import Entertainment from './Pages/Entertainment';
import Lifestyle from './Pages/Lifestyle';
import Astrology from './Pages/Astrology';
import Politics from './Pages/Politics';
import Health from './Pages/Health';
import Automobiles from './Pages/Automobiles';
// import { SVGMaskEffectDemo } from './Pages/HoverTest';
function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror:true,
      offset:100,
    });
  }, []);

  return (
    <>
  
    <Routes>

      <Route path='/' element={<Landing/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      {/* <Route path='/category'element={<SignUp/>}></Route> */}
      <Route path='*' element={<Err/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/category' element={<CategoryPage/>}></Route>
      <Route path='/sports' element={<Sports/>}></Route>
      <Route path='/business' element={<Business/>}></Route>
      <Route path='/science' element={<Science/>}></Route>
      <Route path='/environment' element={<Environment/>}></Route>
      <Route path='/technology' element={<Technology/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/entertainment' element={<Entertainment/>}></Route>
      <Route path='/lifestyle' element={<Lifestyle/>}></Route>
      <Route path='/astrology' element={<Astrology/>}></Route>
      <Route path='/politics' element={<Politics/>}></Route>
      <Route path='/health' element={<Health/>}></Route>
      <Route path='/automobiles' element={<Automobiles/>}></Route>


    </Routes>
    </>
  )
}
export default App
