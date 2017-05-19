module.exports = class Room {
  constructor(room) {
    this.id = room.id;
    this.x = room.x;
    this.y = room.y;
    this.passages = [];
  }

  toString = () => {
    return(this.x.toString() + "," + this.y.toString() + ": " + this.passages.join(';'));
  }
}
