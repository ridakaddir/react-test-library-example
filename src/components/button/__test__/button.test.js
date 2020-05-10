import React from "react";
import ReactDom from "react-dom";
import Button from "../button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("dev");
  ReactDom.render(<Button />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("button click works", () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Button onClick={handleClick} label="click me please" />
  );
  getByTestId("button").click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// it("button render with style", () => {
//   const { getByTestId } = render(<Button label="click me please" />);
//   const node = getByTestId("button");
//   fireEvent.mouseOver(node);
//   expect(node).toHaveStyle(`
//     border: 1px solid gray;
//     padding: 10px;
//     background: inherit;
//     color: #FFF;
//     `);
// });
