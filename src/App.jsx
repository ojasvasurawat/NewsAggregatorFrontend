import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
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
import Profile from './Pages/Profile';
import Trending from './Pages/Trending';
import Latest from './Pages/Latest';
import MostViewed from './Pages/MostViewed';
import India from './Pages/India';
import Asia from './Pages/Asia';
import Africa from './Pages/Africa';
import Europe from './Pages/Europe';
import LatinAmerica from './Pages/LatinAmerica';
import MiddleEast from './Pages/MiddelEast';
import UsCanada from './Pages/UsCanada';
import TopicSelection from './Pages/TopicSelection';
import { ToastContainer, toast } from 'react-toastify';
import TopStories from './Pages/TopStories';
import Cancle from './Pages/Cancle';
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
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='*' element={<Err/>}></Route>
      <Route path='/pricing' element={<Pricing/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/home/success' element={<Success/>}></Route>
      <Route path='/home/cancle' element={<Cancle/>}></Route>
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
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/trending' element={<Trending/>}></Route>
      <Route path='/latest' element={<Latest/>}></Route>
      <Route path='/mostviewed' element={<MostViewed/>}></Route>
      <Route path='/india' element={<India/>}></Route>
      <Route path='/asia' element={<Asia/>}></Route>
      <Route path='/africa' element={<Africa/>}></Route>
      <Route path='/europe' element={<Europe/>}></Route>
      <Route path='/latinamerica' element={<LatinAmerica/>}></Route>
      <Route path='/middleeast' element={<MiddleEast/>}></Route>
      <Route path='/usandcanada' element={<UsCanada/>}></Route>
      <Route path='/topicselection' element={<TopicSelection/>}></Route>
      <Route path='/topstories' element={<TopStories/>}></Route>


    </Routes>
    <ToastContainer
    position='top-center'
    />
    </>
  )
}
export default App
