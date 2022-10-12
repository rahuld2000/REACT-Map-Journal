import React from "react";
import "./main.css"
const bot = (props) => {
    return (
        <div className="container">
            <div className="image"><img src={props.item.imgUrl} width="200px" alt="unsplash" /></div>
            <div className="content">
                <div className="location"><span className="country_name">{props.item.location}</span> <span className="map_link"><a href={props.item.mapurl} target="_blank" rel="noopener noreferrer">view on google Maps</a></span></div>
                <h1 className="place_name">{props.item.title}</h1>
                <p className="description">{props.item.description}</p>
                <p className="date">{props.item.date}</p>
            </div>
        </div>
    )
}
export default bot;