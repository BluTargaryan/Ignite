import React from "react";
//components and pages
import Home from "./pages/home";
import GlobalStyles from "./components/GlobalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav";

function App() {

  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div >
  );
}

export default App;
