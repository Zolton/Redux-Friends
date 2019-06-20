import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import {Login} from "./components/Login"
import FriendsList from "./components/FriendsList"
import Login from './components/Login';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      Hello from App
      <Router>
        <Link to = "/">Login</Link>
        <Link to = "/protected">Friends List</Link>
        <Route exact path = "/" component ={Login} />
        <Route exact path = "/protected" component = {FriendsList} />
      </Router>
    </div>
  );
  }
}


export default App;

