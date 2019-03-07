import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={ props.Image } />
      </a>
      <div className="content">
        <a href="/" className="author">
          { props.Name }
        </a>
        <div className="metadata">
          <span className="date">Today at { props.Time }</span>
        </div>
        <div className="text">{ props.Text }</div>
      </div>
    </div>
  );
};

export default CommentDetail;