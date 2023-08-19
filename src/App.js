import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Home toggle={toggle} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
