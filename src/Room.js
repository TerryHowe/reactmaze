class Room {
  constructor(room) {
    this.id = room.id;
    this.x = room.x;
    this.y = room.y;
    this.passages = {};
  }

  toString = () => {
    var passageString = Object.keys(this.passages);
    return(this.x.toString() + "," + this.y.toString() + ": " + passageString);
  }

  addDestination = (passages) => {
    passages.forEach(passage => {
      if (this.id === passage.destination_id) {
        passage.destination = this;
      }
    })
  }

  addPassages = (passages) => {
    passages.forEach(passage => {
      if (this.id === passage.source_id) {
        this.passages[passage.getDirection()] = passage.destination;
      }
    })
  }

  getBackwardDirection = (direction) => {
    switch (direction) {
    case 'N':
      return('S');
    case 'E':
      return('W');
    case 'S':
      return('N');
    default:
      return('E');
    }
  }

  getLeftDirection = (direction) => {
    switch (direction) {
    case 'N':
      return('W');
    case 'E':
      return('N');
    case 'S':
      return('E');
    default:
      return('S');
    }
  }

  goForward = (direction) => {
    return(this.passages[direction]);
  }

  goBackward = (direction) => {
    return(this.passages[this.getBackwardDirection(direction)]);
  }

  goLeft = (direction) => {
    return(this.passages[this.getLeftDirection(direction)]);
  }
}

module.exports = Room;
