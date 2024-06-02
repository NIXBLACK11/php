import React, { useState } from "react";
import './App.css';

const Clock1 = () =>{
let time= new Date().toLocaleTimeString();
const [ctime, setCtime]= useState(time);

const UpdateTime = () =>{
    time= new Date().toLocaleTimeString();
    setCtime(time);
};

setInterval(UpdateTime, 1000)

return(
<h1 className="clock1">{ctime}</h1>
);
    }
export default Clock1