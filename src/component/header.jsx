import React, {Component} from "react";
import "font-awesome/css/font-awesome.css"
import {HelpModal} from "./modal";

export default class Header extends Component{
    render() {
        let {handleRefChange, handleFrameChange, handleResetTurnsChange, handleRefStringGenClick, handleSwapToggle,handleAnimationToggle, frameNumber, referenceInputTextField, resetTurns, animationToggle,swapToggle, handleDetailToggle, detailToggle} = this.props;
    return (
        <div>
            <div className="jumbotron bg-transparent">
                <div className="container">
                    <h1 className="display-5">Simulation of Virtual Memory Paging</h1>
                    <p className="lead">Engineered by Jason</p>
                </div>
            </div>
            <div className="input-group mt-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping" data-toggle="tooltip" data-placement="top" title="Enter reference string 0~9 separated with ','">Reference String</span>
                </div>
                <input type="text" name = "referenceInputTextField"  className="form-control" placeholder="Reference string [0-9] separated with ','" value={referenceInputTextField} onChange={handleRefChange.bind(this)}/>
            </div>
            <div className="input-group mt-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping" data-toggle="tooltip" data-placement="top" title="Enter number 3~7">Frame Number</span>
                </div>
                <input ref="frameNumber" type="number" min="3" max="7" className="form-control" placeholder="Frame number [3-7]" value={frameNumber} onChange={handleFrameChange.bind(this)}/>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping" data-toggle="tooltip" data-placement="top" title="For NRU, enter reset clock 0~9">Reset Clock</span>
                </div>
                <input ref="resetTurns" type="number" min="0" max="9" className="form-control" placeholder="Number of reset turns for NRU [0-9]" value={resetTurns} onChange={handleResetTurnsChange.bind(this)}/>
            </div>
            <button type="button" className={"btn btn-danger mt-2 mr-2"} onClick={handleRefStringGenClick}>Generate String</button>
            <button type="button" className={!swapToggle?"btn btn-secondary mt-2 mr-2":"btn btn-outline-secondary mt-2 mr-2"} onClick={handleSwapToggle}>{swapToggle?"Hide swapped out memory" : "Show swapped out memory"}</button>
            <button type="button" className={!animationToggle?"btn btn-success mt-2 mr-2":"btn btn-outline-success mt-2 mr-2"} onClick={handleAnimationToggle}>{animationToggle?"Turn off animation" : "Turn on animation"}</button>
            <button type="button" className={!detailToggle?"btn btn-info mt-2 mr-2":"btn btn-outline-info mt-2 mr-2"} onClick={handleDetailToggle}>{detailToggle?"Hide details" : "Show details"}</button>
            <HelpModal/>
        </div>
    )
    }

}