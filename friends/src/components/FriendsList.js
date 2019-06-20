import React from "react";
import { connect } from "react-redux";
//import axios from "axios"
import {getFriends} from "../action/action"


export class FriendsList extends React.Component {

    componentDidMount (){
        this.props.getFriends()
    }

    render() {
        return (
            <>

        {/* if (this.props.FRIENDS_FETCH      ) {
      
      return <h1> Hold your horses, it's loading</h1>
    } */}
            Hello from FriendsList
            {this.props.friends}
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