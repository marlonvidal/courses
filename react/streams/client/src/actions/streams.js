import constants from "../common/constants";
import streams from "../apis/streams";
import history from "../history";

export const createStream = stream => async (dispatch, getState) => {
  const { userId } = getState().auth;

  const response = await streams.post("/streams", { ...stream, userId });

  dispatch({
    type: constants.actionTypes.streams.create,
    payload: response.data
  });

  history.push("/");
};

export const editStream = (id, stream) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, stream);

  dispatch({
    type: constants.actionTypes.streams.edit,
    payload: response.data
  });

  history.push("/");
};

export const deleteStream = id => async dispatch => {
  const response = await streams.delete(`/streams/${id}`);

  dispatch({
    type: constants.actionTypes.streams.delete,
    payload: response.data
  });

  history.push("/");
};

export const listStreams = () => async dispatch => {
  const response = await streams.get("/streams");

  dispatch({
    type: constants.actionTypes.streams.list,
    payload: response.data
  });
};

export const getStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: constants.actionTypes.streams.get,
    payload: response.data
  });
};
