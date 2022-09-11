import React from "react";
import { useParams } from "react-router-dom";
function About() {
  let { username } = useParams();
  return (
    <>
      <h1>About page {username}</h1>
    </>
  );
}
export default About;
