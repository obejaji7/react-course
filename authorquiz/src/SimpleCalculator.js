import React, { Component } from 'react';

class Input extends Component {
    state = {
        inputValue: 0
    }

    setDigit = (e) => {
        this.setState({
            inputValue: e.target.value
        }, () => this.props.setDigit(this.state.inputValue));
    }

    render() {
        return (<input className="form-control mx-2" value={this.state.inputValue} onChange={this.setDigit} placeholder={this.props.placeholder} type="number"/>)
    }
}

class Operator extends Component {
    state = {
        operator: ''
    }

    setOperator = (e) => {
        this.setState({
            operator: e.target.value
        }, () => this.props.setOperator(this.state.operator));
    }

    render() {
        return(
            
            <select onChange={this.setOperator} className="form-control mx-2">
                <option value=""></option>
                <option value="+">Suma</option>
                <option value="-">Resta</option>
                <option value="*">Multiplicación</option>
                <option value="/">División</option>
            </select>
        )
    }
}

class Button extends Component {

    calculateOperation = () => {
        let result = 0;
        switch(this.props.operator) {
            case '+':
                result = Number(this.props.num1) + Number(this.props.num2);
                break;
            case '-':
                result = Number(this.props.num1) + Number(this.props.num2);
                break;
            case '*':
                result = Number(this.props.num1) + Number(this.props.num2);
                break;
            case '/':
                result = Number(this.props.num1) + Number(this.props.num2);
                break;
            default:
                result = 0;
        }
        this.props.calculateOperation(result);
    }

    render() {
        return(<button onClick={this.calculateOperation} className="btn btn-primary mx-2" type="button">Calcular</button>)
    }
}

function Result(props) {
    let message = '';
    let textClass = 'text-success font-weight-bold p-0 m-0';
    
    if (isNaN(props.result)) {
        message = 'La operación no es valida';
        textClass = textClass.replace('success', 'danger');
    }
    else if(props.result) {
        message = `El resultado de la operación es ${props.result}`;
    }

    return(
        <p className={textClass}>{message}</p>
    )
}

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        operation: null,
        result: 0
    }

    setFirstDigit = (num1) => {
        this.setState({
            num1
        });
    }

    setSecondDigit = (num2) => {
        this.setState({
            num2
        });
    }

    setOperation = (operation) => {
        this.setState({
            operation
        });
    }

    calculateOperation = (result) => {
        this.setState({
            result
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="form-inline d-flex justify-content-center align-items-center py-3">
                    <Input setDigit={this.setFirstDigit} placeholder="Digito 1"/>
                    <Operator setOperator={this.setOperation} />
                    <Input setDigit={this.setSecondDigit}  placeholder="Digito 2"/>
                    <Button num1={this.state.num1} num2={this.state.num2} operator={this.state.operation} calculateOperation={this.calculateOperation}/>
                    <Result result={this.state.result}/>
                </div>
            </div>
        )
    }
}

export default Calculator;