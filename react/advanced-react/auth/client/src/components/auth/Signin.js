import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { signIn } from "../../actions";

class Signin extends React.Component {
  onSubmit = formProps => {
    this.props.signUp(formProps, () => {
        this.props.history.push('/feature')
    });
  };

  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{errorMessage}</div>
        <button>Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(
    mapStateToProps,
    { signIn }
  ),
  reduxForm({ form: "signin" })
)(Signin);
