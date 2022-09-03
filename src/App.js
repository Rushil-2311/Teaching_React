import React, { useMemo, useRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//usememo
function App() {
  const [count, setCount] = useState(0);
  const render = useRef(0);
  console.log(render.current++);
  function featchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const incremet = useMemo(() => {
    setCount(count + 1);
  }, []);
  return (
    <div className="App">
      <div>hellow world</div>
      <div onClick={() => incremet()}>increment</div>
      {/* {featchData()} */}
    </div>
  );
}

export default App;
