import React from "react";
import "./card-list.css";
import { Card } from "../card/card";

export const CardList = props => (
    <div className="card-list">
        {props.robots.map(robot => (
            <Card key={robot.id} robot={robot} />
        ))}
    </div>
);
