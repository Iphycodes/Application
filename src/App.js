import React from "react";

import './App.css'


import 'antd/dist/antd.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import SignUpAndSignIn from "./pages/signup-and-login-page/signup-and-login-page";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/login' element={<SignUpAndSignIn/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
