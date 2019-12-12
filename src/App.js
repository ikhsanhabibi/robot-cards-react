import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            digimons: [
                { name: "Agumon", id: "a1" },
                { name: "Gabumon", id: "g1" },
                { name: "Palmon", id: "p1" }
            ]
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ digimons: users }));
    }

    render() {
        return (
            <div className="App">
                <input type="search" placeholder="search robots" />
                <div>
                    <CardList digimons={this.state.digimons}></CardList>
                </div>
            </div>
        );
    }
}

export default App;
