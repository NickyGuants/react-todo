import React from "react";
import Todo from "./Todo";
import '../App.css';

const TodoList = ()=>{
    return (
        <div className="todoList">
                <Todo />
                <Todo />
        </div>
    )
}

export default TodoList;