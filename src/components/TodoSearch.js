import React from "react";

function TodoSearch(props){

    const Search = (event) => {
        props.setSearchValue(event.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder='Tarea'
            value={props.SearchValue}
            onChange={Search}
        />
    );
};

export {TodoSearch};