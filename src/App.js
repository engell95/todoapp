import React from "react";
import {TodoCounter,TodoSearch,CreateTodoButton,TodoItem,TodoList} from "./components";
import useLocalStorage from "./utils/useLocalStorage";

const DefaultTasks = [
  { key:1,text: 'Desarrollar app con react', completed: true },
  { key:2,text: 'Fortalezer conceptos de react', completed: false },
  { key:3,text: 'Conseguir un nuevo empleo', completed: false },
  { key:4,text: 'Renunciar', completed: false },
];

function App() {

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

  return (
    <React.Fragment>
      <TodoCounter 
        CompletedTask={CompletedTask}
        TasksCount={TasksCount}
      />
      <TodoSearch
        SearchValue={SearchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>Error en el renderizado</p>}
        {loading && <p>Renderizando</p>}
        {(!loading && !Tasks.length) && <p>¡Crea tu primer tarea!</p>}
        {TasksFilter.map(task => (
          <TodoItem key={task.key} text={task.text} completed={task.completed} OnDeleteTask={()=> deleteTask(task.key)} OncompleteTask={() => completeTask(task.key)}/>
        ))}
      </TodoList>
      <CreateTodoButton
        OnAddtask ={addtask}
      />
    </React.Fragment>
  );
}

export default App;