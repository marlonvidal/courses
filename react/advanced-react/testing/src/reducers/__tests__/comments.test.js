import commentsReducer from "reducers/comments";
import { SAVE_COMMENTS } from "actions/types";

describe("commentsReducer", () => {
  it("handles actions of type SAVE_CONTENT", () => {
    const newComment = "new comment";
    const action = {
      type: SAVE_COMMENTS,
      payload: newComment
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([newComment]);
  });

  it("handles action with unknown type", () => {
    const newState = commentsReducer([], { type: "UNKNOWN_TYPE" });
    expect(newState).toEqual([]);
  });
});
