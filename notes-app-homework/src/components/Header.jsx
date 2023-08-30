import React from "react";
import SearchBox from "./SearchBox";

function Header({ onSearch }) {
  return (
    <div>
      <h1 style={{ fontWeight: 700, color: "grey" }}>NotesApp</h1>
      <SearchBox onSearch={onSearch} />
    </div>
  );
}

export default Header;
