import React from 'react';


const VIEW = `
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
                                 
`;
const LEFT = `
 \\                               
  \\                              
   +                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   +                             
  /                              
 /                               
`;
/*
const RIGHT = `
                                /
                               / 
                              +  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              +  
                               \\ 
                                \\
`;
const FORWARD = `
                                 
                                 
   +--------------------------+  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   |                          |  
   +--------------------------+  
                                 
                                 
`;
const LEFT_FORWARD_RIGHT = `
                                 
                                 
 --+                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
   |                             
 --+                             
                                 
                                 
`;
const RIGHT_FORWARD_LEFT = `
                                 
                                 
                              +--
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              |  
                              +--
                                 
                                 
`;
const FORWARD_FORWARD = `
                                 
                                 
                                 
                                 
                                 
      +--------------------+     
      |                    |     
      |                    |     
      |                    |     
      |                    |     
      |                    |     
      |                    |     
      |                    |     
      +--------------------+     
                                 
                                 
                                 
                                 
                                 
`;
const FORWARD_LEFT = `
                                 
                                 
   +                             
   |\\                            
   | \\                           
   |  +                          
   |  |                          
   |  |                          
   |  |                          
   |  |                          
   |  |                          
   |  |                          
   |  |                          
   |  +                          
   | /                           
   |/                            
   +                             
                                 
                                 
`;
const FORWARD_RIGHT = `
                                 
                                 
                              +  
                             /|  
                            / |  
                           +  |  
                           |  |  
                           |  |  
                           |  |  
                           |  |  
                           |  |  
                           |  |  
                           |  |  
                           +  |  
                            \\ |  
                             \\|  
                              +  
                                 
                                 
`;
const FORWARD_LEFT_FORWARD_RIGHT = `
                                 
                                 
                                 
                                 
                                 
    --+                          
      |                          
      |                          
      |                          
      |                          
      |                          
      |                          
      |                          
    --+                          
                                 
                                 
                                 
                                 
                                 
`;
const FORWARD_RIGHT_FORWARD_LEFT = `
                                 
                                 
                                 
                                 
                                 
                           +--   
                           |     
                           |     
                           |     
                           |     
                           |     
                           |     
                           |     
                           +--   
                                 
                                 
                                 
                                 
                                 
`;
*/

function TextView(props) {
  if (!props.rooms) {
    return null;
  }

  let room = props.rooms[props.x][props.y];
  let direction = props.direction;
  let t = [VIEW.split("")]
  let left_room = room.goLeft(direction)
  forward_room = room.go_forward(direction)
/*
  right_room = room.go_right(direction)
*/
  if (typeof left_room === 'undefined') {
    t.push(LEFT.split(""))
  }
/*
  } else {
    if (typeof left_room.go_forward(direction) === 'undefined') {
      t.append(LEFT_FORWARD_RIGHT)
    }
  }
*/
  if (typeof forward_room === 'undefined') {
    t.append(FORWARD)
  } else {
/*
    forward_left_room = forward_room.go_left(direction)
    if (typeof forward_left_room === 'undefined') {
      t.append(FORWARD_LEFT)
    } else {
      if (typeof forward_left_room.go_forward(direction) === 'undefined') {
        t.append(FORWARD_LEFT_FORWARD_RIGHT)
      }
    }
    if (typeof forward_room.go_forward(direction) === 'undefined') {
      t.append(FORWARD_FORWARD)
    }
    forward_right_room = forward_room.go_right(direction)
    if (typeof forward_right_room === 'undefined') {
      t.append(FORWARD_RIGHT)
    } else {
      if (typeof forward_right_room.go_forward(direction) === 'undefined') {
        t.append(FORWARD_RIGHT_FORWARD_LEFT)
      }
    }
/*
  }
/*
  if (typeof right_room === 'undefined') {
    t.append(RIGHT)
  } else {
    if (typeof right_room.go_forward(direction) === 'undefined') {
      t.append(RIGHT_FORWARD_LEFT)
    }
  }
*/
  let zip= rows=>rows[0].map((_,c)=>rows.map(row=>row[c]))
  let z = zip(t);
  let result = z.map(row => {return row.reduce((a,b) => {return a>b?a:b;})});

  return (
<pre>
{result}
</pre>
  );
}

module.exports = TextView;
