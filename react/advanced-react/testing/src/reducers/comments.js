import { SAVE_COMMENTS, FETCH_COMMENTS } from "actions/types";

export const saveCommentReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];

    case FETCH_COMMENTS:
      return [
        ...state,
        action.payload.data.map(item => {
          return item.name;
        })
      ];
    default:
      return state;
  }
};
