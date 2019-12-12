import React from "react";

import "./card.css";

export const Card = props => (
    <div className="card-container">
        <img
            alt="digimon"
            src={`https://robohash.org/${props.digimon.id}?set=set2&size=180x180`}
        />
        <h1>{props.digimon.name}</h1>
        <p>{props.digimon.email}</p>
    </div>
);
