import React from "react";
import { Routes, Route} from "react-router-dom";
import Menu from './Menu';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const React_router = () => {

    return(
        <div>
        <Menu/>
        <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        </Routes>
        </div>
    );
}

export default React_router;