import React from "react";
import TodoList from "./TodoList.js";

const Todo = ({ todos, setToDos }) => {
  return (
    <section>
      <table className="table">
        {todos.map((item) => (
          <TodoList
            todos={todos}
            setToDos={setToDos}
            text={item.text}
            EachItem={item}
          />
        ))}
      </table>
    </section>
  );
};

export default Todo;
