import React from 'react';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./style.css";

function Header(props) {
    return(
    <div className="header">
            
            <Link to= "/">Search</Link>
            <Link to= "/saved">Saved</Link>
            
        </div>
    );
}

export default Header;