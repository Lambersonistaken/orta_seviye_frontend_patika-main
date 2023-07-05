import React from "react";

function Form() {
  return (
    <form>
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
}

export default Form;
