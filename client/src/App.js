import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './view/Main'
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<ProductInfo/>} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
