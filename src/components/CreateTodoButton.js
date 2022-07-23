import React from "react";

function CreateTodoButton(props){

    return(
        <button 
            className="CreateTodoButton"
            onClick={props.OnAddtask}
        >
            X
        </button>
    );
};

export {CreateTodoButton};