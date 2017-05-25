/**
 * Created by Arya on 5/22/2017.
 */
import React, { Component } from 'react';
import './data-field.css';

class DataField extends Component{

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    render(){
       return(
            <div className="data-field-cell" >
                <label> {this.props.label}: </label>
                <input placeholder={this.props.placeholder}
                       value={this.props.value}
                       onChange={this.onChange}/>
            </div>
            /*<div className="data-field-cell">
                <label>Pole Strength : </label> <input placeholder="enter the strength"/>
            </div>
            <div className="data-field-cell">
                <label>Pole Strength : </label> <input placeholder="enter the strength"/>
            </div>*/

       );
    }

    onChange(event) {
        this.props.onChange(event);
    }
}
export default DataField;
