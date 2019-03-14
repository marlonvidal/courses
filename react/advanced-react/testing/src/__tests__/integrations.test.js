import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import moxios from "moxios";

describe("Integration Tests", () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
      status: 200,
      response: [
        { name: "Fetched #1" },
        { name: "Fetched #2" },
        { name: "Fetched #3" }
      ]
    });
  });

  it("can fetch a list of comments and displays them", done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    wrapped.find(".fetch-comments").simulate("click");

    moxios.wait(() => {
      wrapped.update();
      expect(wrapped.find("li").length).toEqual(3);
      done();
      wrapped.unmount();
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });
});
