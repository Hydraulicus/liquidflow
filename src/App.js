import React, {Component, Fragment} from "react";
import _ from "lodash";
import Particles from "react-particles-js";
import pipeFront from "./pipe_front.svg";
import config from"./config/index.js"
import "./index.css";

class App extends Component {
  state = {
    type: "bubbles" // or "turbulence", or "mix"
  }


  render() {
    const {commonFlowOptions,
      sideFlow,
      centerFlow,
      centerStraightFlowOptions,
      bubbles,
      flowStyle} = config;

    const centerFlowConfig = _.merge({}, commonFlowOptions, centerFlow, bubbles);
    // const centerFlowConfig = {...commonFlowOptions, ...centerFlow, ...bubbles};
    const sideFlow2Config = _.merge({}, commonFlowOptions, sideFlow, bubbles);
// sideFlow2Config={...commonFlowOptions, ...sideFlow, ...bubbles}
    const centerStraightFlowConfig = _.merge({}, commonFlowOptions, centerStraightFlowOptions, bubbles);
console.log(centerStraightFlowConfig);
    return (
      <Fragment>
        <div className="pipe">
          {/*<div className="main-flow">*/}
              {/*<Particles*/}
                {/*params={{...commonFlowOptions}}*/}
                {/*style={{...flowStyle}}*/}
              {/*/>*/}
          {/*</div>*/}
          <div className="center-flow side-flow1">
            <Particles
              params={sideFlow2Config}
              style={flowStyle}
            />
          </div>
          <div className="center-flow side-flow2">
            <Particles
              params={sideFlow2Config}
              style={flowStyle}
            />
          </div>
          {/*<div className="center-flow">*/}
            {/*<Particles*/}
              {/*params={centerFlowConfig}*/}
              {/*style={flowStyle}*/}
            {/*/>*/}
          {/*</div>*/}
          <div className="center-straight-flow">
            <Particles
              params={centerStraightFlowConfig}
              style={flowStyle}
            />
          </div>
          <img src={pipeFront} className="pipe-front"/>
        </div>
        {/*<div className="config-box">*/}
          {/*<button*/}
            {/*onClick={ () => {}}*/}
          {/*>*/}

          {/*</button>*/}
        {/*</div>*/}
      </Fragment>
    );
  }
}

export default App;
