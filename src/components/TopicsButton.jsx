import { useState } from "react";

let count = 0;
let topics = [];
export default function TopicsButton({text, sendCountToParent, sendTopicsToParent}){
    const [clickStatus, setClickStatus] = useState(false);
    

     function handleChoice() {
        if (!clickStatus) {
            setClickStatus(true);
            sendCountToParent(prev => prev + 1);
            sendTopicsToParent(prev => [...prev, text]);
        } else {
            setClickStatus(false);
            sendCountToParent(prev => prev - 1);
            sendTopicsToParent(prev => prev.filter(item => item !== text));
        }
    }
    return(
        <button className={`border rounded-md transition duration-200  ${clickStatus ?  "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white" } `}  onClick={handleChoice}>{text}</button>
    )
}