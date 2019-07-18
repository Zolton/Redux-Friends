import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  PrivateRoute
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Protected} />
        
      </Router>
    </div>
  );
}

export default App;
