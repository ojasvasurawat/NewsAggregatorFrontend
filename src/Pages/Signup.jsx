import SignUpCard from "../components/SignupCard"

export default function SignUp() {
    return (<>
        <div className ="flex m-0 p-0  ">
            <div className=" w-dvw h-dwh"><SignUpCard/></div>
            <div className=" w-dvw h-dvh overflow-hidden">
                <img className="" src="src/assets/abstract.svg" alt="" />
            </div>
        </div>
    </>)
}