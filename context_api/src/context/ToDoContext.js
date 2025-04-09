import { createContext } from "react";

export let context = createContext({
    todos: [{
        id: 1,
        todo: "I am",
        completed: false
    }],
    addTodo: (id) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleCompleted: (id) => { }

})
// export let useTodo=()=>{
//     return useContext(context)
// }
// export let TodoProvider=context.Provider