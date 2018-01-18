import React, { Component } from "react";
import Search from "./../containers/Search";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { Redirect, Link } from "react-router-dom";

class Navbar extends Component {

  renderSearchResults = () => {
    if (this.props.videos.found === true) {
      return (
        <Redirect to={`/videos/search`}/>
      );
    }
  }

  render () {
    const style = {
      navbar: {
        height: "80px"
      }
    }
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark" style={style.navbar}>
          <Link to="/" className="navbar-brand" style={{fontSize: "24px"}}>
            <Icon name="video play" size="big"/>
            YOUSTREAM
          </Link>
          <Search/>
        </nav>
        {this.renderSearchResults()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    videos: state.videos
  };
}

export default connect(mapStateToProps, actions)(Navbar);