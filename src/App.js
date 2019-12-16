import React from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import CalculatorDisplay from "./components/CalculatorDisplay";

function App() {
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
          <CalculatorDisplay />
          <KeyPad />
        </div>
      </div>
    </>
  );
}

export default App;
