import React from "react";

function TodoError(props){
    return (
        <label className="LabelError">{props.msg}</label>
    );
}

export {TodoError}