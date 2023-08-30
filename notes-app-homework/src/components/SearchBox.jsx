import React from "react";

function SearchBox({ onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          borderRadius: 20,
          padding: 15,
          width: 250,
          height: 6,
          border: "1px solid black",
        }}
      />
    </div>
  );
}

export default SearchBox;
