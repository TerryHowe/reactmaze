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

  goForward = (prevState) => {
    switch (prevState.direction) {
    case 'N':
      return({y: prevState.y+1});
    case 'E':
      return({x: prevState.x+1});
    case 'S':
      return({y: prevState.y-1});
    default:
      return({direction: 'W', x: prevState.x-1});
    }
  }

  goBackward = (prevState) => {
    switch (prevState.direction) {
    case 'N':
      return({y: prevState.y-1});
    case 'E':
      return({x: prevState.x-1});
    case 'S':
      return({y: prevState.y+1});
    default:
      return({direction: 'W', x: prevState.x+1});
    }
  }

  goLeft = (prevState) => {
    switch (prevState.direction) {
    case 'N':
      return({direction: 'W'});
    case 'E':
      return({direction: 'N'});
    case 'S':
      return({direction: 'E'});
    default:
      return({direction: 'S'});
    }
  }

  goRight = (prevState) => {
    switch (prevState.direction) {
    case 'N':
      return({direction: 'E'});
    case 'E':
      return({direction: 'S'});
    case 'S':
      return({direction: 'W'});
    default:
      return({direction: 'N'});
    }
  }

  handleKeyDown = (e) => {
    switch (e.key) {
    case 'w':
      this.setState(prevState => (this.goForward(prevState)));
      break;
    case 'a':
      this.setState(prevState => (this.goLeft(prevState)));
      break;
    case 's':
      this.setState(prevState => (this.goBackward(prevState)));
      break;
    case 'd':
      this.setState(prevState => (this.goRight(prevState)));
      break;
    default:
      break;
    }
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
