import React from "react";
import { TodoContext } from "../utils/TodoContext";

function TodoSearch(){

    const {SearchValue,setSearchValue} = React.useContext(TodoContext);

    const Search = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder='Tarea'
            value={SearchValue}
            onChange={Search}
        />
    );
};

export {TodoSearch};