# React Maze

I've done some node work in the past using express, but I thought I'd like
to give React a try.  I have a couple other implementations of a 3D maze
and this implementation is not a single page application like you'd expect
from React.  A SPA React application would be a pretty good way to implement
a basic 3D maze, but I'm trying to make this application compatible and
similar to other implementations.  There is a spa branch in this repo with
a more reasonable implementation from the React perspective.

                                   /
                                  / 
    --+                          +  
      |\                        /|  
      | \                      / |  
      |  +                    +  |  
      |  |                    |  |  
      |  |                    |  |  
      |  |                    |  |  
      |  |                    |  |  
      |  |                    |  |  
      |  |                    |  |  
      |  |                    |  |  
      |  +                    +  |  
      | /                      \ |  
      |/                        \|  
    --+                          +  
                                  \ 
                                   \


# Start Development Server

   npm start

# Run the Tests

   yarn test

# Bundle Static Files for Production

   yarn build
