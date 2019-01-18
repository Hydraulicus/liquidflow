import React from "react";
import pipeFront from "./pipe_front.svg";
import "./index.css";

export default props => (
  <div className="pipe">
    {props.children}
    <img src={pipeFront} className="pipe-front" alt="pipe"/>
  </div>
  )