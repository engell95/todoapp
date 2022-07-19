import React from "react";
/*import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {TodoItem} from "./components/TodoItem";
import {TodoList} from "./components/TodoList";*/
import {TodoCounter,TodoSearch,CreateTodoButton,TodoItem,TodoList} from "./components";

const todos = [
  {text:"cortar cebolla",completed:false},
  {text:"cortar tomates",completed:false},
  {text:"pagar la luz",completed:false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter counter="2" />
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
