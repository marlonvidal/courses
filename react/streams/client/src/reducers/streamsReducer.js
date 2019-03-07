import constants from "../common/constants";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case constants.actionTypes.streams.get:
    case constants.actionTypes.streams.create:
    case constants.actionTypes.streams.edit:
      return { ...state, [action.payload.id]: action.payload };
    case constants.actionTypes.streams.delete:
      return _.omit(state, action.payload);
    case constants.actionTypes.streams.list:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
