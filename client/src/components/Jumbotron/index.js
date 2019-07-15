import React from "react";
import "./style.css";
import Chat from "../chat"

function Jumbotron({ children }) {
  return (
    <div className = "Jumbotron">
      {children}
      <div className="chat col-12"><Chat ></Chat></div>
      <br></br><br></br>
    </div>
  );
}

export default Jumbotron;
