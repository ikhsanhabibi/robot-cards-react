import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    handleSearch = e => {
        this.setState({ searchField: e.target.value });
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchField } = this.state;
        const filterRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Robot Cards</h1>
                <SearchBox
                    placeholder="search robots"
                    handleChange={this.handleSearch}
                ></SearchBox>
                <br /> <br />
                <CardList robots={filterRobots}></CardList>
                <br /> <br />
                <footer>Made by Ikhsan Habibi</footer>
                <br /> <br />
            </div>
        );
    }
}

export default App;
