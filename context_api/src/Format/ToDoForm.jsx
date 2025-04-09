import { useContext } from "react";
import { context } from "../context/ToDoContext";
import { useState } from "react";

function Top() {

    let [todo, setTodo] = useState("")
    let { addTodo } = useContext(context)
    function add(e) {
        if (!todo) return;
        e.preventDefault()
        addTodo({todo,completed:false})
        setTodo("")
    }
    return (
        <form onSubmit={add}>
            <input type="text"
                value={todo}
                onChange={(e) => e.currentTarget.value}
            />
            <button type="submit">add</button>
        </form>
    )


}
export default Top;