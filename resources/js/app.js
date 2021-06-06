require('./bootstrap');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Event from "./Event";
import Auth from "./Auth";
import Rsvp from "./Rsvp";

import app from "../css/app.css";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Route path="/home" component={Home} />
            <Route path="/event" component={Event} />
            <Route path="/rsvp" component={Rsvp} />
            <Route exact path="/" component={Auth} />
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}