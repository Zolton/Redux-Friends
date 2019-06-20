import React from "react";
import { connect } from "react-redux";
//import axios from "axios"
import { getFriends, addFriend } from "../action/action";

export class FriendsList extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
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
        <input
          type="text"
          placeholder="Enter New Friend"
          value={this.state.friend.name}
          name="friend"
          onChange={this.changeHandler}
        />
        <button
          onClick={() => {this.props.addFriend(this.state.friend)}}>
          Submit
        </button>
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
