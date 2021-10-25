import Todo from '../../components/Todo'

import {ADD_TODO, REMOVE_TODO} from '../types'


export const addTodo = () =>{
    return {
        type: ADD_TODO,
        payload: Todo
    }
}

export const subtractCounter =() =>{
    return {
        type: REMOVE_TODO,
        payload: 1
    }
}