import { ChevronRight, Globe } from "lucide-react";

export default function WorldButton(){
    return(
        <>
            <div className="flex m-2">
                <Globe size={18}/>
                <span className="ml-2">World</span>
                <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90 items-end" />
            </div>
        </>
    )
}