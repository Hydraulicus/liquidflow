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
      // "stroke": {
      //   "width": 0,
      //   "color": "#000000"
      // },
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
  "retina_detect": false
};

const sideFlow = {
  particles: {
    "number": {
      "value": 250,
      "density": {
        "enable": false,
      }
    },
    "color": {
      "value": "#aaaaff"
    },
    line_linked: {
      "enable": true,
      "distance": 40,
      "color": "#99a",
      "opacity": 1,
      "width": 1,
    },
    "move": {
      "enable": true,
      "speed": 10.5,
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
    }
  }
};

const centerFlow = {
  particles: {
    "number": {
      "value": 400,
      "density": {
        "enable": false,
      }
    },
    "color": {
      "value": "#aaaaff"
    },
    line_linked: {
      "enable": true,
      "distance": 55,
      "color": "#99a",
      "opacity": 1,
      "width": 1,
    },
    "move": {
      "enable": true,
      "speed": 20,
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
    }
  }
};
const centerStraightFlowOptions = {
  particles: {
    "number": {
      "value": 800,
      "density": {
        "enable": false,
      }
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 10,
        "color": "rgba(0,0,50,0.1)"
      },
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
    }
  }
};

const bubbles = {
  particles: {
    // "number": {
    //   "value": 500,
    //   "density": {
    //     "enable": false,
    //   }
    // },
    "color": {
      "value": "#abf"
    },
    "shape": {
      "type": "circle",

    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 2,
        "opacity_min": 0.5,
        "sync": false
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
    line_linked: {
      "enable": false,
    },
  }
};


const flowStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(20,0,30,0.125)`
};
export default {
  commonFlowOptions,
  sideFlow,
  centerFlow,
  centerStraightFlowOptions,
  bubbles,
  flowStyle
}