import { HashRouter, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";
ReactDOM.render(<Header />, document.getElementById("reactheader"));
ReactDOM.render(<HashRouter>
    <Link to="/states">States</Link>
    <Link to="/example">Example</Link>

    <Route path="/states" component={States} />
    <Route path="/example" component={Example} />
</HashRouter>, document.getElementById("reactapp")); 
