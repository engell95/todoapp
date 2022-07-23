import React from "react";

function TodoItem(props){

  const CompleteTodo = () =>{
    props.OncompleteTask();
    alert("tarea completada");
  };

  const DeleteTodo = () =>{
    props.OnDeleteTask();
    alert("tarea eliminada");
  };

  return(
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={CompleteTodo}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={DeleteTodo}
      >
        X
      </span>
    </li>
  );
};

export { TodoItem };
