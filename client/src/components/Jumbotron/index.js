import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div className = "Jumbotron">
      {children}
      <br></br><br></br>
    </div>
  );
}

export default Jumbotron;
