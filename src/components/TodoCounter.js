import react from "react";

function TodoCounter(props){
    return(
        <react.Fragment>
            <h2 className="TodoCounter">Has completado {props.CompletedTask} de {props.TasksCount} tareas</h2>
        </react.Fragment>
    );
};

export {TodoCounter};
