import { useState } from "react";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("");

  const calculateResult = (expression) => {
    try {
      // Substituir operadores visuais pelos operadores válidos do JavaScript
      const sanitizedExpression = expression.replace(/÷/g, "/").replace(/x/g, "*");
      const result = Function(`"use strict"; return (${sanitizedExpression})`)();
      return result.toString();
    } catch {
      return "Erro";
    }
  };

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("");
    } else if (value === "←") {
      setDisplay((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      setDisplay(calculateResult(display));
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const buttons = [
    ["C", "←", "÷", "x"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "="],
    ["0", "."]
  ];

  return (
    <div className="container">
      <section className="calculator">
        <h1 className="titulo">Calculadora</h1>
        <input type="text" className="display" value={display} readOnly />
        <div className="buttons-grid">
          {buttons.map((row, rowIndex) => (
            <div key={rowIndex} className="button-row">
              {row.map((btn, btnIndex) => (
                <button
                  key={btnIndex}
                  className={`calc-button ${btn === "=" ? "equal" : ""}`}
                  onClick={() => handleClick(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
