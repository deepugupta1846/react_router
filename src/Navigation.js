import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <div>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about/username" style={{ marginRight: "10px" }}>
          About
        </Link>
      </div>
    </>
  );
}
export default Navigation;
