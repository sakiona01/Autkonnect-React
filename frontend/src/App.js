// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/Index.js';
import React, { useState } from 'react';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Services from './Pages/Services.js';
import Shop from './Pages/Shop.js';
import Login from './Pages/Login.js';

function App() {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(user => setCurrentUser(user))
      }
    })
  }, [])

  
  return (
    <div className="App">
        <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Services" element={<Services/>}/>
        <Route exact path="/Shop" element={<Shop/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;

