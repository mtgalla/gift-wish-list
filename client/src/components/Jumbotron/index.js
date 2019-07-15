import React from "react";
import "./style.css";
import Chat from "../../Chat"

function Jumbotron({ children }) {
  return (
    <div className = "Jumbotron">
      {children}
      <div className="chat col-6"><Chat ></Chat></div>
      <br></br><br></br>
    </div>
  );
}

export default Jumbotron;
