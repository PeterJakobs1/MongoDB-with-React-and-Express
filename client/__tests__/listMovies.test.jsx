import ReactDOM from "react-dom";
import React from "react";
import { ListMovies } from "../listMovies";

describe("listMovies component", () => {
  it("Shows loading screen", () => {
    const domElement = document.createElement("div");
    ReactDOM.render(<ListMovies />, domElement);
    expect(domElement.innerHTML).toMatchSnapshot();
  });
});
