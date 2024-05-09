// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Child from "./Child";


const Data=[{
    icon:"fa-solid fa-phone",
    title: "Fully Responsive",
    text: "This theme will look great on any device, no matter the size!",
   
  },
  {
    icon:"fa-solid fa-window-maximize",
    title: "Bootstrap 5 Ready",
    text: "This theme is built with the latest Bootstrap 5 framework!",
   
  },
  {
    icon:"fa-solid fa-users",
    title: "Easy to Use",
    text: "This theme is easy to use and customize. You can modify the colors to fit your needs.",
    
  }]
export default function Parent(){
   const [name]=useState(Data);
   return (
    
    
               <>
                {name.map((val, i) => (
                <Child
                    key={val.title}
                    index={i}
                    {...val}
                    Icon={<i className={val.icon}></i>}
                />
            ))}  
               </>
                   
              
                
           
    
     
   )

}