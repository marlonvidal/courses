import React from "react";
import { connect } from "react-redux";

export const CommentList = () => {
  return <div>Comment List</div>;
};

const mapStateToPros = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToPros)(CommentList);
