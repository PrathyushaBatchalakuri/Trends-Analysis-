import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from "./views/Home.js";
import LoginPage from "./views/LoginPage.js";
import Query2 from "./views/Query2.js";
import Query4 from "./views/Query4.js";
import Query3 from "./views/Query3.js";
import Query5 from "./views/Query5.js";

// import GDP from "./views/GDP.js";
import Query1 from "./views/Query1.js";
import Register from "./views/Register.js";
// import DatabaseCount from "./views/DatabaseCount.js";
import UnAuth from "./views/UnAuth.js"
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();


  if(!token) {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/Login" exact element={<LoginPage setToken={setToken}/>} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/" exact element={<LoginPage setToken={setToken}/>} />
        <Route path="/404" exact element={<UnAuth />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Login" exact element={<LoginPage setToken={setToken}/>} />
      <Route path="/Query2" exact element={<Query2 />} />
      <Route path="/Query4" exact element={<Query4 />} />
      <Route path="/Query3" exact element={<Query3 />} />
      <Route path="/Query5" exact element={<Query5 />} /> 
      <Route path="/Query1" exact element={<Query1 />} />
      <Route path="/register" exact element={<Register />} />
      {/* <Route path="/DatabaseCount" exact element={<DatabaseCount />} /> */}
      <Route path="/404" exact element={<UnAuth />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
