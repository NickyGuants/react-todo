import React from "react";
import '../App.css';

const Todo = () =>{
    return (
        <div className="todo-container">
           <div className="checkbox">
               <input type="checkbox" />
           </div>
           <div className="text">
               <p>Todo Item</p>
           </div>
           <div className="delete-button">
               <button>Delete</button>
           </div>
        </div>
    );
}

export default Todo;