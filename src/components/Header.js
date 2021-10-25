import React from "react";
import '../App.css';
import Counter from "./Counter";

const Header = () =>{
    return (
        <header>
            <h1>My Todo List</h1>
            <Counter />
        </header>
    );
}

export default Header;