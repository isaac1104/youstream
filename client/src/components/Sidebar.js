import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const Sidebar = () => {

  return (
    <div className="sidenav">
      <Link to="/about"><Icon name="info circle"/>ABOUT</Link>
    </div>
  );
}

export default Sidebar;
