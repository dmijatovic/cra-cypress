import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <>
      <h1>Profile {props["id"]}</h1>
      <pre>{JSON.stringify(props, undefined, 2)}</pre>
    </>
  );
}

Profile.propTypes = {
  id: PropTypes.string
};

export default Profile;
