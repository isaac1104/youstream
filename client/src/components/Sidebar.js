import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="sidenav">
      <Link to="/about">ABOUT</Link>
      <Link to="/videos">VIDEOS</Link>
    </div>
  );
}

export default Sidebar;
