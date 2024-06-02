import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Watch from './components/Watch';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
