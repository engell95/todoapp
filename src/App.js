import React from "react";
import {AppUI} from "./utils/AppUI";
import { TodoProvider } from './utils/TodoContext';

const DefaultTasks = [
  { key:1,text: 'Desarrollar app con react', completed: true },
  { key:2,text: 'Fortalezer conceptos de react', completed: false },
  { key:3,text: 'Conseguir un nuevo empleo', completed: false },
  { key:4,text: 'Renunciar', completed: false },
];

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;