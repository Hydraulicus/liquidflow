import React, {Component, Fragment} from "react";
import Particles from "react-particles-js";
import pipeFront from "./pipe_front.svg";
import "./index.css";

class App extends Component {

  commonFlowOptions = {
    particles: {
      "number": {
        "value": 80,
        "density": {
          "enable": false,
        }
      },
      "color": {
        "value": "#aaa"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
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

  sideFlow = {
    particles: {
      "number": {
        "value": 120,
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
        "speed": 12.5,
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

  centerFlow = {
    particles: {
      "number": {
        "value": 280,
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
      "speed": 22.25,
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

  flowStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(20,0,30,0.125)`
  };

  render() {

    return (
      <Fragment>
        <div className="pipe">
          <div className="main-flow">
            <Particles
              params={{...this.commonFlowOptions}}
              style={{...this.flowStyle}}
            />
          </div>
          <div className="center-flow side-flow1">
            <Particles
              params={{...this.commonFlowOptions, ...this.sideFlow}}
              style={this.flowStyle}
            />
          </div>
          <div className="center-flow side-flow2">
            <Particles
              params={{...this.commonFlowOptions, ...this.sideFlow}}
              style={this.flowStyle}
            />
          </div>
          <div className="center-flow">
            <Particles
              params={{...this.commonFlowOptions, ...this.centerFlow}}
              style={this.flowStyle}
            />
          </div>
          <img src={pipeFront} className="pipe-front"/>
        </div>
      </Fragment>
    );
  }
}

export default App;
