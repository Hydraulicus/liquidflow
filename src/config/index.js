import React from "react";
import _ from "lodash";

/*
 In this file are gathered the most relevant options for liquid flow visualization.
 For more examples of options see at
 https://vincentgarreau.com/particles.js/
 */

const commonFlowOptions = {
  particles: {
    "number": {
      "value": 180,
      "density": {
        "enable": false,
      }
    },
    "color": {
      "value": "#f00"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 17,
        "size_min": 0.8,
        "sync": true
      }
    },
    line_linked: {
      "enable": false,
    },
    "move": {
      "enable": true,
      "speed": 15,
      "direction": "left",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 4000,
        "rotateY": 315
      }
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 55,
        "duration": 1.4
      },
    }
  },
  "retina_detect": true
};

const centerFlowOptions = {
    particles: {
      "number": {
        "value": 800,
      },
      "move": {
        "enable": true,
        "speed": 22.5,
        "direction": "left",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 3400,
          "rotateY": 2315
        }
      },
      "color": {
        "value": "#abf",
      },
      "size": {
        "value": 3.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 23,
          "size_min": 1,
          "sync": false
        }
      },
      line_linked: {
        "enable": false,
        "distance": 40,
        "color": "#99a",
        "opacity": 1,
        "width": 1,
      },
    },
  };

const sideFlowOptions = {
    particles: {
      "number": {
        "value": 200,
      },
      "move": {
        "enable": true,
        "speed": 10,
        "direction": "left",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 3400,
          "rotateY": 2315
        }
      },
      "size": {
        "value": 2.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 17,
          "size_min": 1,
          "sync": false
        }
      },
      "color": {
        "value": "#abf",
      },
      line_linked: {
        "enable": false,
        "distance": 10,
        "color": "#99a",
        "opacity": 1,
        "width": 1,
      },
    },
  };

const centerStraightFlowConfig = _.merge({}, commonFlowOptions, centerFlowOptions);
const sideFlow2Config = _.merge({}, commonFlowOptions, sideFlowOptions);

export const FlowOptions = React.createContext({
  centerStraightFlowConfig,
  sideFlow2Config,
});

export {centerFlowOptions, sideFlowOptions,  commonFlowOptions,};