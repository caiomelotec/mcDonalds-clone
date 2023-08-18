import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle} />
        <BrowserRouter>
          <Routes>
            {toggle ? <Route path="/" element={<Home />} /> : null}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
