import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signUp = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem("token", response.data.token);

    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: response.data.error
    });
  }
};

export const signIn = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem("token", response.data.token);

    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: response.data.error
    });
  }
};

export const signOut = () => {
  localStorage.removeItem("token");

  return {
    type: AUTH_USER,
    payload: ""
  };
};
