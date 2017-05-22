import React, { Component } from 'react';
import './Maze.css';
var Passage = require('./Passage');
var Room = require('./Room');
var TextView = require('./TextView');


class Maze extends Component {
  constructor(props) {
    super(props);
    let room = new Room({x: 0, y: 0})
    this.state = {room: room, direction: 'N'};
  }

  goForward = (prevState) => {
    let room = prevState.room;
    let destination = room.goForward(prevState.direction);
    if (destination) {
      return({room: destination});
    }
    return({});
  }

  goBackward = (prevState) => {
    let room = prevState.room;
    let destination = room.goBackward(prevState.direction);
    if (destination) {
      return({room: destination});
    }
    return({});
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

  makeRooms = (rooms, passages) => {
    var roomMap = {};
    rooms.forEach(r => {
      roomMap[r.getKey()] = r;
      r.addPassages(passages, rooms);
    });
    this.setState({rooms: roomMap, room: roomMap["0,0"]});
  }

  makePassages = (passages) => {
    var that = this;
    fetch('http://localhost:4000/rooms.json')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      var rooms = json.data.map(x => {return new Room(x);});
      that.makeRooms(rooms, passages);
    })
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
    var that = this;
    fetch('http://localhost:4000/passages.json')
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      var passages = json.data.map(x => {return new Passage(x);});
      that.makePassages(passages);
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    let p = location.pathname.split('/');
    let room = this.state.room;
    let rooms = this.state.rooms
    let direction = this.state.direction;
    if ((p.length === 4) && (rooms)) {
      let x = p[1];
      let y = p[2];
      direction = p[3];
      if (this.state.rooms[x + "," + y]) {
        room = this.state.rooms[x + "," + y];
      }
    }
    let coords = room.x.toString() + "," + room.y.toString();
    return (
      <div>
        <h1>Looking {direction} from {coords}.</h1>
        <TextView room={room} direction={direction}/>
        <b>w:</b> forward<br/>
        <b>a:</b> left<br/>
        <b>d:</b> right<br/>
        <b>s:</b> backward<br/>
      </div>
    );
  }
}

export default Maze;
