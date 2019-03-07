import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

describe("App", () => {
  it("should render without errors", () => {
    expect(app).toMatchSnapshot();
  });

  it("initialize the state with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking the add button", () => {
    const id = 1;

    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("adds a new gift to state", () => {
      expect(app.state().gifts).toEqual([{ id: id }]);
    });

    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it(`creates a Gift component`, () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("and the user wants to remove the added gift", () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it("removes the gift from state", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
