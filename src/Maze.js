import React, { Component } from 'react';
import './Maze.css';
var Passage = require('./Passage');
var Room = require('./Room');
var TextView = require('./TextView');


class Maze extends Component {
  constructor(props) {
    super(props);
    this.state = {direction: 'N'};
  }

  goForward = (prevState) => {
    let room = prevState.room;
    let destination = room.goForward(prevState.direction);
    if (typeof destination === 'undefined') {
      return({});
    }
    return({room: destination});
  }

  goBackward = (prevState) => {
    let room = prevState.room;
    let destination = room.goBackward(prevState.direction);
    if (typeof destination === 'undefined') {
      return({});
    }
    return({room: destination});
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
      if (typeof rs[r.x] === 'undefined') {
        rs[r.x] = [];
      }
      rs[r.x][r.y]= r;
    });
    this.setState({rooms: rs, room: rs[0][0]});

    var that = this;
    fetch('http://localhost:4000/passages.json')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      that.makePassages(json.data);
    })
  }

  makePassages = (data) => {
    var ps = [];
    data.forEach(passage => {
      let p = new Passage(passage);
      ps.push(p);
    });
    this.setState((prevstate) => (this.populate(prevstate.rooms, ps)));
  }

  populate = (rooms, passages) => {
    rooms.forEach(xrooms => {
      xrooms.forEach(yroom => {yroom.addDestination(passages);})
    })
    rooms.forEach(xrooms => {
      xrooms.forEach(yroom => {yroom.addPassages(passages);})
    })
    return({rooms: rooms});
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
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    var coords = "";
    if (typeof this.state.room !== 'undefined') {
        let room = this.state.room;
        coords = room.x.toString() + "," + room.y.toString();
    }
    return (
      <div>
        <h1>Looking {this.state.direction} from {coords}.</h1>
        <TextView room={this.state.room} direction={this.state.direction}/>
        <b>w:</b> forward<br/>
        <b>a:</b> left<br/>
        <b>d:</b> right<br/>
        <b>s:</b> backward<br/>
      </div>
    );
  }
}

export default Maze;
