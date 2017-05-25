/**
 * Created by Arya on 5/22/2017.
 */
import React, { Component } from 'react';

class SubmitForm extends Component{
    render(){
        return(
            (this.props.showBtn) ?
            <button onClick={() => this.props.onClick()}>SUBMIT</button> :
            <button onClick={() => this.props.onClick()}>Please wait..</button>
        );
    }
}

export default SubmitForm;
