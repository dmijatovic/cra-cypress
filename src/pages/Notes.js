import React, { useState, useEffect } from "react";
import axios from "axios";
// import PropTypes from "prop-types";

import TitleInput from "../components/inputs/TitleInput";
import NotesList from "../components/notes/NotesList";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

const Notes = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState(null);
  const [loader, showLoader] = useState(true);

  useEffect(() => {
    axios
      .get("/api/notes")
      .then(({ data }) => {
        setState(data);
      })
      .catch(err => {
        // console.error("Failed to get notes...", err);
        setError({
          title: "Failed to get notes!",
          message: err.message
        });
      })
      .finally(() => {
        showLoader(false);
      });
  }, []);

  const addNote = input => {
    debugger;
    if (input) {
      const newState = [...state, input];
      setState(newState);
    }
  };
  const getBody = () => {
    if (loader) {
      return <Loader message="Loading notes..." />;
    } else if (error) {
      //error message
      return <ErrorMessage {...error} />;
    } else {
      //content
      return (
        <>
          <TitleInput onAddNote={addNote} />
          <NotesList notes={state} />
        </>
      );
    }
  };
  return (
    <>
      <h1 className="page-title" data-test-id="notes-page-title">
        Notes
      </h1>
      {getBody()}
    </>
  );
};

// Notes.propTypes = {};

export default Notes;
