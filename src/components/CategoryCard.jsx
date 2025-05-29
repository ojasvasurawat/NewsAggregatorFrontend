import { useNavigate } from "react-router-dom";

export default function CategoryCard({ text, image }) {
    const navigate = useNavigate();
    const route = text.toLowerCase();
    return (<>
        <div className=" m-4 p-2  hover:shadow-[0_0_10px_#4A90E2] transition-all duration-300 text-black rounded-lg border
" onClick={()=>navigate(`/${route}`)}>
            <img src={image} alt="" className="m-3 mx-auto rounded-2xl  h-30" />
            <h1 className="  flex items-center justify-center text-2xl font-semibold ">
                {text}
            </h1>
        </div>
    </>)
}