import React from "react";
import { connect } from "react-redux";
import { getStream, editStream } from "../../actions/streams";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { getStream, editStream }
)(StreamEdit);
