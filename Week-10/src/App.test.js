import { screen, render, fireEvent } from "@testing-library/react";
import Inputshort from "./Inputshort.js";
import Linkresult from "./Linkresult.js";

test("Check h1 tag contains text as URL Shortener", () => {
  const setinputValue = "";
  render(<Inputshort setinputValue={setinputValue} />);
  var h1 = screen.getByTestId("h1").textContent;
  expect(h1).toEqual("URL Shortener");
});

test("that input field populated", () => {
  const setinputValue = "";
  render(<Inputshort setinputValue={setinputValue} />);
  const inputEl = screen.getAllByPlaceholderText("Paste a link to shorten");
  expect(inputEl).toBeTruthy();
});

test("that button is available", () => {
  const testIdName = "button";
  const setinputValue = "";
  const { getByTestId } = render(<Inputshort setinputValue={setinputValue} />);
  const foundButton = getByTestId(testIdName);
  expect(foundButton).toBeTruthy();
});

test("that use can enter data input field", () => {
  const setinputValue = "";
  render(<Inputshort setinputValue={setinputValue} />);
  const inputEl = screen.getByTestId("url-input");
  fireEvent.change(inputEl, { target: { value: "$23.0" } });
  expect(inputEl.value).toBe("$23.0");
});
