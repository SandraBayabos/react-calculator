import React, { useState } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import CalculatorDisplay from "./components/CalculatorDisplay";

function App() {
  const [result, setResult] = useState("");

  //eval reads the string and execute what it sees as code, so if the content is code, it will execute it as code if it can
  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };

  // function that sets the state back to an empty string
  const reset = () => {
    setResult("");
  };

  // the result string in the display gets sliced
  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  // key will be the props we pass down
  const performCalculation = key => {
    console.log(result);
    console.log(key);
    if (key === "=") {
      calculate();
    } else if (key === "AC") {
      reset();
    } else if (key === "C") {
      backspace();
    } else {
      setResult(result + key);
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "350px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <CalculatorDisplay result={result} />
          {/* performCalculation is being passed down as props to KeyPad */}
          <KeyPad
            result={result}
            performCalculation={performCalculation}
            calculate={calculate}
            reset={reset}
            backspace={backspace}
          />
        </div>
      </div>
    </>
  );
}

export default App;
