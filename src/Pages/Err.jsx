import { useNavigate } from "react-router-dom"

export default function Err(){
    const navigate=useNavigate()
    return(<><div>
        <h1>Hello Mate check the URL</h1>
        <button onClick={()=>navigate("/landing")}>Home </button>

        </div></>)
}