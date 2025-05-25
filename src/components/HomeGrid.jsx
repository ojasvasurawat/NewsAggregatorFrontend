import axios from "axios";
import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";

export default function HomeGrid(){
    const [topics, setTopics] = useState([]);

    useEffect(()=>{
        const fun = async ()=>{
            await axios.get(`http://localhost:8000/info`,{
            headers:{
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('authorization')
            }
        }).then((response)=>{
            if(response){
                console.log("we got response");
                setTopics(response.data.user.topics);
            }else{
                console.log("no response from get info")
            }
        })
        }

        fun();
    },[])

    console.log(topics);

    return(<>
    <div className="ml-7">
    <div>Home</div>
        <HomeCard text="Top Stories"/>
        {topics.map((item, index)=>{
            return(
            <div key={index} >
            <HomeCard text={item}/>
            </div>
            )
        })}
    </div>
    </>)
}