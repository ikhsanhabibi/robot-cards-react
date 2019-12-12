import React from "react";

import "./card.css";

export const Card = props => (
    <div className="card-container">
        <img
            alt="robot"
            src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`}
        />
        <h1>{props.robot.name}</h1>
        <p>{props.robot.email}</p>
    </div>
);
