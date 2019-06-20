import React from "react";
import { connect } from "react-redux";
//import axios from "axios"
import {getFriends} from "../action/action"


export class FriendsList extends React.Component {

    componentDidMount (){
        this.props.getFriends()
        console.log(this.props.friends)
    }

    render() {
        return (
            <>
            Hello from FriendsList
            {this.props.friends.map(friend => 
            <>
            <h4>Name: {friend.name}</h4>
            <h4>Age: {friend.age}</h4>
            <h4>Email: {friend.email}</h4>
            </>
                )}
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
    friends: state.friends,
    }
}

export default connect (mapStateToProps, {getFriends})(FriendsList)