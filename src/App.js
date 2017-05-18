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


class Maze extends Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0, direction: 'N', text: 'AAAAA'};
  }

  handleKeyDown = (e) => {
    this.setState({direction: 'S'});
    alert(e.key);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
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

export default Maze;
