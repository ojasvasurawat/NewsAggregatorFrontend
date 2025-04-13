import SignInCard from "../components/SignInCard"
// import { useNavigate } from "react-router-dom"

export default function SignIn() {
    // const navigate=useNavigate()
    return (<>
        <div className="flex m-0 p-0  ">
            <div className=" w-dvw h-dvh overflow-hidden ">
                <img src="src/assets/abstract.svg" alt="" />
            </div>
            <div className=" w-dvw h-dwh"><SignInCard /></div>
        </div>
    </>)
}