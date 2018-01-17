import React from "react";
import { Icon } from "semantic-ui-react";

const Navbar = () => {

  const style = {
    navbar: {
      height: "60px"
    }
  }

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark" style={style.navbar}>
      <h1 className="navbar-brand" style={{fontSize: "24px"}}>
        <Icon name="video play" size="big"/>
        YOUSTREAM
      </h1>
    </nav>
  );
}

export default Navbar;
