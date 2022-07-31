import React from "react";
import { TodoContext } from "../utils/TodoContext";

function CreateTodoButton(){

    const {addtask} = React.useContext(TodoContext)

    return(
        <button 
            className="CreateTodoButton"
            onClick={addtask}
        >
            X
        </button>
    );
};

export {CreateTodoButton};