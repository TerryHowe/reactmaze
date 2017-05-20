class Passage {
  constructor(passage) {
    this.id = passage.id;
    this.source_id = passage.source_id;
    this.destination_id = passage.destination_id;
    this.direction = passage.direction;
  }

  toString = () => {
    return(this.destination_id.toString() + "," + this.direction.toString());
  }
}

module.exports = Passage;
