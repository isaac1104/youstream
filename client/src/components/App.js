import React from "react";
import Navbar from "./../containers/Navbar";
import VideoDetails from "./VideoDetails";
import About from "./../pages/About";
import Videos from "./../pages/Videos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/videos/search/:keyword" component={Videos}/>
          <Route exact path="/videos/:id" component={VideoDetails}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
