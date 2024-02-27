import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Headerbottom() {
  return (
    <>
    <div className="Headerbottom animate__animated animate__slideInLeft">
      <nav class="navbar headerbottom_navbarx  navbar-expand-lg bg-body-tertiary">
        <div class="headerbottom_navx container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" id="buts;.">
            <span className="toggler">
              <input type="checkbox" id="checkbox"/>
              <label for="checkbox" class="toggle">
                  <div class="bars" id="bar1"></div>
                  <div class="bars" id="bar2"></div>
                  <div class="bars" id="bar3"></div>
              </label>
            </span>
          </button>
          <div></div>
          <div class="headerbottom_navbar collapse navbar-collapse" id="navbarTogglerDemo01">
          <img src={require("./vit-logo.png")} id="tl" alt="Logo" />
          <img src={require("./makeathon-logo.png")} id="ml" alt="Logo" />
            <ul>
              <li className="home">HOME</li>
              <li>ABOUT</li>
              <li>TRACKS</li>
              <li>FAQs</li>
              <li>SIGN&nbsp;IN</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}

export default Headerbottom;
