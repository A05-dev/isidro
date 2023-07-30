import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <Title />
      </div>
    </>
  );
}

export default App;
