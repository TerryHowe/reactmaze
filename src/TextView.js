import React from 'react';

function TextView(props) {
  if (!props.room) {
    return null;
  }

  return (
    <pre>
      {props.room.toString()}
    </pre>
  );
}

module.exports = TextView;
