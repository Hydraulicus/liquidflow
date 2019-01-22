import React, {Component, Fragment} from "react";
import _ from "lodash";
import OptionsBox from "./components/OptionsBox"
import Pipe from "./components/Pipe";
import Flow from "./components/Flow";
import {commonFlowOptions, FlowOptions, centerFlowOptions, sideFlowOptions} from "./config/index.js";
import "./index.css";
import "./react-input-range.css";

class App extends Component {
  state = {
    centerFlowOptions,
    sideFlowOptions,
  };

  onChangeOption = ({name, value}) => {
    const newState = _.set({...this.state}, name, value);
    this.setState({...newState});
  };

  render() {

    const { centerFlowOptions, sideFlowOptions} = this.state;

    const centerStraightFlowConfig = _.merge({}, commonFlowOptions,  centerFlowOptions);
    const sideFlow2Config = _.merge({}, commonFlowOptions, sideFlowOptions);
    return (
      <Fragment>
        <Pipe>
          <Flow
            sideFlow={sideFlow2Config}
            centerStraightFlow={centerStraightFlowConfig}
          />
        </Pipe>

        <FlowOptions.Provider value={{...this.state, onChangeOption: this.onChangeOption.bind(this)}}>
        <OptionsBox />
        </FlowOptions.Provider>

      </Fragment>
    );
  }
}

export default App;
