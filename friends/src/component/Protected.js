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

  return (
    <>
      <div> Hello from Protected.  You made it past security, killbots have been dispatched</div>
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
