import React from "react";
import "./index.css";

const Card = (props) => {
    return (
    <div className="card">
        <div className="img-container">
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
            <img src={props.image} alt="Image"/>
            <p>Description: {props.summary}</p>
            <p>Info Link: <a href={props.infoLink}>{props.infoLink}</a></p>
            <button onClick={props.onClick}>Save</button>
        </div>
    </div>
    )
}

export default Card;