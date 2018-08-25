import React from "react";

const About = () => {

  const style = {
    textAlign: "center",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem",
    color: "#fff",
    backgroundColor: '#36393f'
  }

  return (
    <div style={style}>
      <div>
        <h1>Welcome to Youstreamer, a mini Youtube Clone</h1>
        <h2>Search for your favorite video!</h2>
      </div>
    </div>
  );
}

export default About;
