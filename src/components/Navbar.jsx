import Newscard from "./Newscard";

export default function Navbar(){
    return(<>
    <nav className="font-inter mt-0.5 bg-green-100 flex gap-2" > 
        <div className="p-4 text-lg text-neutral-600">home</div>
        <div className="p-4 text-lg text-neutral-600">profile</div>
        <div className="p-4 text-lg text-neutral-600">tags ▾</div>
        <div className="p-4 text-lg text-neutral-600">pricing</div>
        </nav>
    </>)
}