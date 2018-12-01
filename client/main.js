import React from "react";
import ReactDOM from "react-dom";

import NaviBar from "../imports/ui/panel/NaviBar";
import ParticlesAnimation from "../imports/ui/particles/ParticlesAnimation";
import GetCoin from "../imports/ui/GetCoin/GetCoin";

const rootElement = document.getElementById("navbar");
ReactDOM.render(<NaviBar />, rootElement);

const partiElement = document.getElementById("particles-js");
ReactDOM.render(<ParticlesAnimation />, partiElement);

const getCoinElement = document.getElementById("get-coin");
ReactDOM.render(<GetCoin />, getCoinElement);