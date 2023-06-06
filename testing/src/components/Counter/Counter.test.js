import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter tests", () => {
  let increaseButton, decreaseButton, count;

  beforeEach(() => {
    console.log("Her testten önce çalışacağım");
    // beforeEach() is a function that will run before each test
    render(<Counter />);
    increaseButton = screen.getByText("Increment");
    decreaseButton = screen.getByText("Decrement");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("Bir kere çalışacağım");
  });

  test("increase btn", () => {
    fireEvent.click(increaseButton);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    fireEvent.click(decreaseButton);
    expect(count).toHaveTextContent("-1");
  });
});
