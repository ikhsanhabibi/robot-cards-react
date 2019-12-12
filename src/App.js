import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

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
                <div>
                    <SearchBox
                        placeholder="search robots"
                        handleChange={e =>
                            this.setState({
                                searchField: e.target.value
                            })
                        }
                    ></SearchBox>
                    <CardList digimons={filterDigimons}></CardList>
                </div>
            </div>
        );
    }
}

export default App;
