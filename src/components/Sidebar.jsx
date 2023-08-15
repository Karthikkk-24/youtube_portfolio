import React from "react";
import "../../src/App.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="container">
        <div className="items active">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="items">
          <i className="fa-solid fa-list-check"></i>
          <p>Projects</p>
        </div>
        <div className="items">
          <i className="fa-solid fa-bars-progress"></i>
          <p>Skills</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="items">
          <i className="fa-solid fa-clock-rotate-left"></i>
          <p>History</p>
        </div>
        <div className="items">
          <i className="fa-solid fa-list-check"></i>
          <p>Projects</p>
        </div>
        <div className="items">
          <i className="fa-solid fa-bars-progress"></i>
          <p>Skills</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="heading">Projects</div>
        <div className="items">
          <i className="fa-solid fa-house"></i>
          <p>Home</p>
        </div>
        <div className="items">
          <i className="fa-solid fa-list-check"></i>
          <p>Projects</p>
        </div>
        <div className="items">
          <i className="fa-regular fa-address-card"></i>
          <p>About</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="heading">Social</div>
        <div className="items">
          <i className="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </div>
        <div className="items">
          <i className="fa-brands fa-medium"></i>
          <p>Medium</p>
        </div>
        <div className="items">
          <i className="fa-brands fa-x-twitter"></i>
          <p>X</p>
        </div>
        <div className="items">
          <i className="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </div>
        <div className="items">
          <i className="fa-brands fa-instagram"></i>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
}
