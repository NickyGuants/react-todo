import React from "react";
import { useSelector} from 'react-redux'

function Counter() {
    const todos = useSelector((state) => state.todos);
    let complete_todos=[];
    todos.map((todo) =>{
        if(todo.is_complete===true){
            complete_todos.push(todo);
        }
        return todo
    })

    return(
        <div>
           <h1>Total Complete Items: {complete_todos.length}</h1>
        </div>
    )
}

export default Counter;