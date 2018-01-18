import React from "react";
import Navbar from "./../containers/Navbar";
import Sidebar from "./Sidebar";
import VideoDetails from "./VideoDetails";
import About from "./../pages/About";
import Isaac from "./../pages/Isaac";
import Videos from "./../pages/Videos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/isaac" component={Isaac}/>
          <Route exact path="/videos/search" component={Videos}/>
          <Route exact path="/videos/:id" component={VideoDetails}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
