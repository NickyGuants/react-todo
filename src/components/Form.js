import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todosActions";
import '../App.css';

function Form () {
    const [title, setTitle] =useState("");
    const dispatch = useDispatch();

    const todoItem={
        id: Math.floor(Math.random()*100000),
        title,
        is_complete: false,
    }

    const addingTodo= (e) =>{
        e.preventDefault();
        dispatch(addTodo(todoItem));
        setTitle("");
    };

    return (
        <div className="form-container">
            <div className="form">
                <form onSubmit={addingTodo}>
                    <input type="text" 
                    placeholder="Add todo..."  
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;