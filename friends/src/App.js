import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Protected from "./component/Protected";
import Login from "./component/Login";
import FormikLoginForm from "./component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Protected} />
      </Router>
    </div>
  );
}

export default App;
