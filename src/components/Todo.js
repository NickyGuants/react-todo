import React from "react";
import '../App.css';
import { useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../redux/actions/todosActions'


function Todo () {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className="todo">
                    <div className="checkbox">
                        <input type="checkbox" id="complete" name="complete" />
                    </div>
                    <div className="text">
                        <p >{todo.title}</p>
                    </div>
                    <div id="delete-button">
                        <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
                    </div>
                </div>
            ))}
        </div> 
    );
}

export default Todo;