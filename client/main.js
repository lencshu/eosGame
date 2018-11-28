import React from "react";
import ReactDOM from "react-dom";

import NaviBar from "../imports/ui/panel/NaviBar";
import ParticlesAnimation from "../imports/ui/particles/ParticlesAnimation";

const rootElement = document.getElementById("navbar");
ReactDOM.render(<NaviBar />, rootElement);

const partiElement = document.getElementById("particles-js");
ReactDOM.render(<ParticlesAnimation />, partiElement);
