import React from "react";

const CalculatorDisplay = ({ result }) => {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <div style={{ width: "100%" }}>
          <h1 style={{ textAlign: "end" }}>{result}</h1>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisplay;
