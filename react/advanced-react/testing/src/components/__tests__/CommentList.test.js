import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

describe("CommentList", () => {
  let wrapped;
  const val1 = "comment 1";
  const val2 = "comment 2";

  beforeEach(() => {
    const initialState = {
      comments: [val1, val2]
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it("creates one LI per comment", () => {
    expect(wrapped.find("li").length).toEqual(2);
  });

  it("show the text for each comment", () => {
    const liTexts = wrapped.render().text();
    expect(liTexts).toContain(val1);
    expect(liTexts).toContain(val2);
  });
});
