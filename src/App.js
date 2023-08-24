import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Modal } from "./Components/Modal";
import { Footer } from "./Components/Footer";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
        <Header toggle={toggle} setToggle={setToggle} />
        <Routes>
          <Route path="/" element={<Home toggle={toggle} />} />
        </Routes>
        <Modal />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
