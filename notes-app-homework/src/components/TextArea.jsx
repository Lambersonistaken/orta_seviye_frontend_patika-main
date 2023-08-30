import React, { useState } from "react";
import "./textArea.css";

function TextArea({ onAddNote }) {
  const [noteText, setNoteText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      onAddNote({
        text: noteText,
        color: selectedColor,
      });
      setNoteText("");
      setSelectedColor("");
    }
  };

  return (
    <div>
      <div className="textContainer">
        <textarea
          className={`wideInput ${selectedColor}`}
          placeholder="Enter your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
      </div>
      <div className="buttonContainer">
        <div className="colorPicker">
          <div>
            <button
              className="colorButton pink"
              onClick={() => handleColorClick("pink")}
            ></button>
          </div>
          <div>
            <button
              className="colorButton purple"
              onClick={() => handleColorClick("purple")}
            ></button>
          </div>
          <div>
            <button
              className="colorButton yellow"
              onClick={() => handleColorClick("yellow")}
            ></button>
          </div>
          <div>
            <button
              className="colorButton blue"
              onClick={() => handleColorClick("blue")}
            ></button>
          </div>
          <div>
            <button
              className="colorButton green"
              onClick={() => handleColorClick("green")}
            ></button>
          </div>
        </div>

        <div>
          <button className="note-button" onClick={handleAddNote}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default TextArea;
