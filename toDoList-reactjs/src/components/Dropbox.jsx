import React from "react";

function Dropbox(props) {
  const options = props.options;
  const dropboxOptions = options.map((option) => (
    <option value={option} key={option}>
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
