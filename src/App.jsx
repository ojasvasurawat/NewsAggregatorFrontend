import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import SignIn from './Pages/SignIn'

import SignUp from './Pages/Signup'
import Err from './Pages/Err';
import Landing from './Pages/Landing';
import Blog from './Pages/Blog';
import Pricing from './Pages/PRicing';
function App() {

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

    </Routes>
    </>
  )
}
export default App
