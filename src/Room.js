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

  getKey = () => {
    return(this.x.toString() + "," + this.y.toString());
  }

  addPassages = (passages, rooms) => {
    passages.forEach(passage => {
      if (this.id === passage.source_id) {
        var destination = rooms.find(x => x.id === passage.destination_id);
        var direction = passage.direction.toUpperCase()[0];
        this.passages[direction] = destination;
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

  getRightDirection = (direction) => {
    switch (direction) {
    case 'N':
      return('E');
    case 'E':
      return('S');
    case 'S':
      return('W');
    default:
      return('N');
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

  goRight = (direction) => {
    return(this.passages[this.getRightDirection(direction)]);
  }
}

module.exports = Room;
