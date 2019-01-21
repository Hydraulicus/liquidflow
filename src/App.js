import React, {Component, Fragment} from "react";
import _ from "lodash";
import InputRange from "react-input-range";
import Pipe from "./components/Pipe";
import Flow from "./components/Flow";
import config from "./config/index.js";
import "./index.css";
import "./react-input-range.css";


class App extends Component {
  state = {
    type: true, // true - "bubbles",  false -  "turbulence"

    centerFlowOptions: {
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
    },
    sideFlowOptions: {
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
    },
  };

  clickOnChangeType = () => {
    this.setState({type: !this.state.type})
  }

  onChangeOption = ({name, value}) => {
    const newState = _.set({...this.state}, name, value);
    this.setState({newState}
      , () => {
        console.log("onChangeOption", this.state)
      });
  };

  render() {
    const {
      commonFlowOptions,
      sideFlow,
      centerFlow,
      centerStraightFlowOptions,
      bubbles,
      turbulence,
    } = config;

    const {type, centerFlowOptions, sideFlowOptions} = this.state;
    const commonConfig = type ? bubbles : turbulence;

    const changableCenterOptions = _.merge(
      {},
      {
        particles: {
          number: type ? centerFlowOptions.particles.number : centerFlowOptions.particles.number,
          move: type ? centerFlowOptions.particles.move : centerFlowOptions.particles.move,
          color: type ? centerFlowOptions.particles.color : centerFlowOptions.particles.color,
          size: type ? centerFlowOptions.particles.size : centerFlowOptions.particles.size,
          line_linked: type ? centerFlowOptions.particles.line_linked : centerFlowOptions.particles.line_linked,
        }
      }
    );
    const changableSideOptions = _.merge(
      {},
      {
        particles: {
          number: type ? sideFlowOptions.particles.number : sideFlowOptions.particles.number,
          move: type ? sideFlowOptions.particles.move : sideFlowOptions.particles.move,
          color: type ? sideFlowOptions.particles.color : sideFlowOptions.particles.color,
          size: type ? sideFlowOptions.particles.size : sideFlowOptions.particles.size,
          line_linked: type ? sideFlowOptions.particles.line_linked : sideFlowOptions.particles.line_linked,
        }
      }
    );

    // const centerFlowConfig = _.merge({}, commonFlowOptions, centerFlow, bubblesConfig);
    const sideFlow2Config = _.merge({}, commonFlowOptions, sideFlow, changableSideOptions, commonConfig);
    const centerStraightFlowConfig = _.merge({}, commonFlowOptions, centerStraightFlowOptions, changableCenterOptions, commonConfig);
    // console.log(sideFlow2Config);
    return (
      <Fragment>
        <Pipe>
          <Flow
            // centerFlow={centerFlowConfig}
            sideFlow={sideFlow2Config}
            centerStraightFlow={centerStraightFlowConfig}
          />
        </Pipe>

        {/*<FlowOptions.Provider value = {"test"}>*/}
        {/*<OptionsBox />*/}
        {/*</FlowOptions.Provider>*/}

        <div className="config-box">
          {/*<button*/}
            {/*onClick={this.clickOnChangeType}*/}
          {/*>*/}
            {/*{type ? "Change to turbulence" : "Change to bubbles"}*/}
          {/*</button>*/}
          <div className="flex-parrent">
            <div className="flex-items">
              <span>Central flow particles number</span>
              <InputRange
                step={10}
                maxValue={800}
                minValue={0}
                name={"centerFlowOptions.particles.number.value"}
                value={centerFlowOptions.particles.number.value}
                onChange={ value => {
                  this.onChangeOption({value, name: "centerFlowOptions.particles.number.value"})
                }}
              />
              <span>Central flow speed</span>
              <InputRange
                step={1}
                maxValue={100}
                minValue={0}
                name={"centerFlowOptions.particles.move.speed"}
                value={centerFlowOptions.particles.move.speed}
                onChange={ value => {
                  this.onChangeOption({value, name: "centerFlowOptions.particles.move.speed"})
                }}
              />
              <span>Central flow. Random speed</span>
              <input
                type="checkbox"
                name={"centerFlowOptions.particles.move.random"}
                checked={centerFlowOptions.particles.move.random}
                onChange={ value => {
                  this.onChangeOption({value: value.target.checked, name: "centerFlowOptions.particles.move.random"})
                }}
              />
              <div><span>Central flow. Straight direction of speed</span>
                <input
                  type="checkbox"
                  name={"centerFlowOptions.particles.move.straight"}
                  checked={centerFlowOptions.particles.move.straight}
                  onChange={ value => {
                    this.onChangeOption({value: value.target.checked, name: "centerFlowOptions.particles.move.straight"})
                  }}
                />
              </div>
            </div>
            <div className="flex-items">
              <span>Side flow particles number</span>
              <InputRange
                step={10}
                maxValue={800}
                minValue={0}
                name={"sideFlowOptions.particles.number.value"}
                value={sideFlowOptions.particles.number.value}
                onChange={ value => {
                  this.onChangeOption({value, name: "sideFlowOptions.particles.number.value"})
                }}
              />
              <span>Side flow speed</span>
              <InputRange
                step={1}
                maxValue={100}
                minValue={0}
                name={"sideFlowOptions.particles.move.speed"}
                value={sideFlowOptions.particles.move.speed}
                onChange={ value => {
                  this.onChangeOption({value, name: "sideFlowOptions.particles.move.speed"})
                }}
              />
              <span>Side flow. Random speed</span>
              <input
                type="checkbox"
                name={"sideFlowOptions.particles.move.random"}
                checked={sideFlowOptions.particles.move.random}
                onChange={ value => {
                  this.onChangeOption({value: value.target.checked, name: "sideFlowOptions.particles.move.random"})
                }}
              />
              <div><span>Side flow. Straight direction of speed</span>
              <input
                type="checkbox"
                name={"sideFlowOptions.particles.move.straight"}
                checked={sideFlowOptions.particles.move.straight}
                onChange={ value => {
                  this.onChangeOption({value: value.target.checked, name: "sideFlowOptions.particles.move.straight"})
                }}
              />
            </div>
            </div>
          </div>

          <div className="flex-parrent">
            <div className="flex-items">
              <span>Central flow particles size</span>
              <input
                type="checkbox"
                name={"centerFlowOptions.particles.size.anim.enable"}
                checked={centerFlowOptions.particles.size.anim.enable}
                onChange={ value => {
                  this.onChangeOption({ value: value.target.checked, name: "centerFlowOptions.particles.size.anim.enable" })
                }}
              />
              <span>Random animated</span>

              <InputRange
                step={0.5}
                maxValue={20}
                minValue={0}
                name={"centerFlowOptions.particles.size.value"}
                value={centerFlowOptions.particles.size.value}
                onChange={ value => {
                  this.onChangeOption({value, name: "centerFlowOptions.particles.size.value"})
                }}
              />
              <span>Central flow color</span>
              <input
                type="color"
                name={"centerFlowOptions.particles.color.value"}
                value={centerFlowOptions.particles.color.value}
                onChange={ value => {
                  this.onChangeOption({value: value.target.value, name: "centerFlowOptions.particles.color.value"})
                }}
              />
            </div>
            <div className="flex-items">
              <span>Side flow particles size</span>
              <input
                type="checkbox"
                name={"sideFlowOptions.particles.size.anim.enable"}
                checked={sideFlowOptions.particles.size.anim.enable}
                onChange={ value => {
                  this.onChangeOption({value: value.target.checked, name: "sideFlowOptions.particles.size.anim.enable"})
                }}
              />
              <span>Random animated</span>
              <InputRange
                step={0.5}
                maxValue={20}
                minValue={0}
                name={"sideFlowOptions.particles.size.value"}
                value={sideFlowOptions.particles.size.value}
                onChange={ value => {
                  this.onChangeOption({value, name: "sideFlowOptions.particles.size.value"})
                }}
              />
              <span>Side flow color</span>
              <input
                type="color"
                name={"sideFlowOptions.particles.color.value"}
                value={sideFlowOptions.particles.color.value}
                onChange={ value => {
                  this.onChangeOption({value: value.target.value, name: "sideFlowOptions.particles.color.value"})
                }}
              />
            </div>
          </div>


          <div className="flex-parrent">
            <div className="flex-items">
              {/*<span>Central flow. Bubbles linking.</span>*/}
              <input
                type="checkbox"
                name={"centerFlowOptions.particles.line_linked.enable"}
                checked={centerFlowOptions.particles.line_linked.enable}
                onChange={ value => {
                  this.onChangeOption({ value: value.target.checked, name: "centerFlowOptions.particles.line_linked.enable" })
                }}
              />
              <span>Linking enebled</span>
              <span> To make appearance like turbulence </span>
              <span> Set distance</span>
              <InputRange
                step={1}
                maxValue={100}
                minValue={0}
                name={"centerFlowOptions.particles.line_linked.distance"}
                value={centerFlowOptions.particles.line_linked.distance}
                onChange={ value => {
                  this.onChangeOption({value, name: "centerFlowOptions.particles.line_linked.distance"})
                }}
              />
              <span>width</span>
              <InputRange
                step={1}
                maxValue={20}
                minValue={0}
                name={"centerFlowOptions.particles.line_linked.width"}
                value={centerFlowOptions.particles.line_linked.width}
                onChange={ value => {
                  this.onChangeOption({value, name: "centerFlowOptions.particles.line_linked.width"})
                }}
              />
              <span>Central flow links color</span>
              <input
                type="color"
                name={"centerFlowOptions.particles.line_linked.color"}
                value={centerFlowOptions.particles.line_linked.color}
                onChange={ value => {
                  this.onChangeOption({value: value.target.value, name: "centerFlowOptions.particles.line_linked.color"})
                }}
              />

            </div>
            <div className="flex-items">
              {/*<span>Side flow. Bubbles linking.</span>*/}
              <input
                type="checkbox"
                name={"sideFlowOptions.particles.line_linked.enable"}
                checked={sideFlowOptions.particles.line_linked.enable}
                onChange={ value => {
                  this.onChangeOption({ value: value.target.checked, name: "sideFlowOptions.particles.line_linked.enable" })
                }}
              />
              <span>Linking enebled</span>
              <span> To make appearance like turbulence </span>
              <span> Set distance</span>
              <InputRange
                step={1}
                maxValue={100}
                minValue={0}
                name={"sideFlowOptions.particles.line_linked.distance"}
                value={sideFlowOptions.particles.line_linked.distance}
                onChange={ value => {
                  this.onChangeOption({value, name: "sideFlowOptions.particles.line_linked.distance"})
                }}
              />
              <span>width</span>
              <InputRange
                step={1}
                maxValue={20}
                minValue={0}
                name={"sideFlowOptions.particles.line_linked.width"}
                value={sideFlowOptions.particles.line_linked.width}
                onChange={ value => {
                  this.onChangeOption({value, name: "sideFlowOptions.particles.line_linked.width"})
                }}
              />
              <span>Central flow links color</span>
              <input
                type="color"
                name={"sideFlowOptions.particles.line_linked.color"}
                value={sideFlowOptions.particles.line_linked.color}
                onChange={ value => {
                  this.onChangeOption({value: value.target.value, name: "sideFlowOptions.particles.line_linked.color"})
                }}
              />

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
