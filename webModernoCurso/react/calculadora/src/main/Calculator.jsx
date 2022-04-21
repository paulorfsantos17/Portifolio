import React, {Component} from 'react'
import './Calculator.css'

import Button from '../components/Buttons'
import Display from '../components/Display'
import { isNaN } from 'lodash'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}


    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation){
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            console.log(this.state.values)
            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
            } catch(e) {
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue , clearDisplay: false})

        if(n !== ".") {
            const i =this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }    
    }



    render(){
   
       return (
            <div className="calculator" >
                <Display value={this.state.displayValue} />
                <Button click={ this.clearMemory} label="AC" triple />
                <Button click={this.setOperation} label="/"  operation/>
                <Button click={this.addDigit} label="7"  />
                <Button click={this.addDigit} label="8"/>
                <Button click={this.addDigit} label="9"/>
                <Button click={this.setOperation} label="*" operation/>
                <Button click={this.addDigit} label="4"/>
                <Button click={this.addDigit} label="5"/>
                <Button click={this.addDigit} label="6"/>
                <Button click={this.setOperation} label="-" operation/>
                <Button click={this.addDigit} label="1"/>
                <Button click={this.addDigit} label="2"/>
                <Button click={this.addDigit} label="3"/>
                <Button click={this.setOperation} label="+" operation/>
                <Button click={this.addDigit} label="0" double/>
                <Button click={this.addDigit} label="."/>
                <Button click={this.setOperation} label="=" operation/>
               
             
            </div>
        )
    }
}