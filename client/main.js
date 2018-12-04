import React from "react";
import ReactDOM from "react-dom";

import NaviBar from "../imports/ui/panel/NaviBar";
import ParticlesAnimation from "../imports/ui/particles/ParticlesAnimation";
import App from "../imports/ui/App";

const rootElement = document.getElementById("App");
ReactDOM.render(<App />, rootElement);

const partiElement = document.getElementById("particles-js");
ReactDOM.render(<ParticlesAnimation />, partiElement);
