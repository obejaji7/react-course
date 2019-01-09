import React, { Component } from 'react';

class Input extends Component {

  state = {
    inputValue: ''
  }

  changeName = (e) => {
    const name = e.target.value
    this.setState({ inputValue: name }, () => {
      this.props.handleOnChange(this.state.inputValue);
    });
  }

  render() {
    return (<input type="text" value={this.state.inputValue} onChange={this.changeName} placeholder={this.props.placeholder}/>)
  }
}

const Button = (props) => {
  return (
    <button type="button" onClick={props.handleOnClick}>Show Fullname</button>
  )
}

const ShowFullname = (props) => {
  return (
    <div>Hola {props.fullname}, que tal estais?</div>
  )
}

class Excercice1 extends Component {

  state = {
    name: null,
    lastname: null,
    fullname: null
  };

  setName = (name) => {
    this.setState({ name });
  }

  setLastname = (lastname) => {
    this.setState({ lastname });
  }

  setFullname = () => {
    this.setState((state) => ({ fullname: `${state.name} ${state.lastname}`}))
  }

  render() {
    return(
      <div>
        <Input handleOnChange={this.setName} placeholder="Nombre"/>
        <Input handleOnChange={this.setLastname} placeholder="Apellido"/>
        <Button handleOnClick={this.setFullname}/>
        <ShowFullname fullname={this.state.fullname}/>
      </div>
    )
  }
}

export default Excercice1;