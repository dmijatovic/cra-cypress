import React, { useState } from "react";
import PropTypes from "prop-types";

const TitleInput = props => {
  const [input, setInput] = useState("");
  const { onAddNote } = props;
  return (
    <section className="note-input">
      <input
        autoFocus
        type="text"
        name="note-title"
        id="note-title"
        data-test-id="note-input-text"
        value={input}
        onKeyPress={({ key }) => {
          debugger;
          if (key.toLowerCase() === "enter") {
            onAddNote(input);
            //clear input
            setInput("");
          }
        }}
        onChange={({ target }) => {
          if (target) setInput(target.value);
        }}
      />
      <button
        data-test-id="add-note-btn"
        onClick={() => {
          onAddNote(input);
          //clear input
          setInput("");
        }}
      >
        Add
      </button>
    </section>
  );
};

TitleInput.propTypes = {
  onAddNote: PropTypes.func
};

export default TitleInput;
