import logo from './logo.svg';
import './App.css';
import { React, Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="reviews" element={<Reviews/>} />
          <Route path="*" element={<NoMatch/>} />
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
