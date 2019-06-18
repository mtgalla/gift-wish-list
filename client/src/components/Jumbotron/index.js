import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center", webkitTextStroke: "1px gray",  color: "white", textShadow: " 10px 10px 0 #000 ,-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000.  2px 2px 0 #000" ,backgroundImage: `url(${"/books.png"})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
