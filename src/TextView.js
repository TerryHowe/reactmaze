import React from 'react';

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

module.exports = TextView;
