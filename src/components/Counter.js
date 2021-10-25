import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addCount, subtractCount} from '../redux/actions/counterActions'

function Counter() {
    const counter =useSelector((state)=> state.counter);
    const dispatch = useDispatch();

    
    return(
        <div>
            <button onClick={()=> dispatch(addCount())}>+</button>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(subtractCount())}>-</button>
        </div>
    )
}

export default Counter;