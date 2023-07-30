import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="flex items-center justify-center h-screen">
              <Title />
            </div>
          }
        />
        <Route 
        path = "/about"
        element = { 
          <div className="flex items-center justify-center h-screen">
            <h1> Lmfao </h1>
          </div>
        
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
