import React from "react";
import PropTypes from "prop-types";

const NotesList = props => {
  const { notes } = props;
  const showNotes = () => {
    const list = notes.map(item => {
      return (
        <li key={item} data-test-id="note-list-item">
          {item}
        </li>
      );
    });
    return list;
  };
  return (
    <section className="note-list">
      <ul>{showNotes()}</ul>
    </section>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array
};

export default NotesList;
