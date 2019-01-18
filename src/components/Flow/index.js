import React, { Fragment } from "react";
import Particles from "react-particles-js";
import "./index.css";

const flowStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(20, 0, 30, 0.125)`
};

export default props => (
  <Fragment>
    {/*<div className="main-flow">*/}
    {/*<Particles*/}
    {/*params={{...commonFlowOptions}}*/}
    {/*style={{...flowStyle}}*/}
    {/*/>*/}
    {/*</div>*/}
    <div className="center-flow side-flow1">
      <Particles
        params={props.sideFlow}
        style={flowStyle}
      />
    </div>
    <div className="center-flow side-flow2">
      <Particles
        params={props.sideFlow}
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
        params={props.centerStraightFlow}
        style={flowStyle}
      />
    </div>
  </Fragment>
)