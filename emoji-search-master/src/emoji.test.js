import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import EmojiResultsRow from "./EmojiResultRow";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
    render(<Header />);
    render(<SearchInput />);
    render(<EmojiResults />);
    render(<EmojiResultsRow />);
  });

  test("Header renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  test("SearchInput renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchInput />, div);
  });

  test("EmojiResults renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EmojiResults />, div);
  });

  test("EmojiResultsRow renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EmojiResultsRow />, div);
  });

  test("Bir filtreleme yapılırsa, emoji listesi güncellenmeli", () => {
    const input = screen.getByPlaceholderText("Search emoji");
    fireEvent.change(input, { target: { value: "100" } });
    const emojiRows = screen.getAllByTestId("emoji-row");
    expect(emojiRows.length).toBe(1);
  });

  test("emoji üzeirne tıklandığında kopyalanmalı", () => {
    const input = screen.getByPlaceholderText("Search emoji");
    fireEvent.change(input, { target: { value: "100" } });
    const emojiRow = screen.getAllByTestId("emoji-row")[0];
    fireEvent.click(emojiRow);
    const alert = screen.getByText("Emoji copied to clipboard!");
    expect(alert).toBeInTheDocument();
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
