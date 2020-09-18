import React, {Component} from 'react';
import Header from "./Component/header";
import Tables from "./Component/tables";
import {refStringGen} from "./randomRefStringGen";

/*
TODO: Algorithms chooser
      Animation enabler
      Algorithm Information
      Outside the box (memory swapped out)
      Table font
*/
class App extends Component{
    state = {
        referenceInputTextField : "0,2,3,1,2,1,4,5,6,2,4,5,3,2,3,8,5,7,2,0,6,4,1,9",
        referenceString : ["0", "2", "3", "1", "2", "1", "4", "5", "6", "2", "4", "5", "3", "2", "3", "8", "5", "7", "2", "0", "6", "4", "1", "9"],
        frameNumber : 4,
        resetTurns: 4
    }

    handleRefChange = ({target}) => {
        let {value} = target;
        if (value.match(/^$|^[0-9,]+$/) && !value.match(/,,+,*|[0-9][0-9]+[0-9]*/g)) {
                let tempReferenceString = [...value.split(",")];
                let filteredReferenceString = tempReferenceString.filter((value, index, array) => value !== "");
                this.setState({referenceInputTextField: value, referenceString: filteredReferenceString});
        }
    }

    handleFrameChange = ({target}) =>{
        if(target.value < 10)
            this.setState({frameNumber: target.value});
    }

    handleResetTurnsChange = ({target}) => {
        if (target.value < 10)
            this.setState({resetTurns: target.value});
    }

    handleRefStringGenClick = () => {
        let tempReferenceStringInput =  refStringGen(30,9);
        let tempReferenceString = [...tempReferenceStringInput.split(",")];
        let filteredReferenceString = tempReferenceString.filter((value, index, array) => value !== "");
        this.setState({referenceInputTextField: tempReferenceStringInput, referenceString: filteredReferenceString});
    }

    render() {
        let {frameNumber, resetTurns, referenceString, referenceInputTextField} = this.state;
        let {handleRefChange, handleFrameChange, handleResetTurnsChange, handleRefStringGenClick} = this;
        return (
            <main className="container">
                <React.Fragment>
                    <Header
                        handleRefChange={handleRefChange}
                        handleFrameChange={handleFrameChange}
                        handleResetTurnsChange={handleResetTurnsChange}
                        handleRefStringGenClick={handleRefStringGenClick}
                        frameNumber={frameNumber}
                        resetTurns={resetTurns}
                        referenceInputTextField={referenceInputTextField}
                    />
                    <Tables
                        frameNumber={frameNumber}
                        resetTurns={resetTurns}
                        referenceString={referenceString}
                    />
                </React.Fragment>
            </main>
        );
    }
}

export default App;
