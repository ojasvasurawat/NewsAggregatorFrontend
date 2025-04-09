import SignInCard from "../components/SignInCard"
// import { useNavigate } from "react-router-dom"

export default function SignIn() {
    // const navigate=useNavigate()
    return (<>
        <div className ="flex m-0 p-0  ">
            <div className=" w-dvw h-dwh"><SignInCard/></div>
            <div className=" w-dvw h-dvh overflow-hidden rounded-4xl"><img  src="src/assets/chris-lee-70l1tDAI6rM-unsplash 1.svg" alt="" /></div>
        </div>
    </>)
}