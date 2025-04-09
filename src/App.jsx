import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from './Pages/home'
import SignIn from './Pages/signin'
import SignUp from './Pages/Signup'
import Err from './Pages/Err';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/>
    <SignIn/>
    <SignUp/> */}
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='*' element={<Err/>}></Route>


    </Routes>
    </>
  )
}
export default App
