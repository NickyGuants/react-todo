import React from "react";


const Form = () =>{
    return (
        <div className="form-container">
            <div className="form">
                <input type="text" placeholder="Add todo..." />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Form;