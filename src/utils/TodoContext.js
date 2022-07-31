import React from "react";
import useLocalStorage from "./useLocalStorage";

// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext();


function TodoProvider(props){

    // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
    const 
    {
      item :Tasks,
      saveItem :savetask,
      loading,
      error
    } = useLocalStorage('Task', []);
    const [SearchValue,setSearchValue] = React.useState('');
  
    const CompletedTask = Tasks.filter(task => !!task.completed).length;
    const TasksCount = Tasks.length;
  
    let TasksFilter = [];
  
    if(!SearchValue.length >= 1){
      TasksFilter = Tasks;
    }else{
      TasksFilter = Tasks.filter(task =>{
        const tasktext = task.text.toLowerCase();
        const searchtext = SearchValue.toLocaleLowerCase();
        return tasktext.includes(searchtext);
      });
    };
  
    const completeTask = (key) =>{
      const TaskIndex = Tasks.findIndex( task => task.key == key);
      const NewTasks = [...Tasks]; 
      NewTasks[TaskIndex].completed = true;
      savetask(NewTasks);
    };
  
    const deleteTask = (key) =>{
      const NewTasks = Tasks.filter( task => task.key != key);
      savetask(NewTasks);
    };
  
    const addtask =()=>{
      if(!SearchValue.length >= 1){
        alert('ingrese la tarea para almacenar');
      }
      else{
        const Newtask = { key:TasksCount + 1,text: SearchValue, completed: false };
        savetask([...Tasks,Newtask]);
        setSearchValue('');
      }
    }

     // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, 
     //que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            TasksCount,
            CompletedTask,
            SearchValue,
            setSearchValue,
            TasksFilter,
            Tasks,
            completeTask,
            deleteTask,
            addtask
          }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

// Exportamos nuestro proveedor y 
//nuestro contexto, en el context también esta el consumer
//, para acceder a nuestro contexto
export { TodoContext, TodoProvider };

