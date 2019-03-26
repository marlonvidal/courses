import React from "react";
import requireAuth from "./requireAuth";

class Feature extends React.Component {
  render() {
    return <h3>Welcome!</h3>;
  }
}

export default requireAuth(Feature);
