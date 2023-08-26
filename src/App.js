import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Modal } from "./Components/Modal";
import { Footer } from "./Components/Footer";
import { McCafe } from "./Pages/McCafe";
import { Familien } from "./Pages/Familien";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <BrowserRouter>
      <>
        <Header toggle={toggle} setToggle={setToggle} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home toggle={toggle} />} />
            <Route path="/mccafe" element={<McCafe toggle={toggle} />} />
            <Route path="/familien" element={<Familien />} />
          </Routes>
          <Footer toggle={toggle} />
          <Modal />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
