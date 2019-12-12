import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

export const CardList = props => (
    <div className="card-list">
        {props.digimons.map(digimon => (
            <Card key={digimon.id} digimon={digimon} />
        ))}
    </div>
);
