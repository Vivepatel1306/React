// import { useContext } from "react";
// import { Context1 } from "./Context";
// import React from "react";
// function Box() {
//     const { bgColor, setBgcolor, textColor, setTextcolor } = useContext(Context1)
//     function ChangeBgColor() {
//         bgColor == "bg-white" ? setBgcolor("bg-black") : setBgcolor("bg-white");
//     }
//     function ChnageTextColor() {
//         textColor == "text-black" ? setTextcolor("text-white") : setTextcolor("text-black");
//     }
//     return (
//         <>
//             <div
//                 className={`h-20 w-48 ${bgColor} border-solid`}
//              >
//                 <h1 className={`${textColor}`}>hello</h1>
//             </div>
//             {/* <p>bg-{bgColor}</p>
//             <p>hh{textColor}</p> */}

//             <button onClick={() => {
//                 ChangeBgColor()
//                 ChnageTextColor()
//             }} >button</button>
//         </>
//     )
// }
// export default Box


import React from "react";
import { useState } from "react";

const Box = ()=>{

    const [changer , setChange] = useState(true)
    return (
        <>
        <div id="container" className={` w-[70vw] h-[100vh] border bg-white`}>
            <div id="box" className={` w-[50%] h-[50%] m-auto border border-blue-900 mt-16 ${changer?" bg-green-900":"bg-white"}`}>
                <h1 className={`${changer?"text-yellow-500":"text-black"} `}>This is s heding</h1>
            </div>
            <button className="border border-green-700 w-20 h-15 mt-5 text-black"
            onClick={()=>setChange(!changer)}
            >
                Tab
            </button>
        </div>
        </>
    )
}

export default Box