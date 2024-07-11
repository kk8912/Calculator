import { useState } from "react";
import "./style.css";

function App() {
  const [inputvalue, setinputvalue] = useState("");

  function display(value) {
    setinputvalue(inputvalue + value);
  }

  function calculate() {
    try {
      var answers = eval(inputvalue);
      setinputvalue(answers);
    } catch (e) {
      setinputvalue("Expression is not valid");
      setTimeout(() => setinputvalue(""), 1500); // Clear the message after 1.5 seconds
    }
  }

  function clear() {
    setinputvalue("");
  }

  return (
    <>
      <h1 className="h1">calculator</h1>
      <form className="calculator" name="calc">
        <input type="text" className="value" value={inputvalue} readOnly />
        <span className="num clear" onClick={() => clear()}>
          c
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </>
  );
}

export default App;
