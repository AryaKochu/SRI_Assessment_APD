/**
 * Created by Arya on 5/24/2017.
 */

import React, { Component } from 'react';
import './report-table.css'

class Report extends Component{

    render(){
        return (
            <div className="container" >
                <h4 className="title"> SUMMARY TABLE </h4>
                <div className="summary-container">
                    <div className="wrap heading">
                        <div className="cell">Pole Strength</div>
                        <div className="cell">Angle</div>
                        <div className="cell">HV/LV</div>
                        <div className="cell">Drops</div>
                    </div>
                    <div className="wrap">
                        <div className="cell">40N</div>
                        <div className="cell">50</div>
                        {/*<div className="cell">&nbsp;</div>*/}
                        <div className="cell">HV</div>
                        <div className="cell">3</div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Report;
