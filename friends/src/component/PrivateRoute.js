// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";
// import Protected from "./Protected";

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/" />
//     }
//   />
// );

// const PrivateRoute = ({ component: Component, props, ...rest}) => (
//   <Route to={props.path}
//    // {...rest}
//     render={props =>
//       localStorage.getItem("token") ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/" />
//       )
//     }
//   />
// );

// export default PrivateRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const Component = props.component;
  return (
    <Route to={props.path}
      render={ownprops =>
        localStorage.getItem('token') ? (
          <Component {...ownprops} />
        ) : (
          <Redirect to="/login" />
        )}
    />
  );
};

export default PrivateRoute;
