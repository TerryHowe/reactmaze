import React from 'react';

function TextView(props) {
  if (!props.rooms) {
    return null;
  }

  return (
    <pre>
      {props.rooms[props.x][props.y].toString()}
    </pre>
  );
}

module.exports = TextView;
