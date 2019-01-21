import React, {Component} from "react";
import {FlowOptions} from "./../../config/index.js";

class OptionsBox extends Component {
  static contextType = FlowOptions;

  render() {
    // console.log(this.context);
    // this.context.onChange( { newProp: "new test"} )
    return (
      <div></div>
    )
  }

}

export default OptionsBox;