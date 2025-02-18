import { MyContext } from "./Mycontext";
import { useContext } from "react";
import React from "react";
function Button1() {
    const { count, setCount } = useContext(MyContext)
    return (
        <>
            <h1>helloe {count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                update </button>
        </>
    )
}
export default Button1