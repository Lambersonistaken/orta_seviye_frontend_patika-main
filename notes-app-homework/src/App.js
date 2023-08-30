import React, { useState } from "react";
import Header from "./components/Header";
import TextArea from "./components/TextArea";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <TextArea onAddNote={addNote} />
      <NoteList notes={notes} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
