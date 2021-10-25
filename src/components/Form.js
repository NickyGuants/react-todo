import React, {useState} from "react";
import { useDispatch } from "react-redux";
import '../App.css';

function Form () {
    const [title, setTitle] =useState("");
    const dispatch = useDispatch();

    const todoItem={
        id: Math.floor(Math.random()*100000),
        title,
    }

    const addTodo= e =>{
        e.preventDefault();
        dispatch(addTodo(todoItem));
    }

    return (
        <div className="form-container">
            <div className="form">
                <form onSubmit={addTodo}>
                <input type="text" 
                placeholder="Add todo..."  
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
                />
                <button onClick={addTodo}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;