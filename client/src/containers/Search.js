import React, { Component } from "react";
import SearchField from "./../components/SearchField";
import { Button, Icon } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import * as actions from './../actions';
import { connect } from 'react-redux';


class Search extends Component {

  formSubmit = ({ search }) => {
    console.log(search);
    this.props.fetchVideos(search);
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const style = {
      display: "flex",
      justifyContent: "center",
      margintop: "20px"
    }

    return (
      <div style={style}>
        <form onSubmit={handleSubmit(this.formSubmit)} style={style}>
          <Field
            name="search"
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
      </div>
    )
  }
}

export default reduxForm({ form: "search" })(connect(null, actions)(Search));
