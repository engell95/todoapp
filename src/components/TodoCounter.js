import react from "react";
import { TodoContext } from "../utils/TodoContext";

function TodoCounter(){

    const {CompletedTask,TasksCount} = react.useContext(TodoContext);

    return(
        <react.Fragment>
            <h2 className="TodoCounter">Has completado {CompletedTask} de {TasksCount} tareas</h2>
        </react.Fragment>
    );
};

export {TodoCounter};
