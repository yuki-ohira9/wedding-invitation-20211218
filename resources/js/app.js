require('./bootstrap');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Auth from "./Auth";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/about" component={About} />
            <Route path="/auth" component={Auth} />
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}