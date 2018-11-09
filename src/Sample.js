import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import './app.less';

class Slider extends Component {
  render() {
    return (
      <input ref="range" type="range" min="0" max="255" defaultValue="255" onChange={this.props.update} />
    )
  }
}

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 255,
      green: 255,
      blue: 255
    };
  }

  update = () => {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.range).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.range).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.range).value
    });

    const color = 'rgb(' + this.state.red + ', ' + this.state.green + ', ' + this.state.blue + ')';
		document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div>
        <label className="slider">R: </label>
        <Slider ref="red" update={this.update} />
        <label className="slider">{this.state.red}</label>
        <br/>
        <label className="slider">G: </label>
        <Slider ref="green" update={this.update} />
        <label className="slider">{this.state.green}</label>
        <br/>
        <label className="slider">B: </label>
        <Slider ref="blue" update={this.update} />
        <label className="slider">{this.state.blue}</label>
      </div>
    )
  }
}

export default Sample;
