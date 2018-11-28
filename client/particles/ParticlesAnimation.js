import Particles from "react-particles-js";
import React, { Component } from "react";

export default class ParticlesAnimation extends Component {
    render() {
        return (
            <Particles
                params={{
                    particles: {
                        number: { value: 200, density: { enable: true, value_area: 940 } },
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
                            value: 2.7000000000000006,
                            random: true,
                            anim: { enable: true, speed: 36, size_min: 0.1, sync: false }
                        },
                        line_linked: {
                            enable: true,
                            distance: 270,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 0.6999999999999998
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
                            onclick: { enable: true, mode: "repulse" },
                            resize: true
                        },
                        modes: {
                            grab: { distance: 400, line_linked: { opacity: 1 } },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: { distance: 200, duration: 0.4 },
                            push: { particles_nb: 4 },
                            remove: { particles_nb: 2 }
                        }
                    },
                    retina_detect: true
                }}
            />
        );
    }
}
