import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addCalculation } from "../features/calculatorSlice";
import "./calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");

  const dispatch = useDispatch();

  const calculate = () => {
    let result = 0;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b !== 0 ? a / b : "Error";
        break;
      default:
        result = "Invalid";
    }

    const expression = `${a} ${operator} ${b}`;
    dispatch(addCalculation(expression, result));
    setNum1("");
    setNum2("");
  };

  return (
    <div className="calculator-box">
      <h2>Calculator</h2>
      <div className="input-row">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First Number"
        />
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second Number"
        />
      </div>
      <button onClick={calculate} className="calc-btn">Calculate</button>
    </div>
  );
};

export default Calculator;
