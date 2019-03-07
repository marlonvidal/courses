import constants from "../common/constants";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.actionTypes.signIn:
      return { ...state, isSignedIn: true };
    case constants.actionTypes.signOut:
      return { ...state, isSignedIn: false, userId: null };
    case constants.actionTypes.setUserId:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};
