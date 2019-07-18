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
      
    </>
  );
}

export default Protected;
