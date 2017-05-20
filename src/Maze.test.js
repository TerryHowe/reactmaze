import React from 'react';
import ReactDOM from 'react-dom';
import Maze from './Maze';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Maze />, div);
});
