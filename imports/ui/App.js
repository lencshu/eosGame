import React, { Component } from 'react';
import NaviBar from "./panel/NaviBar";
import ParticlesAnimation from "./particles/ParticlesAnimation";
import GetCoin from "./GetCoin/GetCoin";
import MainPage from './MainPage/MainPage';

export default class App extends Component {
  render() {
    return (
      // <div>
      //   <NaviBar />
      //   <ParticlesAnimation />
      //   <GetCoin />
      // </div>
      <MainPage />
    );
  }
}