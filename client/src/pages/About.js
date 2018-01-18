import React from "react";

const About = () => {

  const style = {
    margin: "90px 70px 0 230px",
    textAlign: "center",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div style={style}>
      <div>
        <h1>Hi! My name is Isaac.</h1>
        <h2>Youstreamer is a web application that looks a lot like Youtube. Well... this is not a coincidence. The purpose of this project was to sharpen my React and Redux skills, while creating a fun project because I love coding! Please feel free to search for awesome videos and also take a look at my portfolio by clicking the link on the sidebar. Thank you!</h2>
        <p>- Isaac Kwon</p>
      </div>
    </div>
  );
}

export default About;
