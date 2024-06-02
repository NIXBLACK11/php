import React, { useState } from "react";
import './App.css';

const Hooks = () =>
    {
    const state=useState();
     const [count, setCount]=useState(1);
     const IncNum= () => {
        setCount(count+1)
    }
    return(
      <div className="hooksdiv">
     <h1 className="hooks">{count}</h1>
      <button className="hooks1" onClick={IncNum}>Click Me</button>
      </div>
    );
}

export default Hooks;