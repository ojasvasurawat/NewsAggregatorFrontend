import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ text, image }) {
    const navigate = useNavigate();
    // const call =async ()=>{
    //     await axios.get(`http://localhost:8000/${text}`,{
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'authorization': localStorage.getItem('authorization')
    //         }
    //     }).then((response)=>{
    //         if(response){
    //             console.log(response.data);
    //             navigate(`/${text}`);
    //         }
    //     })
    // }
    return (<>
        <div className=" m-4 p-2 hover:bg-[#2F2F44] hover:shadow-[0_0_10px_#4A90E2] transition-all duration-300 text-[#E6E6FA]
               bg-[#1B1B29] relative group/card   dark:border-white/[0.2] border-black/[0.1] rounded-lg  border
" onClick={()=>navigate(`/${text}`)}>
            <img src={image} alt="" className="m-3 mx-auto rounded-2xl filter invert h-30" />
            <h1 className="  flex items-center justify-center text-2xl font-semibold ">
                {text}
            </h1>
        </div>
    </>)
}