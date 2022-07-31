import React from "react";
import { TodoContext } from "../utils/TodoContext";

function TodoButton(){

    const {ModalValue,setModalValue} = React.useContext(TodoContext)

    const onClickButton = () => {
        setModalValue(!ModalValue);
    };

    return(
        <button 
            className="TodoButton"
            onClick={onClickButton}
        >
            X
        </button>
    );
};

export {TodoButton};