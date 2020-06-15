# sneak-flix
Sneakflix is an application inspired by Netflix for taking a 'sneak peak' at current or upcoming trailers

## Features
* The application utilizes a backend database as well as amazon-web-services for optimal performance. 
* Logging in is secured through bcrypt storing only hashed passwords in the database. 
* Privacy is secured through JTW tokens. 

## Challenges
Currently the application is still in progress and this is due to a few challenges that I ran across. 
1. Playing sound on hover is blocked by google chrome so users must currently click on an area of the page due to their new 
  video autoplay policy. If a user is already interacting with the application before hovering to a video this is not a problem.
  The solution would be to display an 'unmute' button feature allowing users to click unmute if they want the video sound to play 
  right away. 
  
2. Styling the carousel feature with react took some serious css and help from the pure css library. It is still not quite perfect,
however I will be working improving this feature. 

3. Connecting the redux store using certain libraries like '@reduxtoolkit' was troubling as my middleware functions would at times 
throw errors and not store data in the state and even not fetch data from the backend server. The solution was utilizing thunks
rather than the built in middleware libraries that come with reduxtoolkit. More reading into the documentation should solve future
issues if using the library. 

4. Most of the challenges really we're based on styling and managing the data through props, but the redux store really made it simple
to pass props to any of the children so it was not too much or a worry. 
