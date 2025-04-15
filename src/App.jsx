import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
// import Home from './Pages/home'
import Home from './Pages/Home';
import SignIn from './Pages/signin'
import SignUp from './Pages/Signup'
import Err from './Pages/Err';
import Landing from './Pages/Landing';
function App() {

  return (
    <>
    {/* <Home/>
    <SignIn/>
    <SignUp/> */}
    <Routes>

      <Route path='/' element={<Landing/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='*' element={<Err/>}></Route>


    </Routes>
    </>
  )
}
export default App
