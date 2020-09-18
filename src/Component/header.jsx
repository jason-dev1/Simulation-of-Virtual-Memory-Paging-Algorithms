import React,{Component} from "react";

export default class Header extends Component{

    render() {
        let {handleRefChange, handleFrameChange, handleResetTurnsChange, handleRefStringGenClick, frameNumber, referenceInputTextField, resetTurns} = this.props;
    return (
        <div>
            <div className="jumbotron bg-transparent">
                <div className="container">
                    <h1 className="display-5">Simulation of Virtual Memory Paging Algorithms</h1>
                    <p className="lead">Created by Jason. </p>
                </div>
            </div>
            <div className="input-group  mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">Reference String</span>
                </div>
                <input type="text" name = "referenceInputTextField"  className="form-control" placeholder="Please enter reference string [0-9] separated with ','" value={referenceInputTextField} onChange={handleRefChange.bind(this)}/>
            </div>
            <div className="input-group  mb-1">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">Frame Number</span>
                </div>
                <input ref="frameNumber" type="number" min="1" max="5" className="form-control" placeholder="Please enter frame number" value={frameNumber} onChange={handleFrameChange.bind(this)}/>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="addon-wrapping">Reset Turn(s)</span>
                </div>
                <input ref="resetTurns" type="number" min="1" max="10" className="form-control" placeholder="Please enter the number of reset turns for NFU" value={resetTurns} onChange={handleResetTurnsChange.bind(this)}/>
            </div>
            <button type="button" className="btn btn-primary mb-3" onClick={handleRefStringGenClick}>Generate String</button>
        </div>
    )
    }

}