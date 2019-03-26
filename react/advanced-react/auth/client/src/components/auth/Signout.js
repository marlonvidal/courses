import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions";

class Signout extends React.Component {
  render() {
    return <h3>You signed out!</h3>;
  }

  componentDidMount() {
    this.props.signOut();
  }
}

export default connect(
  null,
  { signOut }
)(Signout);
