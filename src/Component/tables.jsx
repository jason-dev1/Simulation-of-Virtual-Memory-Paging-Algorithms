import React, {Component} from "react";
import Table from "./table";
import {firstInFirstOut, notRecentlyUsed, aging , notFrequentlyUsed, secondChance, leastRecentlyUsed} from "../algorithms";


export default class Tables extends Component{
    state ={
        algorithms : [
            {name : "First In First Out: ", f : firstInFirstOut},
            {name : "Least Recently Used: ", f : leastRecentlyUsed},
            {name : "Aging: ", f : aging},
            {name : "Not Frequently Used: ", f : notFrequentlyUsed},
            {name : "Second Chance: ", f : secondChance},
            {name : "Not Recently Used: ", f : notRecentlyUsed}]
    }
    render(){
        let {referenceString, frameNumber, resetTurns} = this.props;
        let referenceMap = new Map();
        referenceMap.set("0", "table-primary");
        referenceMap.set("1", "table-secondary");
        referenceMap.set("2", "table-info");
        referenceMap.set("3", "table-warning");
        referenceMap.set("4", "table-danger");
        referenceMap.set("5", "table-success");
        referenceMap.set("6", "table-add-0");
        referenceMap.set("7", "table-add-1");
        referenceMap.set("8", "table-add-2");
        referenceMap.set("9", "table-add-3");
        return this.state.algorithms.map( a => <Table key={a['name']} colorMap={referenceMap} frameNumber={frameNumber} resetTurns={resetTurns} referenceString={referenceString} algorithmLabel={a['name']} algorithm={a['f']}/>);
    }
}