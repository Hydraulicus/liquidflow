import React, {Component} from "react";

import {FlowOptions} from "./../../config/index.js";
import InputRange from "react-input-range";
import "./../../react-input-range.css";

import "./../../index.css";


class OptionsBox extends Component {
  static contextType = FlowOptions;

  render() {
    const { centerFlowOptions, sideFlowOptions, onChangeOption } = this.context;
    return (
      <div className="config-box">
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
                onChangeOption({value, name: "centerFlowOptions.particles.number.value"})
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
                onChangeOption({value, name: "centerFlowOptions.particles.move.speed"})
              }}
            />
            <span>Central flow. Random speed</span>
            <input
              type="checkbox"
              name={"centerFlowOptions.particles.move.random"}
              checked={centerFlowOptions.particles.move.random}
              onChange={ value => {
                onChangeOption({value: value.target.checked, name: "centerFlowOptions.particles.move.random"})
              }}
            />
            <div><span>Central flow. Straight direction of speed</span>
              <input
                type="checkbox"
                name={"centerFlowOptions.particles.move.straight"}
                checked={centerFlowOptions.particles.move.straight}
                onChange={ value => {
                  onChangeOption({value: value.target.checked, name: "centerFlowOptions.particles.move.straight"})
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
                onChangeOption({value, name: "sideFlowOptions.particles.number.value"})
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
                onChangeOption({value, name: "sideFlowOptions.particles.move.speed"})
              }}
            />
            <span>Side flow. Random speed</span>
            <input
              type="checkbox"
              name={"sideFlowOptions.particles.move.random"}
              checked={sideFlowOptions.particles.move.random}
              onChange={ value => {
                onChangeOption({value: value.target.checked, name: "sideFlowOptions.particles.move.random"})
              }}
            />
            <div><span>Side flow. Straight direction of speed</span>
              <input
                type="checkbox"
                name={"sideFlowOptions.particles.move.straight"}
                checked={sideFlowOptions.particles.move.straight}
                onChange={ value => {
                  onChangeOption({value: value.target.checked, name: "sideFlowOptions.particles.move.straight"})
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
                onChangeOption({ value: value.target.checked, name: "centerFlowOptions.particles.size.anim.enable" })
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
                onChangeOption({value, name: "centerFlowOptions.particles.size.value"})
              }}
            />
            <span>Central flow color</span>
            <input
              type="color"
              name={"centerFlowOptions.particles.color.value"}
              value={centerFlowOptions.particles.color.value}
              onChange={ value => {
                onChangeOption({value: value.target.value, name: "centerFlowOptions.particles.color.value"})
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
                onChangeOption({value: value.target.checked, name: "sideFlowOptions.particles.size.anim.enable"})
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
                onChangeOption({value, name: "sideFlowOptions.particles.size.value"})
              }}
            />
            <span>Side flow color</span>
            <input
              type="color"
              name={"sideFlowOptions.particles.color.value"}
              value={sideFlowOptions.particles.color.value}
              onChange={ value => {
                onChangeOption({value: value.target.value, name: "sideFlowOptions.particles.color.value"})
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
                onChangeOption({ value: value.target.checked, name: "centerFlowOptions.particles.line_linked.enable" })
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
                onChangeOption({value, name: "centerFlowOptions.particles.line_linked.distance"})
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
                onChangeOption({value, name: "centerFlowOptions.particles.line_linked.width"})
              }}
            />
            <span>Central flow links color</span>
            <input
              type="color"
              name={"centerFlowOptions.particles.line_linked.color"}
              value={centerFlowOptions.particles.line_linked.color}
              onChange={ value => {
                onChangeOption({value: value.target.value, name: "centerFlowOptions.particles.line_linked.color"})
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
                onChangeOption({ value: value.target.checked, name: "sideFlowOptions.particles.line_linked.enable" })
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
                onChangeOption({value, name: "sideFlowOptions.particles.line_linked.distance"})
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
                onChangeOption({value, name: "sideFlowOptions.particles.line_linked.width"})
              }}
            />
            <span>Central flow links color</span>
            <input
              type="color"
              name={"sideFlowOptions.particles.line_linked.color"}
              value={sideFlowOptions.particles.line_linked.color}
              onChange={ value => {
                onChangeOption({value: value.target.value, name: "sideFlowOptions.particles.line_linked.color"})
              }}
            />

          </div>
        </div>
      </div>
    )
  }

}

export default OptionsBox;