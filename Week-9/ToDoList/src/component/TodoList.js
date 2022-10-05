import React from "react";

const TodoList = ({ todos, setToDos, text, EachItem }) => {
  const TrashHandler = () => {
    console.log(EachItem);
    setToDos(
      todos.filter((item) => {
        if (item.id !== EachItem.id) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  const completeHandler = () => {
    setToDos(
      todos.map((item) => {
        if (item.id === EachItem.id) {
          return { ...item, completed: !EachItem.completed };
        }
        return item;
      })
    );
  };

  return (
    <li className="list">
      <span
        className={`list__todoText  ${EachItem.completed ? "completed" : " "}`}
      >
        {text}
      </span>
      <button className="btn btnComplete" onClick={completeHandler}>
        Complete
      </button>
      <button className="btn btnTrash" onClick={TrashHandler}>
        Trash
      </button>
    </li>
  );
};

export default TodoList;
