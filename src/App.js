import React from "react"; 
import styles from './App.css' 
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./compenents/Navbar";
import Footer from "./compenents/Footer"; 
import Login from "./pages/Login/login";
import Register from "./pages/Register/Register"
import Produto from "./pages/Produto/Produto";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => { 
    return ( 

        <div className="App"> 
    
          <BrowserRouter> 
            <Navbar/>
            <div className="container"> 
              <Routes> 
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />      
                <Route path="/login" element={<Login />} />      
                <Route path="/register" element={<Register />} />      
                <Route path="/produto" element={<Produto />} />      
              </Routes> 
            </div> 
          </BrowserRouter> 
        </div> 
      ); 
} 

export default App 