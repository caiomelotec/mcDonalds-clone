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
      <>
        <Header toggle={toggle} setToggle={setToggle} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home toggle={toggle} />} />
          </Routes>
          <Footer toggle={toggle} />
          <Modal />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
