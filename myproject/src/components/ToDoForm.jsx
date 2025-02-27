import React, { useState } from "react";
import { useTodo } from "../context/ToDoContext";

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }
    return (
        <form onSubmit={add} >
            <input type="text"
                placeholder="Write input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}

            />
            <button type="submit">add</button>


        </form>
    )

}
export default TodoForm;