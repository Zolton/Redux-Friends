import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Protected from "./Protected";

// Zero clue how this is working or why, it just does
//  DON"T TOUCH THIS CODE - just copy, paste, and be happy it works
// Just change "token" to whatever you're calling the KEY of your token and 
// the Redirect route.

//  Note all the imports to make this work - {Redirect} is a thing

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
