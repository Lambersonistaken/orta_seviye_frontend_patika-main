import React from "react";

function NoteList({ notes, searchTerm }) {
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-container">
      {filteredNotes.map((note, index) => (
        <div
          key={index}
          className="note"
          style={{
            backgroundColor: note.color,
          }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
}

export default NoteList;
