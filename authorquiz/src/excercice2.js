import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Sum({a, b}) {
    return (
        <h3>{a} + {b} = {Number(a) + Number(b)}</h3>
    )
}

function ConditionalDisplay({isVisible, children}) {
    return(
        <div>
            {isVisible ? children : null}
        </div>
    )
}

ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
}

class Excercice2 extends Component {
    render() {
        return(
            <ConditionalDisplay isVisible={true}>
                <h1>
                    <span>Sum</span>
                </h1>
                <Sum a={5} b={10}/>
            </ConditionalDisplay>
        )
    }
}

export default Excercice2;