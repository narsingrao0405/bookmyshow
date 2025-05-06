import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';


import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  

  return (
  
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      
    </BrowserRouter>
    </div>
  )
}

export default App
