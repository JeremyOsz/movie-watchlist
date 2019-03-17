import React from "react";
import SearchBar from "./components/Search/search-bar";
import Header from "./components/Layout/header";
import NavBar from "./components/Layout/nav-bar";
import MainView from "./components/Layout/view-controller";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "search"
        };
    }

    setNavState = view => {
        this.setState({ currentView: view });
        console.log(this.state.currentView);
    };

    render() {
        return (
            <div className="App">
                <Header title="My movie Watchlist" />
                <NavBar
                    currentPage="SearchBar"
                    viewController={this.setNavState}
                />
                <MainView currentView={this.state.currentView} />
            </div>
        );
    }
}

export default App;
