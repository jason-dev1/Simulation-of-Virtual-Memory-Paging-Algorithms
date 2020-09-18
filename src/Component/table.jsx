import React, {Component} from "react";
import _ from "lodash";
import Fade from 'react-reveal/Fade'

export default class Table extends Component{
    render() {
        let {referenceString, frameNumber, algorithmLabel, algorithm, colorMap, resetTurns} = this.props;
        let {pageInMemArray, pageFaults, pageNotInMemArray} = algorithm(referenceString, frameNumber, resetTurns);
        let frameNumberArray = _.range(0, frameNumber, 1);
        return(
            <div>
                <label htmlFor="basic-url">{algorithmLabel}</label>
                <table className="table table-bordered table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Reference:</th>
                            {referenceString.map( r => (
                                <Fade right><th>{r}</th></Fade>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {frameNumberArray.map( f =>(
                        <tr>
                            <th />
                            {pageInMemArray.map( r => (
                                <Fade right><th className={colorMap.get(r[f])}>{r[f]}</th></Fade>
                            ))}
                        </tr>
                    ))}
                    {frameNumberArray.map( f =>(
                        <tr className="thead-light">
                            <th />
                            {pageNotInMemArray.map( r => (
                                <Fade right><th>{r[f]}</th></Fade>
                            ))}
                        </tr>
                    ))}
                    <tr className="thead-dark">
                        <th>Page Fault:</th>
                        {pageFaults.map( f => (
                            <Fade right><th>{f}</th></Fade>
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}