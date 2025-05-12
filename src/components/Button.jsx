export default function Button({text}){
    return(<>
    <button onClick={() => navigate("/signup")} className="m-3 focus:outline-none text-gray-200 bg-black hover:border-slate-300 hover:bg-zinc-700 hover:text-slate-300 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:focus:ring-gray-200 ease-linear">{text}</button>
    </>)
}
