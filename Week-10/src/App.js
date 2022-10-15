import "./styles.css";
import Inputshort from "./Inputshort.js";
import BackgroundAnimate from "./BackgroundAnimate.js";
import Linkresult from "./Linkresult.js";
import { useState } from "react";

export default function App() {
  const [inputValue, setinputValue] = useState("");
  return (
    <div className="App">
      <Inputshort setinputValue={setinputValue} />
      <BackgroundAnimate />
      <Linkresult inputValue={inputValue} />
    </div>
  );
}
