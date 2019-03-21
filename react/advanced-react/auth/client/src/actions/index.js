import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signUp = formProps => async dispatch => {
  try {
    const response = await axios.post("http://localhost:3090/signup", formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: response.data.error
    });
  }
};
