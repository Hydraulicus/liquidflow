import React, {Component, Fragment} from "react";
import _ from "lodash";
import Pipe from "./components/Pipe";
import Flow from "./components/Flow";
import config from "./config/index.js";
import "./index.css";

class App extends Component {
  state = {
    // type: "bubbles" // or "turbulence", or "mix"
    type: true // true - "bubbles",  false -  "turbulence"
  }

  clickOnChangeType = () => {
    this.setState({type: !this.state.type})
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

    const {type} = this.state;
    const commonConfig = type ? bubbles : turbulence;

    const changableCenterOptions = _.merge(
      {},
      {
        particles: {
          number: type ? centerStraightFlowOptions.particles.number : centerFlow.particles.number,
        }
      }
    );

    // const centerFlowConfig = _.merge({}, commonFlowOptions, centerFlow, bubblesConfig);
    const sideFlow2Config = _.merge({}, commonFlowOptions, sideFlow, commonConfig);
    const centerStraightFlowConfig = _.merge({}, commonFlowOptions, centerStraightFlowOptions, changableCenterOptions, commonConfig);
    console.dir(centerStraightFlowConfig);
    return (
      <Fragment>
        <Pipe>
          <Flow
            // centerFlow={centerFlowConfig}
            sideFlow={sideFlow2Config}
            centerStraightFlow={centerStraightFlowConfig}
          />
        </Pipe>
        {/*<div className="config-box">*/}
          <button
            onClick={this.clickOnChangeType}
          >
            {type ? "Change to turbulence" : "Change to bubbles"}
          </button>
        {/*</div>*/}
      </Fragment>
    );
  }
}

export default App;
