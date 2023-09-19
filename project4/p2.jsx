import React from "react";
import ReactDOM from "react-dom";

import States from "./components/States";
import Header from "./components/Header";
ReactDOM.render(<Header />, document.getElementById("reactheader"));
ReactDOM.render(<States />, document.getElementById("reactapp"));
