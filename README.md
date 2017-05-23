# React Maze

I've done some node work in the past using express, but I thought I'd like
to give React a try.  This application uses my Rails 3D Maze application
to get the Maze data through a REST interface.  I was going to make this
application compatible with my Ruby and Python 3D maze applications, but
I think that might be too far from the actual purpose of React.

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
