import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="main_container">
        <div className="navbar_container"></div>
        <div className="content_container">
          <div className="sidebar_container"></div>
          <div className="content">
            <div className="category_bar"></div>
            <div className="programming_container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
