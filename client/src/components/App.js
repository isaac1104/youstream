import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import About from "./../pages/About";
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
          <Route exact path="/videos" component={Videos}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
