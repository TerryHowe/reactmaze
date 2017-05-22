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

/*
  def render(room, direction)
    t = [VIEW]
    left_room = room.go_left(direction)
    forward_room = room.go_forward(direction)
    right_room = room.go_right(direction)
    if left_room.nil?
      t.append(LEFT)
    else
      if left_room.go_forward(direction).nil?
        t.append(LEFT_FORWARD_RIGHT)
      end
    end
    if forward_room.nil?
      t.append(FORWARD)
    else
      forward_left_room = forward_room.go_left(direction)
      if forward_left_room.nil?
        t.append(FORWARD_LEFT)
      else
        if forward_left_room.go_forward(direction).nil?
          t.append(FORWARD_LEFT_FORWARD_RIGHT)
        end
      end
      if forward_room.go_forward(direction).nil?
        t.append(FORWARD_FORWARD)
      end
      forward_right_room = forward_room.go_right(direction)
      if forward_right_room.nil?
        t.append(FORWARD_RIGHT)
      else
        if forward_right_room.go_forward(direction).nil?
          t.append(FORWARD_RIGHT_FORWARD_LEFT)
        end
      end
    end
    if right_room.nil?
      t.append(RIGHT)
    else
      if right_room.go_forward(direction).nil?
        t.append(RIGHT_FORWARD_LEFT)
      end
    end
    r3 = (t.map{|x| x.split("")}).transpose
    return (r3.map{|x| x.max}).join("")
  end
end
*/
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
