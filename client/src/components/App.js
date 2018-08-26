import React from "react";
import Navbar from "./../containers/Navbar";
import VideoDetails from "./VideoDetails";
import About from "./../pages/About";
import ScrollToTop from './ScrollToTop';
import VideosContainer from "./../containers/VideosContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/videos/search/:keyword" component={VideosContainer} />
          <Route exact path="/videos/:id" component={VideoDetails} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
