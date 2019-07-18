import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

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
      <div> Hello from Protected</div>
      {console.log(friends)}

      {friends ? (
        friends.map(friend => (
          <>
            <div>{friend.name}</div>
            <div>{friend.email}</div>
            <div>{friend.age}</div>
          </>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )}
    </>
  );
}

export default Protected;
