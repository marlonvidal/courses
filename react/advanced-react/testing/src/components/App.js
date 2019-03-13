import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { connect } from "react-redux";

export const App = () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default connect(null)(App);
