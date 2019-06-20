import React from "react";
import { connect } from "react-redux";
//import axios from "axios"
import { getFriends, addFriend } from "../action/action";

export class FriendsList extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
    id: Math.random()
  };

  componentDidMount() {
    this.props.getFriends();
    console.log(this.props.friends);
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <>
        Hello from FriendsList
        {this.props.friends.map(friend => (
          <>
            <h4>Name: {friend.name}</h4>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
          </>
        ))}
        <form
          onSubmit={() => {
            this.props.addFriend({ ...this.state });
          }}
        >
          <input
            type="text"
            placeholder="Enter New Friend"
            value={this.state.name}
            name="name"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Enter Age"
            value={this.state.age}
            name="age"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="Enter email"
            value={this.state.email}
            name="email"
            onChange={this.changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends, addFriend }
)(FriendsList);
