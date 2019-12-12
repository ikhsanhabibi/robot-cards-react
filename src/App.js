import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            digimons: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ digimons: users }));
    }

    render() {
        const { digimons, searchField } = this.state;
        const filterDigimons = digimons.filter(digimon =>
            digimon.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <input
                    type="search"
                    placeholder="search robots"
                    onChange={e =>
                        this.setState({ searchField: e.target.value })
                    }
                />
                <div>
                    <CardList digimons={filterDigimons}></CardList>
                </div>
            </div>
        );
    }
}

export default App;
