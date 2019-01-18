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
          "speed": 23,
        }
      },
    },
    sideFlowOptions: {
      particles: {
        "number": {
          "value": 200,
        },
        "move": {
          "speed": 10,
        }

      },
    },
  };

  clickOnChangeType = () => {
    this.setState({type: !this.state.type})
  }

  onChangeOption = e => {
    const {name, value} = e;
    const newState = _.set({...this.state}, name, value);
    this.setState({newState}
      , () => {
        console.log("onChangeOption", this.state)
      });
  }

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
        }
      }
    );
    const changableSideOptions = _.merge(
      {},
      {
        particles: {
          number: type ? sideFlowOptions.particles.number : sideFlowOptions.particles.number,
          move: type ? sideFlowOptions.particles.move : sideFlowOptions.particles.move,
        }
      }
    );

    // const centerFlowConfig = _.merge({}, commonFlowOptions, centerFlow, bubblesConfig);
    const sideFlow2Config = _.merge({}, commonFlowOptions, sideFlow, changableSideOptions, commonConfig);
    const centerStraightFlowConfig = _.merge({}, commonFlowOptions, centerStraightFlowOptions, changableCenterOptions, commonConfig);
    return (
      <Fragment>
        <Pipe>
          <Flow
            // centerFlow={centerFlowConfig}
            sideFlow={sideFlow2Config}
            centerStraightFlow={centerStraightFlowConfig}
          />
        </Pipe>
        <div className="config-box">
          <button
            onClick={this.clickOnChangeType}
          >
            {type ? "Change to turbulence" : "Change to bubbles"}
          </button>
          <div className="flex-parrent">
            <div className="flex-items">
                <span>Central flow particles number</span>
                <InputRange
                  step={10}
                  maxValue={800}
                  minValue={0}
                  name={"centerFlowOptions.particles.number.value"}
                  value={centerFlowOptions.particles.number.value}
                  onChange={ value => { this.onChangeOption({value, name: "centerFlowOptions.particles.number.value"}) }}
                />
              <span>Central flow speed</span>
              <InputRange
                  step={1}
                  maxValue={100}
                  minValue={0}
                  name={"centerFlowOptions.particles.move.speed"}
                  value={centerFlowOptions.particles.move.speed}
                  onChange={ value => { this.onChangeOption({value, name: "centerFlowOptions.particles.move.speed"}) }}
                />
            </div>
            <div className="flex-items">
              <span>Side flow particles number</span>
              <InputRange
                step={10}
                maxValue={800}
                minValue={0}
                name={"sideFlowOptions.particles.number.value"}
                value={sideFlowOptions.particles.number.value}
                onChange={ value => { this.onChangeOption({value, name: "sideFlowOptions.particles.number.value"}) }}
              />
              <span>Side flow speed</span>
              <InputRange
                step={1}
                maxValue={100}
                minValue={0}
                name={"sideFlowOptions.particles.move.speed"}
                value={sideFlowOptions.particles.move.speed}
                onChange={ value => { this.onChangeOption({value, name: "sideFlowOptions.particles.move.speed"}) }}
              />
            </div>
          </div>
          {/*<div className="flex-parrent">*/}
          {/*</div>*/}

        </div>
      </Fragment>
    );
  }
}

export default App;
