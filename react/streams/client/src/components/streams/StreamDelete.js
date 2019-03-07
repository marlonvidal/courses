import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Modal from "../Modal";
import { getStream, deleteStream } from "../../actions/streams";
import history from "../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    const actions = (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.stream.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">Cancel</Link>
      </React.Fragment>
    );

    const dismissModal = () => history.push("/");

    if (!this.props.stream) return <div>Loading...</div>;

    return (
      <div>
        <div>StreamDelete</div>
        <Modal
          onDismiss={() => dismissModal}
          title="Delete Stream"
          message={`Are you sure you want to delete the stream ${
            this.props.stream.title
          }?`}
          actions={actions}
        />
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
  {
    getStream,
    deleteStream
  }
)(StreamDelete);
