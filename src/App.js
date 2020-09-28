import React, {Component} from 'react';
import Header from "./component/header";
import Tables from "./component/tables";
import {refStringGen} from "./utils/randomRefStringGen";
import "font-awesome/css/font-awesome.css"
import List from "./component/list";
import {
    aging,
    firstInFirstOut,
    leastRecentlyUsed,
    notFrequentlyUsed,
    notRecentlyUsed,
    secondChance
} from "./algorithms";

class App extends Component{
    state = {
        referenceInputTextField : "0,2,3,1,2,1,4,5,6,2,4,5,3,2,3,8,5,7,2,0,6,4,1,9",
        referenceString : ["0", "2", "3", "1", "2", "1", "4", "5", "6", "2", "4", "5", "3", "2", "3", "8", "5", "7", "2", "0", "6", "4", "1", "9"],
        frameNumber : 4,
        resetTurns: 4,
        swapToggle: false,
        animationToggle: true,
        detailToggle: false,
        selectedAlgorithm: {name: "Show All"},
    }

    handleRefChange = ({target}) => {
        let {value} = target;
        if (value.match(/^$|^[0-9,]+$/) && !value.match(/,,+,*|[0-9][0-9]+[0-9]*/g)) {
                let tempReferenceString = [...value.split(",")];
                let filteredReferenceString = tempReferenceString.filter((value) => value !== "");
                this.setState({referenceInputTextField: value, referenceString: filteredReferenceString});
        }
    }

    handleFrameChange = ({target}) =>{
        if((target.value <= 7 && target.value >=3) || target.value == 0)
            this.setState({frameNumber: target.value});
    }

    handleResetTurnsChange = ({target}) => {
        if (target.value <= 9 && target.value >= 0)
            this.setState({resetTurns: target.value});
    }

    handleSwapToggle = () => {
        this.setState({swapToggle: !this.state.swapToggle});
    }

    handleRefStringGenClick = () => {
        let tempReferenceStringInput =  refStringGen(24,9);
        let tempReferenceString = [...tempReferenceStringInput.split(",")];
        let filteredReferenceString = tempReferenceString.filter((value) => value !== "");
        this.setState({referenceInputTextField: tempReferenceStringInput, referenceString: filteredReferenceString});
    }

    handleAnimationToggle = () =>{
        this.setState({animationToggle: !this.state.animationToggle});
    }

    handleDetailToggle = () =>{
        this.setState({detailToggle: !this.state.detailToggle});
    }

    handleListChange = (algorithm) => {
        this.setState({selectedAlgorithm:algorithm});
    }


    render() {
        let {frameNumber, resetTurns, referenceString, referenceInputTextField, swapToggle, animationToggle, detailToggle, selectedAlgorithm} = this.state;
        let {handleRefChange, handleFrameChange, handleResetTurnsChange, handleRefStringGenClick, handleAnimationToggle, handleSwapToggle, handleListChange, handleDetailToggle} = this;
        const algorithms = [
            {name : "Show All"},
            {name : "First In First Out", f : firstInFirstOut},
            {name : "Second Chance", f : secondChance},
            {name : "Least Recently Used", f : leastRecentlyUsed},
            {name : "Not Recently Used", f : notRecentlyUsed},
            {name : "Not Frequently Used", f : notFrequentlyUsed},
            {name : "Aging (8 bits counter)", f : aging}]
        const filteredAlgorithm = selectedAlgorithm && selectedAlgorithm['f']? algorithms.filter(a => a['name'] === selectedAlgorithm['name']) : algorithms.filter(a=> a['name'] !== "Show All");
        return (
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Header
                            handleRefChange={handleRefChange}
                            handleFrameChange={handleFrameChange}
                            handleResetTurnsChange={handleResetTurnsChange}
                            handleRefStringGenClick={handleRefStringGenClick}
                            handleSwapToggle={handleSwapToggle}
                            handleAnimationToggle={handleAnimationToggle}
                            handleDetailToggle={handleDetailToggle}
                            detailToggle={detailToggle}
                            frameNumber={frameNumber}
                            resetTurns={resetTurns}
                            referenceInputTextField={referenceInputTextField}
                            animationToggle={animationToggle}
                            swapToggle={swapToggle}
                        />
                    </div>
                    <div className="col-3 mt-2 list-group-outer-padding">
                        <List algorithms={algorithms} handleListChange={handleListChange} selectedAlgorithm={selectedAlgorithm}/>
                    </div>
                </div>
                    <div>
                        <Tables
                        frameNumber={frameNumber}
                        resetTurns={resetTurns}
                        referenceString={referenceString}
                        swapToggle={swapToggle}
                        animationToggle={animationToggle}
                        detailToggle={detailToggle}
                        algorithms={filteredAlgorithm}
                    />
                    </div>
            </main>
        );
    }
}

export default App;
