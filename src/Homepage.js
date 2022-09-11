import React, { useState } from "react";
import { Navigate, Redirect, useNavigate } from "react-router-dom";

function Homepage() {
  const [username, setusername] = useState("");
  const navigate = useNavigate();
  const handleInput = () => {
    console.log("Enter username: " + username);
    let path = `/about/${username}`;
    navigate(path);
  };
  return (
    <>
      <h1>Homepage</h1>
      <input
        type="text"
        placeholder="enter username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <button onClick={handleInput}>send</button>
    </>
  );
}
export default Homepage;
