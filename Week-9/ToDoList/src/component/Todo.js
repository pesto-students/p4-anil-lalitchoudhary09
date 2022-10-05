import React from "react";
import TodoList from "./TodoList.js";

const Todo = ({ todos, setToDos }) => {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoList
            todos={todos}
            setToDos={setToDos}
            text={item.text}
            EachItem={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
