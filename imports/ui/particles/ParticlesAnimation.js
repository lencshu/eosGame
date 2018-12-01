import Particles from "react-particles-js";
import React, { Component } from "react";
import GetCoin from "../GetCoin/GetCoin";

export default class ParticlesAnimation extends Component {
    render() {
        return (
            <Particles
                params={{
                    particles: {
                        number: { value: 88, density: { enable: true, value_area: 900 } },
                        color: { value: "#ffffff" },
                        shape: {
                            type: "circle",
                            stroke: { width: 1, color: "#ffffff" },
                            polygon: { nb_sides: 6 },
                            image: { src: "", width: 220, height: 180 }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                        },
                        size: {
                            value: 2,
                            random: true,
                            anim: { enable: false, speed: 36, size_min: 0.1, sync: false }
                        },
                        line_linked: {
                            enable: true,
                            distance: 222,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: { enable: false, rotateX: 600, rotateY: 1200 }
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: true, mode: "grab" },
                            onclick: { enable: true, mode: "bubble" },
                            resize: true
                        },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: {
                                distance: 400,
                                size: 7,
                                duration: 0.5,
                                opacity: 8,
                                speed: 5
                            },
                            repulse: { distance: 160, duration: 0.2 },
                            push: { particles_nb: 2 },
                            remove: { particles_nb: 2 }
                        }
                    },
                    retina_detect: true
                }}
            />
        );
    }
}
