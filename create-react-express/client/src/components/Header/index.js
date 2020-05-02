import React from 'react';  
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header(props) {
    return(
    <div className="header">
            <ul>
                <li><Link to= "/">Search</Link></li>
                <li><Link to= "/saved">Saved</Link></li>
            </ul>
        </div>
    );
}

export default Header;