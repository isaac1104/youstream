import React, { Component } from "react";
import SearchField from "./../components/SearchField";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import * as actions from './../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  formSubmit = ({ keyword }) => {
    this.props.history.push(`/videos/search/${keyword}`);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const style = {
      display: "flex",
      justifyContent: "center",
      margintop: "20px"
    }

    return (
      <form onSubmit={handleSubmit(this.formSubmit)} style={style}>
        <Field
          name="keyword"
          component={SearchField}
        />
        <Button
          animated
          color="teal"
          size="mini"
          type="submit"
          disabled={pristine || submitting}>
          <Button.Content visible>SEARCH</Button.Content>
          <Button.Content hidden>
            <Icon name="search"/>
          </Button.Content>
        </Button>
      </form>
    );
  }
}

function mapStateToProps({ videos }) {
  return {
    videos
  }
}

export default withRouter(reduxForm({ form: "keyword" })(connect(mapStateToProps, actions)(Search)));
