import { saveComments } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("actions", () => {
  describe("saveComments", () => {
    it("has the correct type", () => {
      const action = saveComments("");
      expect(action.type).toEqual(SAVE_COMMENT);
    });

    it("has the correct payload", () => {
      const value = "comment";
      const action = saveComments(value);

      expect(action.payload).toEqual(value);
    });
  });
});
