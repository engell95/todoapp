import React from "react";
import {TodoCounter,TodoSearch,TodoButton,TodoItem,TodoList,TodoAdd,TodoError,TodoEmpty,TodoLoading} from "../components";
import {TodoContext} from "./TodoContext";
import {Modal} from "./Modal"

function AppUI() {

    const {
        loading,
        error,
        TasksFilter,
        Tasks,
        completeTask,
        deleteTask,
        ModalValue,windowSize} = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <TodoError msg="Error en el renderizado"/>}
                {loading && <TodoLoading windowSize={windowSize}/>}
                {(!loading && !Tasks.length) && <TodoEmpty msg={"¡Crea tu primer tarea!"}/>}
                {TasksFilter.map(task => (
                    <TodoItem key={task.key} text={task.text} completed={task.completed} OnDeleteTask={()=> deleteTask(task.key)} OncompleteTask={() => completeTask(task.key)}/>
                ))}
            </TodoList>
            <TodoButton/>
            {(!!ModalValue) &&
                <Modal>
                    <TodoAdd/>
                </Modal>
            }
        </React.Fragment>
    );
};

export { AppUI };