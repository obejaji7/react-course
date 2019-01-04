import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <div>Author Quiz</div>
        <Sum a={5} b={2}></Sum>
      </div>
    );
  }
}

export default AuthorQuiz;
