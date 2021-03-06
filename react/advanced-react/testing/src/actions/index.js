import { SAVE_COMMENTS, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";
import axios from "axios";

export const saveComments = comment => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};

export const changeAuth = isLoggedIn => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
};
