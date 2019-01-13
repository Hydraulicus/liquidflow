import React, {Component, Fragment} from "react";
import Particles from "react-particles-js";
import pipeFront from "./pipe_front.svg";
import "./index.css";

class App extends Component {
  render() {

    return (
      <Fragment>
        <div className="pipe">
          <div className="flow">
            <Particles
              params={{
                particles: {
                  "number": {
                    "value": 500,
                    "density": {
                      "enable": false,
                      // "value_area": 1280,
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  },
                  "opacity": {
                    "value": 0.5,
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
                    "speed": 25,
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
                      "distance": 100,
                      "duration": 0.4
                    },
                  }
                },
                "retina_detect": false
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: `rgba(20,0,30,0.25)`
              }}
            />
          </div>
          <img src={pipeFront} className="pipe-Front"/>
        </div>
      </Fragment>
    );
  }
}

export default App;
