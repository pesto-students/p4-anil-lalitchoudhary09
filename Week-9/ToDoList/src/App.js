import "./styles.css";
import AddTodo from "./component/AddTodo.js";
import { useState } from "react";
import Todo from "./component/Todo.js";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  return (
    <div className="App">
      <header className="header">
        <h1>Todo List</h1>
      </header>
      <main className="container">
        <AddTodo
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setToDos={setToDos}
        />
        <Todo todos={todos} setToDos={setToDos} />
      </main>
    </div>
  );
}
