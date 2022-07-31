import React from "react";
import {TodoCounter,TodoSearch,CreateTodoButton,TodoItem,TodoList} from "../components";
import { TodoContext } from "./TodoContext";

function AppUI() {

    const {
        loading,
        error,
        TasksFilter,
        Tasks,
        completeTask,
        deleteTask} = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
            {error && <p>Error en el renderizado</p>}
            {loading && <p>Renderizando</p>}
            {(!loading && !Tasks.length) && <p>¡Crea tu primer tarea!</p>}
            {TasksFilter.map(task => (
                <TodoItem key={task.key} text={task.text} completed={task.completed} OnDeleteTask={()=> deleteTask(task.key)} OncompleteTask={() => completeTask(task.key)}/>
            ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    );
};

export { AppUI };