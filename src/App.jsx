import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Footer,
  Wings,
  Sides,
  Sandwiches,
  Wraps,
  Salads,
  Milkshakes,
  WingCafe,
  WingsideSpecial,
} from "./components";

import { Home, Admin, OrderNow, Cart, OrderHistory, Contact } from "./pages";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OrderNow" element={<OrderNow />}>
          <Route path="/OrderNow" element={<Wings />} />
          <Route path="/OrderNow/Sides" element={<Sides />} />
          <Route path="/OrderNow/Sandwiches" element={<Sandwiches />} />
          <Route path="/OrderNow/Wraps" element={<Wraps />} />
          <Route path="/OrderNow/Salads" element={<Salads />} />
          <Route path="/OrderNow/Milkshakes" element={<Milkshakes />} />
          <Route path="/OrderNow/WingCafe" element={<WingCafe />} />
          <Route
            path="/OrderNow/WingsideSpecial"
            element={<WingsideSpecial />}
          />
        </Route>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
