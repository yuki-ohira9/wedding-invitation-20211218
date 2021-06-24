require('./bootstrap');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home";
import Event from "./Event";
import Auth from "./Auth";
import Rsvp from "./Rsvp";
import Login from './Login';
import Logout from './Logout';

import "../css/app.css";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Auth>
                    <NavBar />
                    <Route path="/home" component={Home} />
                    <Route path="/event" component={Event} />
                    <Route path="/rsvp" component={Rsvp} />
                </Auth>
            </Switch>
        </BrowserRouter>
    );
};

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}