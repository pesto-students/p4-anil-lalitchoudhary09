import React from "react";

const form = ({ inputText, setInputText, todos, setToDos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault();
    if (!!inputText.trim()) {
      setToDos([
        ...todos,
        { id: Math.random() * 1000, text: inputText, completed: false }
      ]);
    }
    setInputText("");
  };
  return (
    <form className="todoForm">
      <input onChange={inputTextHandler} value={inputText}></input>
      <button onClick={addData}>Add</button>
    </form>
  );
};

export default form;
