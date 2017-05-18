import React, { Component } from 'react';
import './App.css';

function TextView(props) {
  if (!props.text) {
    return null;
  }

  return (
    <pre>
      {props.text}
    </pre>
  );
}


class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0, direction: 'N', text: 'AAAAA'};
  }
  render() {
    return (
      <div>
        <h1>Looking {this.state.direction} from {this.state.x},{this.state.y}.</h1>
        <TextView text={this.state.text} />
        <b>w:</b> forward<br/>
        <b>a:</b> left<br/>
        <b>d:</b> right<br/>
        <b>s:</b> backward<br/>
      </div>
    );
  }
}

class Maze extends Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0, direction: 'N', text: 'AAAAA'};
  }

  handleClick = (e) => {
    this.setState({x: 4});
  }

  handleKeyDown = (e) => {
    this.setState({direction: 'S'});
    this.setState({x: 2});
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <ChildComponent handleKeyDown={() => this.handleKeyDown()} />
    );
  }
}

export default Maze;
