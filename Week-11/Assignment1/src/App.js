import "./styles.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import flip from "./actions/index.js";

export default function App() {
  const myState = useSelector((state) => state.onOff);
  console.log(myState);
  const dispatch = useDispatch();

  const flipLight1 = () => {
    dispatch(flip());
  };

  const lightedness = myState ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight1}>flip</button>
    </div>
  );
}
