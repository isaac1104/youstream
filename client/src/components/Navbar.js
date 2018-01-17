import React from "react";

const Navbar = () => {

  const style = {
    navbar: {
      height: "60px"
    }
  }

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark" style={style.navbar}>
      <h1 className="navbar-brand">YOUSTREAM</h1>
    </nav>
  );
}

export default Navbar;
