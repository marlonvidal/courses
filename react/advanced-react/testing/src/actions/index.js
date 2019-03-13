import { SAVE_COMMENTS } from "actions/types";

export const saveComments = comment => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
};
