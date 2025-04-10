import { useContext } from "react";
import { context } from "../context/ToDoContext";
import { useState } from "react";

function Bottom(todo) {
    let [isTodoEditable, setIsTodoEditable] = useState(false)
    let [todoMsg, setTodoMsg] = useState(todo.todo)
    let { toggleCompleted, updateTodo, deleteTodo, } = useContext(context)

     editTodo=()=> {
        updateTodo(todo.id, { ...todo, todoMsg })
        setIsTodoEditable(false)

    }
     toggle=()=>{
toggleCompleted(todo.id)
    }
    return (
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}>
            <input type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.currentTarget.value)}
                readOnly={!isTodoEditable}
            />
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) {
                        editTodo();
                    }
                    else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}

            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );

}
export default Bottom;