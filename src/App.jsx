import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarBootstrap from './assets/components/Navbar';
import Home from './assets/components/Home';
import Contacto from './assets/components/Contacto';
import './App.css'

const App = () => {
  return (
    <>
      <NavbarBootstrap />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
  );
};

export default App;
