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
        <h1>Hi! My name is Isaac.</h1>
        <h2>Youstreamer is a web application that looks a lot like Youtube. Well... this is not a coincidence.</h2>
        <h2>The purpose of this project was to sharpen my React and Redux skills, while creating a fun project because I love coding! </h2>
        <h2>Please feel free to search for awesome videos and also take a look at my portfolio by clicking the link on the sidebar. Thank you!</h2>
        <p>- Isaac Kwon</p>
      </div>
    </div>
  );
}

export default About;
