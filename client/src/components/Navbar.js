import React from "react";
import Search from "./../containers/Search";

const Navbar = () => {

  const style = {
    navbar: {
      height: "60px"
    }
  }

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark" style={style.navbar}>
      <h1 className="navbar-brand">YOUSTREAM</h1>
      <Search/>
    </nav>
  );
}

export default Navbar;
