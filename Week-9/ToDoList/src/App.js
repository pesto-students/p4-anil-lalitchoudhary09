import "./styles.css";
import Form from "./component/Form.js";
import { useState } from "react";
import Todo from "./component/Todo.js";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setToDos={setToDos}
        />
        <Todo todos={todos} setToDos={setToDos} />
      </div>
    </div>
  );
}
