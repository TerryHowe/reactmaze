import React, { Component } from 'react';
import './App.css';

function TextView(props) {
  if (!props.rooms) {
    return null;
  }

  const listRooms = props.rooms.map((room) =>
    <li key={room.id}>{room.toString()}</li>
  );
  return (
    <ul>
      {listRooms}
    </ul>
  );
}


class Room {
  constructor(room) {
    this.id = room.id;
    this.x = room.x;
    this.y = room.y;
    this.passages = [];
  }

  addPassage = (passage) => {
    this.passages = passage;
  }

  toString = () => {
    let listPassages = this.passages.forEach((passage) =>
      passage.toString()
    );
    return(this.id.toString() + ": " + this.x.toString() + "," + this.y.toString() + " " + listPassages);
  }
}

class Passage {
  constructor(passage) {
    this.id = passage.id;
    this.source_id = passage.source_id;
    this.destination_id = passage.destination_id;
    this.direction = passage.direction;
  }

  toString = () => {
    return(this.source_id.toString() + ": " + this.destination_id.toString() + "," + this.direction.toString());
  }
}

class Maze extends Component {
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 0, direction: 'N'};
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
      return;
    }
    return;
  }

  makeRooms = (data) => {
    var rs = [];
    data.forEach(room => {
      let r = new Room(room);
      rs[r.id] = r;
    });
    this.setState({rooms: rs});
  }

  makePassages = (data) => {
    var ps = [];
    data.forEach(passage => {
      let p = new Passage(passage);
      ps.push(p);
    });
    this.setState({passages: ps});
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    var that = this;
    fetch('http://localhost:4000/rooms.json')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      that.makeRooms(json.data);
    })

    fetch('http://localhost:4000/passages.json')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      that.makePassages(json.data);
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <h1>Looking {this.state.direction} from {this.state.x},{this.state.y}.</h1>
        <TextView rooms={this.state.passages} />
        <b>w:</b> forward<br/>
        <b>a:</b> left<br/>
        <b>d:</b> right<br/>
        <b>s:</b> backward<br/>
      </div>
    );
  }
}

export default Maze;
