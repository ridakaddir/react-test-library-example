import React from "react";
import { render, within } from "@testing-library/react";
import App from "./App";

test("renders learn react app", () => {
  render(<App />);
});

test("AppHeader renders a <Clock />", () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  const app = getByTestId("app");
  const buttonsInApp = within(app).getAllByTestId("button");
  buttonsInApp.forEach((btn) => {
    btn.click();
  });
  expect(buttonsInApp.length).toBe(1);
});
