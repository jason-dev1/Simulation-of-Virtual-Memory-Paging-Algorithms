import React, {Component} from "react";

export default class List extends Component {
    render(){
        let {algorithms, textProperty, handleListChange, selectedAlgorithm} = this.props;
        return(
            <ul className="list-group">
            {algorithms.map(a=>
                <a href="javascript:void(0);" onClick={()=>handleListChange(a)} className={a['name'] === selectedAlgorithm['name']? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}>{a[textProperty]}</a>) }
            </ul>
        )
    }
};

List.defaultProps = {
    textProperty: "name"
}