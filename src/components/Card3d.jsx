import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-cardSource.jsx"; 

const ThreeDCardDemo = ({text1,text2}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gradient-to-br from-indigo-950 via-[#0f0f1a] to-indigo-950 border-white/[0.2] border-black/[0.1] w-100  h-50 rounded-xl p-6 border"
      >
        <CardItem
          translateZ="70"
          className="text-xl font-bold text-indigo-300"
        >
          {text1}
        </CardItem>
        <CardItem
          as="p"
          translateZ="80"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {text2}
        </CardItem>
        {/*<CardItem translateZ="100" className="w-full mt-4">
           <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> 
        </CardItem>*/}
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="a"
            href=""
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            
          </CardItem>
          {/* <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem> */}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
