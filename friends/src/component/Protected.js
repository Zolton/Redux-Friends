import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import NewFriend from "./NewFriend";

function Protected() {
  const [friends, setFriends] = useState();
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      });
  }, []);

// I adore this ternary.  Renders "Loading" or whatever you want to insert, even a loading bar on first pass.  Without
// this ternary, it'll break after friends is empty the first time around
//  Ternary buys GET time to fill friends with data

// Note - passing setState down to props for use re-rendering

  return (
    <>
      <div>
        Hello from Protected. You made it past security, killbots have been
        dispatched
      </div>
      {console.log(friends)}

      {friends ? (
        friends.map(friend => (
          <>
            <h4>Friend Name: {friend.name}</h4>
            <h4>Friend Email: {friend.email}</h4>
            <h4>Friend Age: {friend.age}</h4>
          </>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )}
      <NewFriend setFriends={setFriends} />
    </>
  );
}

export default Protected;
