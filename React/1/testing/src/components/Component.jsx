import React from "react";
import "./components.css";

function Component() {
  //let [add, setAdd] = React.useState(false);

  let ttext = document.getElementsByClassName("ttext");
  let input = document.getElementById("input");
  const [inp, setInp] = React.useState("");

  let add = () => {
    let newSpan = document.createElement("p");
    newSpan.classList.add = "blue";
    newSpan.textContent = "";
    ttext[0].append(newSpan);
    console.log(ttext[0]);
    console.log(input.textContent);
  };
  return (
    <div>
      <input id="input">{inp}</input>
      <button onClick={add}>+</button>
      <div className="ttext">frfr</div>
    </div>
  );
}

export default Component;
