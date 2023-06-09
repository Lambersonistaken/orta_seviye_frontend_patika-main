import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./index";

describe("Todo", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByPlaceholderText("Add a new task here...");
  });

  test("Varsayılan olarak 3 todo item olmalı", () => {
    const items = screen.getAllByText(/TODO/i);
    expect(items.length).toBe(3);
  });

  test("inptu ve buton olmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("inputa string girilip butona basıldığında yeni todo item eklenmeli", () => {
    const items = screen.getAllByText(/TODO/i);
    expect(items.length).toBe(3);

    fireEvent.change(input, { target: { value: "Test TODO" } });
    fireEvent.click(button);

    const newItems = screen.getAllByText(/TODO/i);
    expect(newItems.length).toBe(4);
  });
});
