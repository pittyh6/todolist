import React from "react";

function Dropbox(props) {
  const options = props.options;
  const dropboxOptions = options.map((option, index) => (
    <option value={option} key={index}>
      {option}
    </option>
  ));
  return (
    <select name="filter" id="filter">
      {dropboxOptions}
    </select>
  );
}

export default Dropbox;
