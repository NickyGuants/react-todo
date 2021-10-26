import React from "react";
import '../App.css';
import { useSelector, useDispatch} from 'react-redux'
import { removeTodo, is_Complete } from '../redux/actions/todosActions'


function Todo () {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className="todo">
                    <div className="group">
                        <div className="checkbox">
                            <input type="checkbox" onClick={()=>dispatch(is_Complete(todo.id))} />
                        </div>
                        <div className="text">
                            <p >{todo.title}</p>
                        </div>
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