import React from "react";
import { connect } from "react-redux";

export class FriendsList extends React.Component {
    render() {
        return (
            <>
            Hello from FriendsList
            </>
        )
    }
}


const mapStateToProps = state => {
    
}

export default connect (mapStateToProps, {})(FriendsList)