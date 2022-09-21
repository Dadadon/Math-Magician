import React, { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./components/pages/Calculator";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Quote from "./components/pages/Quote";

const App = memo(() => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Route>
    </Routes>
  </BrowserRouter>
));

export default App;
