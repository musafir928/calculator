import React, { useState } from "react";
import Buttons from "./components/buttons";
import Input from "./components/input";
import "./App.css";

function App() {
  const [target, setTarget] = useState("");
  const [last, setLast] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    let newText;
    const btn = e.target.value;

    if (Number(btn) <= 9 && Number(btn) >= 0 && last) {
      setTarget(btn);
      setLast(false);
    } else {
      if (btn !== "=" && btn !== "AC") {
        newText = target + btn;
        setTarget(newText);
      }
      if (btn === "=") {
        newText = eval(target);
        setTarget(newText);
        setLast(true);
      }
      if (btn === "AC") {
        setTarget("");
        setLast(false);
      }
    }
  };

  return (
    <>
      <div className='cal'>
        <Input target={target} />
        <Buttons handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
