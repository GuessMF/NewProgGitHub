import "./App.css";
import React from "react";
import Component from "./components/Component";

function App() {
  const [count, setCount] = React.useState(0);

  let plusCount = () => {
    setCount(count + 1);
  };

  let minusCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="number">{count}</h1>
        <button className="plus" onClick={plusCount}>
          +
        </button>
        <button className="minus" onClick={minusCount}>
          -
        </button>
      </header>
      <Component />
    </div>
  );
}

export default App;
