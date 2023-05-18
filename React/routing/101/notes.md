## Browserside Routing

-   Might be faster that serverside routing because the client doesn't have to call the server
-   Chanellege: Handling state throughout the change /
-   Similar to the eventlister and eventhandler relationship: The browswer is listening to an event and when it hears it there's a function that happens
-   React Rooter Dom is the dependencies
-   Wrap the entire application into the Broswer Router after StrictMode // you do have to import it from React
-   In app.js we import navLink, Routes, and Route - from react-router-dom

```javascript
  import {NavLink, Routes, Route } from 'react-router-dom'
  import {Laning} from './views';

  <NavLink to="/"> Home </NavLink>
  <Routes>
    <Route path="/" element={<Landing />}>
  </Routes>
```
