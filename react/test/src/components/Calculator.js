import React, { useState } from "react";

function Calculator() {
    const [result, setResult] = useState(0);
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);

    const handleFirstNumChange = (event) => {
        setFirstNum(Number(event.target.value));
    };

    const handleSecondNumChange = (event) => {
        setSecondNum(Number(event.target.value));
    };

    const calculate = (op) => () => { // Define calculate as a curried function
        if(op === "+") setResult(firstNum + secondNum);
        if(op === "-") setResult(firstNum - secondNum);
        if(op === "*") setResult(firstNum * secondNum);
        if(op === "/") setResult(firstNum / secondNum);
    }

    return (
        <div>
            <label htmlFor="first">First number: </label>
            <input 
                name="first" 
                id="first" 
                type="number" 
                onChange={handleFirstNumChange}
            /><br/><br/>
            <label htmlFor="second">Second number: </label>
            <input 
                name="second" 
                id="second" 
                type="number"
                onChange={handleSecondNumChange}
            /><br/><br/>
            <button onClick={calculate("+")}>+</button>
            <button onClick={calculate("-")}>-</button>
            <button onClick={calculate("*")}>*</button>
            <button onClick={calculate("/")}>/</button><br/><br/>
            <p>{result}</p>
        </div>
    )
}

export default Calculator;
