import { useContext } from "react";
import { Mycontext } from "./CreateContext";
function Show() {
    const { name, setName ,displayname} = useContext(Mycontext)
    return (
        <>
            
            <h1>Welcme {displayname} </h1>
        </>
    )
}
export default Show