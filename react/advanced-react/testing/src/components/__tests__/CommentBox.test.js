import React from "react";
import { mount } from "enzyme";
import { CommentBox } from "components/CommentBox";

describe("CommentBox", () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<CommentBox />);
  });

  it("has a text area and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
  });

  describe("the text area", () => {
    const newValue = "new comment";

    beforeEach(() => {
      const mock = { target: { value: newValue } };

      wrapped.find("textarea").simulate("change", mock);
      wrapped.update();
    });

    it("has a text area that users can type in", () => {
      expect(wrapped.find("textarea").prop("value")).toEqual(newValue);
    });

    it("when form is submitted, text area gets emptied", () => {
      wrapped.find("form").simulate("submit");
      wrapped.update();

      expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
  });

  afterEach(() => {
    wrapped.unmount();
  });
});
