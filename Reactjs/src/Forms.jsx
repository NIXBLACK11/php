import React, { useState } from "react";

const Forms = () => {
    const [name, setName]= useState('');
    const [fullname, setFullName]= useState('');
    const [lastname, setLastName]= useState('');
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
    } 

    const inputEventsecond =(event) => {
        setLastName(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
    <div>
        <h1>Hello {fullname} {lastname}</h1>
        <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}/>
        <input type="text" placeholder="Enter your last name" onChange={inputEventsecond} value={lastname}/>
        <button type="submit" >Click me</button>
    </div>
    </form>
    );
}

export default Forms;

{/*onClick={
            onSubmit*/}