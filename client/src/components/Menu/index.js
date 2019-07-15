import React from "react";
import "./style.css";
import SearchForm from '../SearchForm';
    
    
function Menu(props) {
    return (
  
    <div className="col-12">
        <div className="title"><h2>Ticket Tracker</h2><h6>Search and track your favorite tickets</h6></div>
        <div><SearchForm></SearchForm></div>
        <nav className="menu">
            <ol>
                <li className="menu-item"><a href="/">Home</a></li>
                <li className="menu-item"><a href="/Saved">Saved</a></li>
                <li className="menu-item"><a href="sports">Sports</a></li>
                <li className="menu-item"><a href="concert">Concerts</a></li>
                <li className="menu-item"><a href="theatre">Theaters</a></li>
            </ol>
        </nav>
    </div>
    )
}

export default Menu;