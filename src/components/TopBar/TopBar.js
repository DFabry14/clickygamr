import React from "react";
import "./TopBar.css";

const TopBar = props => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li>
        <strong>Your Score: {props.score} </strong>
      </li>
      <li>
        <strong>Top Score: {props.highScore}</strong>
      </li>
    </ul>
  </div>
</nav>
)

export default TopBar;