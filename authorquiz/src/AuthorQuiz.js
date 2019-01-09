import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Excercice1 from './excercice1';
import Calculator from './SimpleCalculator';
import './bootstrap.min.css';

function Sum(props) {
  return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div>
        <Calculator/>
      </div>
    );
  }
}

export default AuthorQuiz;
