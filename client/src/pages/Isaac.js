import React from "react";

const Isaac = () => {

  const style = {
    margin: "30px 70px 0 100px",
    textAlign: "center",
    minHeight: "100vh",
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(/images/la.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "5rem",
    color: "tomato"
  }

  return (
    <div style={style}>
      <div>
        <h1>Want to see more of my work?</h1>
        <h2>Please check out my portfolio page by clicking the link below!</h2>
        <h3><a href="https://isaac1104.herokuapp.com">My Portfolio</a></h3>
        <h4>Thank you!</h4>
      </div>
    </div>
  );
}

export default Isaac;
