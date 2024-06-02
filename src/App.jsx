import "./App.css";
import "./Styles.css";

import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
