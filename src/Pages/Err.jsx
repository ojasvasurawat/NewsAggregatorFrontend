import { useNavigate } from "react-router-dom"


export default function Err(){
    const navigate=useNavigate()
    return(
    <>
    <div className="bg-black h-dvh text-white text-center overflow-hidden pt-80">
        <h2 className="text-3xl ">Hello, Mate check the url</h2>
         <h1 className="text-9xl animate__backInDown ">ERROR 404</h1>
     
        <button className="border m-5 p-2 rounded-xl hover:text-amber-50"
         onClick={()=>navigate("/")}>
            Take me to Landing Page
        </button>
    </div>
    
    </>
    )
}

