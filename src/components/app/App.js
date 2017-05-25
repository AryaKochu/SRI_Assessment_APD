import React, {Component} from 'react';
import logo from '../../assets/img/apd_logo.png';
import DataField from '../data-input-fields/data-field';
import SubmitForm from '../submit/submit';
import Report from '../report-table/report-table'
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            fields: [{
                placeholder: 'enter the value',
                value: ''
            },{
                placeholder: 'enter the value',
                value: ''
            },{
                placeholder: 'enter the value',
                value: ''
            }],
            showSubmitBtn: true
        };
    }

    renderFields(fieldIndex, label) {
        const props = this.state.fields[fieldIndex];
        return (
            <DataField
                label={ label }
                placeholder={ props.placeholder }
                value={ props.value }
                onChange={event => this.handleFieldValueChange(event, fieldIndex)} />);
    }

    renderSubmit(i){
        return (
            <SubmitForm
                value={i}
                showBtn={this.state.showSubmitBtn}
                onClick={() => this.handleSubmit()}/>
        );
    }

    renderReportTable(){
        return <Report/> ;
    }

    handleSubmit() {
        const { fields }  = this.state;
        const showBtn = this.state.showSubmitBtn ? false : true;
        this.setState({showSubmitBtn: showBtn});
        console.log(JSON.stringify(fields));
    }

    handleFieldValueChange(event, fieldIndex) {
        const { fields } = this.state;
        fields[fieldIndex].value = event.target.value;

        this.setState({
            fields
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>SRI Assessment</h2>
                </div>
                <div className="mtp5 data-field-container">
                    { this.renderFields(0, "Pole Strength") }
                    { this.renderFields(1, "angle") }
                    { this.renderFields(2, "HV/LV") }
                </div>
                { this.renderSubmit("SUBMIT") }

                { this.renderReportTable() }
            </div>
        );
    }
}

export default App;
